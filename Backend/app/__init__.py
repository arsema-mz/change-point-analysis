from flask import Flask
from .routes import bp as api_bp
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)  # enable CORS for all routes

    from .routes import bp as api_bp
    app.register_blueprint(api_bp, url_prefix="/api")

    return app
