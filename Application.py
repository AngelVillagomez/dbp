from flask import Flask, render_template, redirect, request, url_for

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route("/home")
def home():
    return render_template('index.html')

@app.route('/', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if request.form['username'] != 'admin' or request.form['password'] != 'admin':
            error = 'usuario o contraseña invalida'
        else:
            return redirect(url_for('home'))
    return render_template('Project.html', error=error)
#EN PROCESO...
@app.route("/inlog")
def inlog():
    return render_template('index.html')

if __name__== '__main__':
    app.run()