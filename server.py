import http.server
import socketserver
import webbrowser
import os

PORT = 8080
DIRECTORY = "public"

if not os.path.exists(DIRECTORY):
    os.makedirs(DIRECTORY)
    print(f"Dossier '{DIRECTORY}' créé.")

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
        self.extensions_map.update({
            ".html": "text/html; charset=utf-8",
            ".css": "text/css; charset=utf-8",
            ".js": "application/javascript; charset=utf-8",
        })

try:
    with socketserver.TCPServer(("127.0.0.1", PORT), CustomHandler) as httpd:
        print(f"Serveur en cours d'exécution sur http://localhost:{PORT}")
        webbrowser.open(f"http://localhost:{PORT}")
        httpd.serve_forever()
except OSError as e:
    print(f"Erreur lors de la création du serveur : {e}. Essayez de changer le port ou vérifiez les restrictions de l'environnement.")
