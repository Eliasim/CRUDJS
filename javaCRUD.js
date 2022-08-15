//alert('Si quieres editar un usuario, primero ingresa nuevamente TODOS los datos en el formulario y posteriormente presiona el boton "Editar" en el usuario que desee')

var listaPersonas = [];
var node, el
inFecha.max = new Date().toISOString().split("T")[0]

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
    let objeto = {gNombre, gFecha, gTelefono, gEdad, gTrabajo}
    
    
    limpiar();
    listaPersonas.push(objeto);
    mostrar();
    objeto = {}
    console.log(listaPersonas);
}

function mostrar(){
    var node = document.createElement("li");
    var btnEditar = document.createElement("button");
    var btnEliminar = document.createElement("button");
    let lastItem = listaPersonas.length-1;

    btnEditar.textContent = "Editar";
    btnEliminar.textContent = "Eliminar";

    node.appendChild(document.createTextNode("Nombre: " + listaPersonas[lastItem].gNombre));
    node.appendChild(document.createElement("br"))
    node.appendChild(document.createTextNode("Fecha de Nacimiento " + listaPersonas[lastItem].gFecha));
    node.appendChild(document.createElement("br"))
    node.appendChild(document.createTextNode("Telefono: " + listaPersonas[lastItem].gTelefono));
    node.appendChild(document.createElement("br"))
    node.appendChild(document.createTextNode("Edad: " + listaPersonas[lastItem].gEdad));
    node.appendChild(document.createElement("br"))
    node.appendChild(document.createTextNode("Trabajo: " + listaPersonas[lastItem].gTrabajo));
    el = node.setAttribute("id", lastItem)
    el = btnEditar.setAttribute("id", lastItem)
    el = btnEliminar.setAttribute("id", lastItem)
    btnEliminar.setAttribute("onclick", "eliminar('"+lastItem+"')")
    btnEditar.setAttribute("onclick", "editar('"+lastItem+"')")
    document.querySelector("ul").appendChild(node);
    document.querySelector("ul").appendChild(btnEditar);
    document.querySelector("ul").appendChild(btnEliminar);
}

function eliminar(id){
    listaPersonas.splice(id,1)
    document.getElementById(id).remove()
    document.getElementById(id).remove()
    document.getElementById(id).remove()
}


function editar(id){
    var gNombre = document.getElementById("inNombre").value;
    var gFecha = document.getElementById("inFecha").value;
    var gTelefono = document.getElementById("inTelefono").value;
    var gEdad = document.getElementById("inEdad").value;
    var gTrabajo = document.getElementById("inTrabajo").value;
    var objeto = {gNombre, gFecha, gTelefono, gEdad, gTrabajo}

    document.getElementById(id).innerHTML = gNombre + " / " + gFecha + " / " + gTelefono + " / " + gEdad + " / " + gTrabajo + " / " 

    edit = listaPersonas[id]
    listaPersonas.splice(id,1,objeto)
    limpiar()
}