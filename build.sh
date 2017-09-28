#!/bin/bash

OUTPUT="docs"

USAGE=$(cat <<- END
USAGE: build.sh <command> <options>

    Commands:

    build       rebuild the site
    clean       remove all build artifacts
    help        display this help message
    server      run a local server
    watch       start a server and rebuild periodically

END
)

# Helper Functions #####################################################################################################

function start-server {
    cd $OUTPUT
    python -m SimpleHTTPServer 8080 >/dev/null 2>&1 &
    SERVER_PID="$!"
    cd ..

    trap "kill $SERVER_PID; exit" SIGINT
}

function usage {
    printf "$USAGE\n\n"
    if [[ "$1" != "" ]]; then
        printf "\n$*\n"
    fi
    exit
}

# Command Functions ####################################################################################################

function run-build {
    mkdir -p "$OUTPUT"

    cd src
    find . -type f | grep -v templates | while read FILE; do
        BASENAME=$(basename "$FILE")
        DIRNAME=$(dirname "$FILE")

        EXT=$(echo "$BASENAME" | cut -d. -f2)
        BASENAME=$(echo "$BASENAME" | cut -d. -f1)

        # echo "file: $FILE, dirname: $DIRNAME, basename: $BASENAME, ext: $EXT"
        mkdir -p "../$OUTPUT/$DIRNAME"

        if [[ "$BASENAME.$EXT" == "data.js" ]]; then
            TARGET="../$OUTPUT/$DIRNAME/index.html"
            if [[ "$TARGET" -ot "$FILE" ]]; then
                pug -O $FILE < templates/recipe.pug > $TARGET
            fi
        elif [[ "$EXT" == "pug" ]]; then
            TARGET="../$OUTPUT/$DIRNAME/$BASENAME.html"
            if [[ "$TARGET" -ot "$FILE" ]]; then
                pug -o "../$OUTPUT/$DIRNAME" "$FILE"
            fi
        elif [[ "$EXT" == "png" ]]; then
            TARGET="../$OUTPUT/$DIRNAME/$BASENAME.$EXT"
            if [[ "$TARGET" -ot "$FILE" ]]; then
                cp "$FILE" "$TARGET"
            fi
        elif [[ "$EXT" == "scss" ]]; then
            TARGET="../$OUTPUT/$DIRNAME/$BASENAME.css"
            if [[ "$TARGET" -ot "$FILE" ]]; then
                sass --sourcemap=none "$FILE" "$TARGET"
            fi
        fi
    done
    cd ..
}
COMMANDS="build"

function run-clean {
    rm -rf "$OUTPUT" 2>/dev/null
}
COMMANDS="$COMMANDS,clean"

function run-help {
    usage
}
COMMANDS="$COMMANDS,help"

function run-server {
    start-server

    echo "Running server. Press ^C to stop"
    while true; do
        sleep 60
    done
}
COMMANDS="$COMMANDS,server"

function run-watch {
    start-server
    echo "Watching. Press ^C to cancel"

    while true; do
        run-build
        sleep 2
    done
}
COMMANDS="$COMMANDS,watch"

########################################################################################################################

COMMAND="$1"; shift

[[ "$COMMAND" == "" ]] && COMMAND="build"

grep -q "$COMMAND" <<< $COMMANDS || usage "Unknown command: $COMMAND"

while [[ "$1" != "" ]]; do
    case "$1" in
    esac
    shift
done

"run-$COMMAND"
