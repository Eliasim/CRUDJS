var listaPersonas = [];
var node, el
inFecha.max = new Date().toISOString().split("T")[0]


limpiar()

///Funcion para limpiar los inputs del formulario///

function limpiar(){
    document.getElementById("inNombre").value = ""
    document.getElementById("inFecha").value = ""
    document.getElementById("inTelefono").value = ""
    document.getElementById("inEdad").value =""
    document.getElementById("inTrabajo").value =""
}

///Funcion para guardar los datos en el array///

function guardar(){
    var gNombre = document.getElementById("inNombre").value;
    var gFecha = document.getElementById("inFecha").value;
    var gTelefono = document.getElementById("inTelefono").value;
    var gEdad = document.getElementById("inEdad").value;
    var gTrabajo = document.getElementById("inTrabajo").value;
    let objeto = {gNombre, gFecha, gTelefono, gEdad, gTrabajo}

    new function validar(){
        var elemento = document.getElementById("inNombre")
        var elemento = document.getElementById("inFecha")
        var elemento = document.getElementById("inTelefono")
        var elemento = document.getElementById("inEdad")
        var elemento = document.getElementById("inTrabajo")
        if(elemento.value==""){
            alert("Te faltan campos por llenar")
            return 
        }else{
            limpiar();
            listaPersonas.push(objeto);
            mostrarNombre();
            mostrarFecha();
            mostrarTelefono();
            mostrarEdad();
            mostrarTrabajo();
            mostrarBotones();
            objeto = {}
        }
    }
    
    
}

///Funcion para mostrar el Nombre de la ultima persona guardada///

function mostrarNombre(){
    var node = document.createElement("tr");
    let lastItem = listaPersonas.length-1;

    node.appendChild(document.createTextNode(listaPersonas[lastItem].gNombre));
    node.setAttribute("id", lastItem)
    node.setAttribute("class", "flex justify-center p-1 mx-2 my-2 uppercase")
    document.getElementById("listNombre").appendChild(node);  
}

///Funcion para mostrar la Fecha de Nacimiento de la ultima persona guardada///

function mostrarFecha(){
    var node = document.createElement("tr");
    let lastItem = listaPersonas.length-1;
    node.appendChild(document.createTextNode(listaPersonas[lastItem].gFecha));
    node.setAttribute("id", lastItem)
    node.setAttribute("class", "flex justify-center p-1 mx-2 my-2")
    document.getElementById("listFecha").appendChild(node); 
}

///Funcion para mostrar el Telefono de la ultima persona guardada///

function mostrarTelefono(){
    var node = document.createElement("tr");
    let lastItem = listaPersonas.length-1;
    node.appendChild(document.createTextNode(listaPersonas[lastItem].gTelefono));
    node.setAttribute("id", lastItem)
    node.setAttribute("class", "flex justify-center p-1 mx-2 my-2")
    document.getElementById("listTelefono").appendChild(node); 
}

///Funcion para mostrar la Edad de la ultima persona guardada///

function mostrarEdad(){
    var node = document.createElement("tr");
    let lastItem = listaPersonas.length-1;
    node.appendChild(document.createTextNode(listaPersonas[lastItem].gEdad));
    node.setAttribute("id", lastItem)
    node.setAttribute("class", "flex justify-center p-1 mx-2 my-2")
    document.getElementById("listEdad").appendChild(node); 
}

///Funcion para mostrar el Trabajo de la ultima persona guardada///

function mostrarTrabajo(){
    var node = document.createElement("tr");
    let lastItem = listaPersonas.length-1;
    node.appendChild(document.createTextNode(listaPersonas[lastItem].gTrabajo));
    node.setAttribute("id", lastItem)
    node.setAttribute("class", "flex justify-center p-1 mx-2 my-2 uppercase")
    document.getElementById("listTrabajo").appendChild(node); 
}

///Funcion para crear botonos "Editar" y "Eliminar para cada persona"///

function mostrarBotones(){
    var node = document.createElement("tr");
    let lastItem = listaPersonas.length-1;
    var btnEditar = document.createElement("button");
    var btnEliminar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEliminar.textContent = "Eliminar";
    
    btnEditar.setAttribute("id", lastItem)
    btnEditar.setAttribute("name", "btnEditar")
    btnEliminar.setAttribute("id", lastItem)
    btnEliminar.setAttribute("name", "btnEliminar")
    btnEditar.setAttribute("class", "rounded-md bg-gray-300 p-1 mx-2 my-1")
    btnEliminar.setAttribute("class", "rounded-md bg-gray-300 p-1 mx-2 my-1")
    btnEliminar.setAttribute("onclick", "eliminar('"+lastItem+"')")
    btnEditar.setAttribute("onclick", "editar('"+lastItem+"')")
    document.getElementById("listAcciones").appendChild(node);
    document.getElementById("listAcciones").appendChild(btnEditar);
    document.getElementById("listAcciones").appendChild(btnEliminar);  
}

///Funcion para Eliminar una persona seleccionada///

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

///Funcion para Editar una person seleccionada///

function editar(id){

    nom = listaPersonas[id].gNombre
    fec = listaPersonas[id].gFecha
    tel = listaPersonas[id].gTelefono
    eda = listaPersonas[id].gEdad
    tra = listaPersonas[id].gTrabajo

    document.form.inNombre.value = nom
    document.form.inFecha.value = fec
    document.form.inTelefono.value = tel
    document.form.inEdad.value = eda
    document.form.inTrabajo.value = tra
    
    btnActualizar = document.createElement("button")
    btnActualizar.textContent = "Actualizar"    
    btnActualizar.setAttribute("class", "font-mono rounded-md bg-gray-300 p-1 mb-6 mx-2")
    btnActualizar.setAttribute("type", "button")
    btnActualizar.setAttribute("onclick", "actualizar('"+id+"')")
    btnActualizar.setAttribute("id", id)
    document.getElementById("botones").appendChild(btnActualizar)

    var btnEdit =  document.getElementsByName("btnEditar")
    for (let i = 0; i < btnEdit.length; i++) {
        btnEdit[i].classList.add("invisible");      
    }

    var btnEliminar =  document.getElementsByName("btnEliminar")
    for (let i = 0; i < btnEliminar.length; i++) {
        btnEliminar[i].classList.add("invisible");        
    }

    ocultar()
}

///Funcion para actualizar datos de alguna persona///

function actualizar(id){
    var gNombre = document.getElementById("inNombre").value;
    var gFecha = document.getElementById("inFecha").value;
    var gTelefono = document.getElementById("inTelefono").value;
    var gEdad = document.getElementById("inEdad").value;
    var gTrabajo = document.getElementById("inTrabajo").value;
    let objeto = {gNombre, gFecha, gTelefono, gEdad, gTrabajo}
    
    act = listaPersonas.splice(id, 1, objeto)    
    document.getElementById(id).remove()
    rempNombre(id)
    rempFecha(id)
    rempTelefono(id)
    rempEdad(id)
    rempTrabajo(id)
    limpiar()
    mostrar()

    var btnEdit =  document.getElementsByName("btnEditar")
    for (let i = 0; i < btnEdit.length; i++) {
        btnEdit[i].classList.remove("invisible");        
    }

    var btnEliminar =  document.getElementsByName("btnEliminar")
    for (let i = 0; i < btnEliminar.length; i++) {
        btnEliminar[i].classList.remove("invisible");        
    }
}

///Funcion para remplazar el Nombre de una persona al editar///

function rempNombre(id){
    var gNombre = document.getElementById("inNombre").value;
    var nuevoTr = document.createElement("tr")
    var nuevoNombre = document.createTextNode(gNombre)
    nuevoTr.setAttribute("id", id)
    nuevoTr.setAttribute("class", "flex justify-center p-1 mx-2 uppercase")
    nuevoTr.appendChild(nuevoNombre)

    var listNombre = document.getElementById("listNombre")
    listNombre.replaceChild(nuevoTr,listNombre.childNodes[id])
}

///Funcion para remplazar la Fecha de Nacimiento de una persona al editar///

function rempFecha(id){
    var gFecha = document.getElementById("inFecha").value;
    var nuevoFechaTr = document.createElement("tr")
    var nuevoFecha = document.createTextNode(gFecha)
    nuevoFechaTr.setAttribute("id", id)
    nuevoFechaTr.setAttribute("class", "flex justify-center p-1 mx-2")
    nuevoFechaTr.appendChild(nuevoFecha)

    var listFecha = document.getElementById("listFecha")
    listFecha.replaceChild(nuevoFechaTr,listFecha.childNodes[id])
}

///Funcion para remplazar el Telefono de una persona al editar///

function rempTelefono(id){
    var gTelefono = document.getElementById("inTelefono").value;
    var nuevoTelefonoTr = document.createElement("tr")
    var nuevoTelefono = document.createTextNode(gTelefono)
    nuevoTelefonoTr.setAttribute("id", id)
    nuevoTelefonoTr.setAttribute("class", "flex justify-center p-1 mx-2")
    nuevoTelefonoTr.appendChild(nuevoTelefono)

    var listTelefono = document.getElementById("listTelefono")
    listTelefono.replaceChild(nuevoTelefonoTr,listTelefono.childNodes[id])
}

///Funcion para remplazar la Edad de una persona al editar///

function rempEdad(id){
    var gEdad = document.getElementById("inEdad").value;
    var nuevoEdadTr = document.createElement("tr")
    var nuevoEdad = document.createTextNode(gEdad)
    nuevoEdadTr.setAttribute("id", id)
    nuevoEdadTr.setAttribute("class", "flex justify-center p-1 mx-2")
    nuevoEdadTr.appendChild(nuevoEdad)

    var listEdad = document.getElementById("listEdad")
    listEdad.replaceChild(nuevoEdadTr,listEdad.childNodes[id])
}

///Funcion para remplazar el Trabajo de una persona al editar///

function rempTrabajo(id){
    var gTrabajo = document.getElementById("inTrabajo").value;
    var nuevoTrabajoTr = document.createElement("tr")
    var nuevoTrabajo = document.createTextNode(gTrabajo)
    nuevoTrabajoTr.setAttribute("id", id)
    nuevoTrabajoTr.setAttribute("class", "flex justify-center p-1 mx-2 uppercase")
    nuevoTrabajoTr.appendChild(nuevoTrabajo)

    var listTrabajo = document.getElementById("listTrabajo")
    listTrabajo.replaceChild(nuevoTrabajoTr,listTrabajo.childNodes[id])
}

///Funcion ocultar el boton guardar///

function ocultar(){
    let ocultar = document.getElementById("btnGuardar")
    ocultar.style.display = "none"
}

///Funcion para mostrar el boton guardar///

function mostrar(){
    let mostrar = document.getElementById("btnGuardar")
    mostrar.style.display = ""
}
