from flask import Flask, render_template, redirect, request, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, current_user, login_user, login_required

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/about')
def about():
    return render_template('about.html')

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


if __name__== '__main__':
    app.run()