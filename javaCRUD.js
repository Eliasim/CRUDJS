var listaPersonas = [];

function guardar(){
    var gNombre = document.getElementById("inNombre").value;
    var gFecha = document.getElementById("inFecha").value;
    var gTelefono = document.getElementById("inTelefono").value;
    var gEdad = document.getElementById("inEdad").value;
    var gTrabajo = document.getElementById("inTrabajo").value;
    
    
    listaPersonas = [...listaPersonas,{gNombre, gFecha, gTelefono, gEdad, gTrabajo}];    
    mostrar();    
}

function mostrar(){
    var node = document.createElement("li");
    var btnEditar = document.createElement("button");
    var btnEliminar = document.createElement("button");
    
    btnEditar.textContent = "Editar";
    btnEliminar.textContent = "Eliminar";

    listaPersonas.forEach(element => {
        node.appendChild(document.createTextNode(element.gNombre + " / " + element.gFecha+ " / " + element.gTelefono+ " / " + element.gEdad+ " / " + element.gTrabajo));
        node.setAttribute("id", "p0")
        btnEditar.setAttribute("id", "bi0")
        btnEliminar.setAttribute("id", "bii0")
        btnEliminar.setAttribute("onclick", "eliminar()")
        document.querySelector("ul").appendChild(node);
        document.querySelector("ul").appendChild(btnEditar);
        document.querySelector("ul").appendChild(btnEliminar);
        listaPersonas = [];
    });
}

function eliminar(){
    document.getElementById("p0").remove();
    document.getElementById("bi0").remove();
    document.getElementById("bii0").remove();
}
