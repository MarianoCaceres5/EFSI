
let listaTareas = document.querySelector('#lista');
let arrayTareas = [];
let idIncremental = 0;

function AgregarTarea(){
    
    let tareaIngresada = document.querySelector('.inputTarea');
    let objetoTarea = {
        id : idIncremental++,
        checked : false,
        texto : tareaIngresada.value,
        fechaCreada :  Date.now(),
        fechaTachada : null
    }
    arrayTareas.push(objetoTarea);
    tareaIngresada.value = "";
    MostrarTareas();
}

function MostrarTareas(){
    listaTareas.innerHTML = "";
    arrayTareas.map((tarea) => {        
        if(tarea.checked == true){
            listaTareas.innerHTML += 
            `
                <div class="tarea">
                    <input type="checkbox" class="checked" checked onchange="TacharTarea(${tarea.id})">
                    <p class="textoTachado">${tarea.texto}</p>    
                    <button onclick="EliminarTarea(${tarea.id})" class="botonEliminar">Eliminar</button>
                </div>
            `; 
        }else{
            listaTareas.innerHTML += 
            `
                <div class="tarea">
                    <input type="checkbox" onchange="TacharTarea(${tarea.id})"">
                    <p>${tarea.texto}</p>   
                    <button onclick="EliminarTarea(${tarea.id})" class="botonEliminar">Eliminar</button>                  
                </div>
            `; 
        }
    });
}

function TacharTarea(id){

    let tareaSeleccionada = arrayTareas.filter(tarea =>(tarea.id == id));
    tareaSeleccionada.map(tarea =>{        
        if (tarea.checked == true){            
            tarea.checked = false;
            tarea.fechaTachada = null;
        }else{            
            tarea.checked = true;
            tarea.fechaTachada = Date.now()
        }
    });    
    MostrarTareas();
}

function MostrarTareaMasRapida(){
    let menorDistancia = 99999999, tareaMasRapida;
    arrayTareas.map(tarea =>{
        if(tarea.fechaTachada != null && (tarea.fechaTachada-tarea.fechaCreada) <= menorDistancia){
            menorDistancia = tarea.fechaTachada-tarea.fechaCreada;
            tareaMasRapida = tarea;
        }
    });

    let tareaTemporal = tareaMasRapida;
    arrayTareas[arrayTareas.indexOf(tareaMasRapida)] = arrayTareas[0];
    arrayTareas[0]= tareaTemporal;
    MostrarTareas();
    //FALTA DISTINGUIRLA CON UN COLOR O ALGO 
    //HACER QUE ELIMINAR SE MEUSTRE CON HOVER

}

function EliminarTarea(id){
    let arrayActualizado = arrayTareas.filter(tarea =>(tarea.id != id));
    arrayTareas = arrayActualizado;
    MostrarTareas();

}