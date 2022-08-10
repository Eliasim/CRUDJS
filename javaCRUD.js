var listaPersonas = [];
var node, el

function limpiar(){
    document.getElementById("inNombre").value = ""
    document.getElementById("inFecha").value = ""
    document.getElementById("inTelefono").value = ""
    document.getElementById("inEdad").value =""
    document.getElementById("inTrabajo").value =""
}

function guardar(){
    var gNombre = document.getElementById("inNombre").value;
    var gFecha = document.getElementById("inFecha").value;
    var gTelefono = document.getElementById("inTelefono").value;
    var gEdad = document.getElementById("inEdad").value;
    var gTrabajo = document.getElementById("inTrabajo").value;
    
    
    limpiar();
    let objeto = {gNombre, gFecha, gTelefono, gEdad, gTrabajo}
    listaPersonas.push(objeto);
    mostrar();
    objeto = {}
}

function mostrar(){
    var node = document.createElement("li");
    var btnEditar = document.createElement("button");
    var btnEliminar = document.createElement("button");
    let lastItem = listaPersonas.length-1;

    btnEditar.textContent = "Editar";
    btnEliminar.textContent = "Eliminar";

    node.appendChild(document.createTextNode(listaPersonas[lastItem].gNombre + " / " + listaPersonas[lastItem].gFecha+ " / " + listaPersonas[lastItem].gTelefono+ " / " + listaPersonas[lastItem].gEdad+ " / " + listaPersonas[lastItem].gTrabajo));
    el = node.setAttribute("id", lastItem)
    el = btnEditar.setAttribute("id", lastItem)
    el = btnEliminar.setAttribute("id", lastItem)
    btnEliminar.setAttribute("onclick", "eliminar('"+lastItem+"')")
    btnEditar.setAttribute("onclick", "editar()")
    document.querySelector("ul").appendChild(node);
    document.querySelector("ul").appendChild(btnEditar);
    document.querySelector("ul").appendChild(btnEliminar);
}

function eliminar(id){
    listaPersonas.splice(id,1)
}


function editar(){
    eliminar()
    guardar()
}