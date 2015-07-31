// Agregar archivos desde el botón
function handleFileSelect(evt) {
	var files = evt.target.files; // FileList object.

	// files is a FileList of File objects. List some properties.
	var output = [];
	for (var i = 0, f; f = files[i]; i++) {
		output.push('Fichero: ', escape(f.name), '\n',
						'Tipo: ', f.type || 'n/a', ' - ', f.size, ' bytes.\n',
						'Ultima modificacion: ', f.lastModifiedDate.toLocaleDateString());
	}
	document.getElementById('list').innerHTML = output.join('');
	document.getElementById('files').addEventListener('change', handleFileSelect, false);
}

// Agregar archivos con la opción drag&drop
function handleFileSelect(evt) {
	evt.stopPropagation();
	evt.preventDefault();

	var files = evt.dataTransfer.files; // FileList object.
	var reader = new FileReader(); //FileReader object.

	reader.onload = function(e) {
	  var text = reader.result;
	  str = text.toString();
	  document.getElementById('dyd_detail').innerHTML = str;
	  control_busqueda();
	}

	// files is a FileList of File objects. List some properties.
	var output = [];
	for (var i = 0, f; f = files[i]; i++) {
		reader.readAsText(f, 'UTF-8');
		output.push('Fichero: ', escape(f.name), '\n',
					'Tipo: ', f.type || 'n/a', ' - ', f.size, ' bytes.\n',
					'Ultima modificacion: ', f.lastModifiedDate.toLocaleDateString());
		//console.log(reader);
	}
	document.getElementById('dyd_result').innerHTML = output.join('');
}

function handleDragOver(evt) {
	evt.stopPropagation();
	evt.preventDefault();
	evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

function activateDropZoneHandler() {
	// Setup the dnd listeners.
	var dropZone = document.getElementById('drop_zone');
	dropZone.addEventListener('dragover', handleDragOver, false);
	dropZone.addEventListener('drop', handleFileSelect, false);
}