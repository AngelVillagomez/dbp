document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
    //Variable Titulo...
  let title = document.getElementById('title').value;
    //Variable Descripcion...
  let description = document.getElementById('description').value;
  console.log(description)
  var type = document.getElementById('typeSelect').value;
  //var t = 'typeSelect';
  //let typeSelect = document.getElementById('typeSelect').value;
  //console.log(typeSelect)

  let task = {
    title,//title: title
    description//description: description
  };
  if(localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));//JSON objeto a string
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById('formTask').reset();
  e.preventDefault();
}

function deleteTask(title) {
  console.log(title)
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  //var lista = document.getElementById('typeSelect');
  //var valorSeleccionado = lista.options[lista.selectedIndex].value;
  //var textoSeleccionado = lista.options[lista.selectedIndex].text;
  //alert("Opcion seleccionada: " + textoSeleccionado + "\n Valor de la operacion: " + valorSeleccionado);
  var first = document.getElementById('typeSelect').value;
  console.log('Primer select -> '+first);
  let tasksView = document.getElementById(first);

  //let tasksView = document.getElementByClassName("custom-select");
  //let tasksView = document.getElementById('typeSelect').value;
  //console.log(tasksView);
  tasksView.innerHTML = '';
  for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <p>${title} - ${description}
          <a href="#" onclick="deleteTask('${title}')" class="btn btn-outline-success ml-5">Delete</a>
          </p>
        </div>
      </div>`;
  }
}

getTasks();