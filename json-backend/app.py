import flask, json, flask_cors

app = flask.Flask(__name__, static_folder="../build/static", template_folder="../build/")

flask_cors.CORS(app)

@app.route("/")
def index():
    return flask.render_template("index.html")


@app.route('/api')
def api():

    with open('configs/rooms.json') as f:
        rooms = json.loads(f.read())

    print(rooms)

    return flask.jsonify({"rooms": rooms})

if __name__=='__main__':
    app.run('127.0.0.1', port=8000, debug=True)
