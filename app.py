from flask import Flask, render_template, redirect, request, url_for, session

app = Flask(__name__, static_folder='static', template_folder='templates')
app.secret_key='SECRETO'
class logeo:
    def __init__(self,usuario,contraseña,numero):
        self.usuario= usuario
        self.contraseña= contraseña
        self.id= numero
    def __repr__(self):
        return f'<user:[self.usuario]>'


    
numero=1
pos=[]



@app.route("/home")
def home():
   
    return render_template('home.html', usuario=[x for x in pos if x.id==session['user_id']][0])


@app.route('/logeo', methods=['GET', 'POST'])
def login():
    error = None
    
    if request.method == 'POST':
        session.pop('user_id', None)
        usu=request.form['username']
        con=request.form['password']
        log=[x for x in pos if x.usuario==usu][0]
        if log and log.contraseña==con:
            session['user_id']=log.id
            return redirect(url_for('home'))
        else:
            error = 'usuario o contraseña invalida'
            
    if request.method == 'GET':
        return render_template('Project.html')
    
    return render_template('Project.html', error=error)



@app.route("/", methods=['GET', 'POST'])
def singin():
    global numero
    global usuario
    if request.method == 'POST':
        
        pos.append(logeo(request.form['username'],request.form['password'],numero))
        numero+=1
        return redirect(url_for('login'))
            
    return render_template('signin.html')   

           
    

if __name__== '__main__':
    app.run()
