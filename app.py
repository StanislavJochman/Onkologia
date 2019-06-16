from flask import Flask
from flask import render_template
app = Flask(__name__, static_url_path = "/img", static_folder = "img",static_url_path = "/css", static_folder = "css")


@app.route("/")
def hello():
    return render_template('index.html')
