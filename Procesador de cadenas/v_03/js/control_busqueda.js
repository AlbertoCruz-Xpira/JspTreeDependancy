function control_busqueda(){

	var includeFilter = document.getElementById("includeFilter").checked;	//console.log(includeFilter);
	var importFilter = document.getElementById("importFilter").checked;		//console.log(importFilter);
	
	if (includeFilter == true) {
		buscar_cadena("<cms:include");
	}
	if (importFilter == true) {
		buscar_cadena("import");
	}
}