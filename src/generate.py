import os
import re
import shutil
import sys
import yaml

from io import FileIO
from jinja2 import Environment, FileSystemLoader
from typing import Any, Dict, Iterable


########################################################################################################################

def as_fraction(text):
    if text is None:
        return ""

    result = str(text)
    result = re.sub("\.125$", "⅛", result)
    result = re.sub("\.25$", "¼", result)
    result = re.sub("\.3+$", "⅓", result)
    result = re.sub("\.375$", "⅜", result)
    result = re.sub("\.5$", "½", result)
    result = re.sub("\.625$", "⅝", result)
    result = re.sub("\.6+$", "⅔", result)
    result = re.sub("\.75$", "¾", result)
    result = re.sub("\.875$", "⅞", result)
    result = re.sub("^0+", "", result)
    return result


########################################################################################################################

DATA_FILE = "data.yml"
ENCODING = "utf-8"
HELPER_FUNCTIONS = {
    "as_fraction": as_fraction
}
IMAGE_FILE = "image.png"
SECTIONS_FILE = "sections.yml"

template_env = None
target_dir = None


########################################################################################################################

def load_recipes(section: Dict[str, Any]) -> Iterable[Dict[str, Any]]:
    for recipe_id in os.listdir(section["path"]):
        recipe_path = os.path.join(section["path"], recipe_id)
        if not os.path.isdir(recipe_path):
            continue

        data_file_path = os.path.join(recipe_path, DATA_FILE)
        if not os.path.isfile(data_file_path):
            continue

        with FileIO(data_file_path, "r") as f:
            recipe_yaml = f.readall().decode(ENCODING)

        recipe = yaml.load(recipe_yaml, Loader=yaml.SafeLoader)
        recipe["id"] = recipe_id
        recipe["path"] = data_file_path
        recipe["image_path"] = os.path.join(recipe_path, IMAGE_FILE)
        recipe.update(HELPER_FUNCTIONS)

        yield recipe


def load_sections(src_dir: str) -> Iterable[Dict[str, Any]]:
    sections_path = os.path.join(src_dir, SECTIONS_FILE)
    with FileIO(sections_path, "r") as f:
        section_yaml_text = f.readall()

    all_sections = yaml.load(section_yaml_text, Loader=yaml.SafeLoader)
    for section in all_sections:
        section["path"] = os.path.join(src_dir, section["id"])
        yield section


def write_cookbook(sections: Iterable[Dict[str, Any]], target_dir: str):
    template = template_env.get_template("cookbook.jin")
    html = template.render(sections=sections)

    os.makedirs(target_dir, exist_ok=True)

    output_path = os.path.join(target_dir, "index.html")
    with FileIO(output_path, "w") as f:
        f.write(html.encode(ENCODING))


def write_recipe(recipe: Dict[str, Any], recipe_path: str):
    template = template_env.get_template("recipe.jin")
    html = template.render(recipe)

    os.makedirs(recipe_path, exist_ok=True)

    output_path = os.path.join(recipe_path, "index.html")
    with FileIO(output_path, "w") as f:
        f.write(html.encode(ENCODING))

    if os.path.exists(recipe["image_path"]):
        image_target_path = os.path.join(recipe_path, IMAGE_FILE)
        shutil.copyfile(recipe["image_path"], image_target_path)


########################################################################################################################

if __name__ == "__main__":
    template_path = sys.argv[1]
    src_dir = sys.argv[2]
    target_dir = sys.argv[3]

    template_env = Environment(
        loader=FileSystemLoader(template_path),
        lstrip_blocks=True,
        trim_blocks=True,
    )

    sections = list(load_sections(src_dir))
    for section in sections:
        section["recipes"] = sorted(list(load_recipes(section)), key=lambda r: r["title"])
        for recipe in section["recipes"]:
            recipe_path = os.path.join(target_dir, section["id"], recipe["id"])
            write_recipe(recipe, recipe_path)

    write_cookbook(sections, target_dir)
