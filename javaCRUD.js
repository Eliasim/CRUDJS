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
    mostrarNombre();
    mostrarFecha();
    mostrarTelefono();
    mostrarEdad();
    mostrarTrabajo();
    mostrarBotones();
    objeto = {}
    console.log(listaPersonas);
}

function mostrarNombre(){
    var node = document.createElement("tr");
    let lastItem = listaPersonas.length-1;

    node.appendChild(document.createTextNode(listaPersonas[lastItem].gNombre));
    node.setAttribute("id", lastItem)
    document.getElementById("listNombre").appendChild(node);  
}

function mostrarFecha(){
    var node = document.createElement("tr");
    let lastItem = listaPersonas.length-1;
    node.appendChild(document.createTextNode(listaPersonas[lastItem].gFecha));
    node.setAttribute("id", lastItem)
    document.getElementById("listFecha").appendChild(node); 
}

function mostrarTelefono(){
    var node = document.createElement("tr");
    let lastItem = listaPersonas.length-1;
    node.appendChild(document.createTextNode(listaPersonas[lastItem].gTelefono));
    node.setAttribute("id", lastItem)
    document.getElementById("listTelefono").appendChild(node); 
}

function mostrarEdad(){
    var node = document.createElement("tr");
    let lastItem = listaPersonas.length-1;
    node.appendChild(document.createTextNode(listaPersonas[lastItem].gEdad));
    node.setAttribute("id", lastItem)
    document.getElementById("listEdad").appendChild(node); 
}

function mostrarTrabajo(){
    var node = document.createElement("tr");
    let lastItem = listaPersonas.length-1;
    node.appendChild(document.createTextNode(listaPersonas[lastItem].gTrabajo));
    node.setAttribute("id", lastItem)
    document.getElementById("listTrabajo").appendChild(node); 
}

function mostrarBotones(){
    var node = document.createElement("tr");
    let lastItem = listaPersonas.length-1;
    var btnEditar = document.createElement("button");
    var btnEliminar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEliminar.textContent = "Eliminar";
    
    btnEditar.setAttribute("id", lastItem)
    btnEliminar.setAttribute("id", lastItem)
    btnEditar.setAttribute("class", "rounded-md bg-gray-300")
    btnEliminar.setAttribute("class", "rounded-md bg-gray-300")
    btnEliminar.setAttribute("onclick", "eliminar('"+lastItem+"')")
    btnEditar.setAttribute("onclick", "editar('"+lastItem+"')")
    document.getElementById("listAcciones").appendChild(node);
    document.getElementById("listAcciones").appendChild(btnEditar);
    document.getElementById("listAcciones").appendChild(btnEliminar);  
}

function eliminar(id){
    listaPersonas.splice(id,1)
    document.getElementById(id).remove()
    document.getElementById(id).remove()
    document.getElementById(id).remove()
    document.getElementById(id).remove()
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

    document.getElementById(id).innerHTML = gNombre + " / " + gFecha + " / " + gTelefono + " / " + gEdad + " / " + gTrabajo

    edit = listaPersonas[id]
    listaPersonas.splice(id,1,objeto)
    limpiar()
}