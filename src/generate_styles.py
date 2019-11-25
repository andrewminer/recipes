import sys
import sass

if __name__ == "__main__":
    src_dir = sys.argv[1]
    target_dir = sys.argv[2]

    sass.compile(dirname=(src_dir, target_dir))
