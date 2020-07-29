const list_items = document.querySelectorAll('.list-item');//list, elemento del documento
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];

	item.addEventListener('dragstart', function () { //SOLICITAR ARRASTRE DE ELEMENTO
		draggedItem = item;
		setTimeout(function () {        // alertas
			item.style.display = 'none'; // no se muestra
		}, 0)
	});

	item.addEventListener('dragend', function () { //CUANDO LA OPERACION SE COMPLETA, SI TIENE EXITO O NO y se queda el elemento en la fila
		setTimeout(function () {
			draggedItem.style.display = 'block'; //elemento establecido como bloque
			draggedItem = null;
		}, 0);
	})

	for (let j = 0; j < lists.length; j ++) {
		const list = lists[j];

		list.addEventListener('dragover', function (e) {//SI EL MOUSE SE MUEVE CUANDO ESTÁ ARRASTRANDO y si se coloca en un lugar valido
			e.preventDefault();//canceela el evento sin cancelar el funcionamiento
		});

		list.addEventListener('dragenter', function (e) {// MOSTRAR EL RESALTADO en la fila que se está
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});

		list.addEventListener('dragleave', function (e) {//salir del evento al arrastrar y cambia el color dee la anterior fila
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		list.addEventListener('drop', function (e) {//finaliza el movimiento y cambia el color de la fila en la que se queda
			console.log('drop');
			this.append(draggedItem);//inserta el elemento pero al ultimo
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
	}
}
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Necesita escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}