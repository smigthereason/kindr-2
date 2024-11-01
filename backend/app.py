from flask import Flask
from flask_migrate import Migrate
from models import db
from config import Config
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)  # Initialize SQLAlchemy with the app
migrate = Migrate(app, db)

CORS(app)

from routes import *  # Import routes after the app is set up

with app.app_context():
    db.create_all()  # Create database tables

if __name__ == '__main__':
    app.run(debug=True)
