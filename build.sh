#!/bin/bash

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
    cd dist
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
    mkdir -p dist
    
    cd src
    find . -type f | while read FILE; do
        BASENAME=$(basename "$FILE")
        DIRNAME=$(dirname "$FILE")
        
        EXT=$(echo "$BASENAME" | cut -d. -f2)
        BASENAME=$(echo "$BASENAME" | cut -d. -f1)
        
        # echo "file: $FILE, dirname: $DIRNAME, basename: $BASENAME, ext: $EXT"
        
        if [[ "$EXT" == "pug" ]]; then
            TARGET="../dist/$DIRNAME/$BASENAME.html"
            if [[ "$TARGET" -ot "$FILE" ]]; then
                pug -o "../dist/$DIRNAME" "$FILE"
            fi
        elif [[ "$EXT" == "png" ]]; then
            TARGET="../dist/$DIRNAME/$BASENAME.$EXT"
            if [[ "$TARGET" -ot "$FILE" ]]; then
                mkdir -p "../dist/$DIRNAME"
                cp "$FILE" "$TARGET"
            fi
        elif [[ "$EXT" == "scss" ]]; then
            TARGET="../dist/$DIRNAME/$BASENAME.css"
            if [[ "$TARGET" -ot "$FILE" ]]; then
                sass "$FILE" "$TARGET"
            fi
        fi
    done
    cd ..
}
COMMANDS="build"

function run-clean {
    rm -rf dist 2>/dev/null
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
