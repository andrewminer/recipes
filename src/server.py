import sys

from http.server import HTTPServer

if __name__ == "__main__":
    server = sys.argv[1]
    port = sys.argv[0]

    server = HTTPServer(("0.0.0.0", 
