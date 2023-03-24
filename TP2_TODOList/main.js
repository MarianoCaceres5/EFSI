
let listaTareas = document.querySelector('#lista');
let arrayTareas = [];
let idIncremental = -1;

function AgregarTarea(){
    
    listaTareas.innerHTML = "";

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
    arrayTareas.map((tarea) => {
        if(tarea.checked == true){
            listaTareas.innerHTML += 
            `
                <div class="tarea" onmouseover="MostrarTacho()">
                    <input type="checkbox" class="checked" checked onchange="TacharTarea(${tarea.id})">
                    <p class="textoTachado">${tarea.texto}</p>    
                    <img src="img/trashIcon.png" onclick="EliminarTarea()" class="trash" alt="">
                </div>
            `; 
        }else{
            listaTareas.innerHTML += 
            `
                <div class="tarea" onmouseover="MostrarTacho()">
                    <input type="checkbox" onchange="TacharTarea(${tarea.id})"">
                    <p>${tarea.texto}</p>   
                    <img src="img/trashIcon.png" onclick="EliminarTarea()" class="trash" alt="">                  
                </div>
            `; 
        }

    });
}

function TacharTarea(id){
    listaTareas.innerHTML = "";
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
        console.log();
        if(tarea.fechaTachada != null && (tarea.fechaTachada-tarea.fechaCreada) <= menorDistancia){
            menorDistancia = tarea.fechaTachada-tarea.fechaCreada;
            tareaMasRapida = tarea;
        }
    });
    console.log(tareaMasRapida);
    //MOSTRARLA EN LA PAGINA   
    //AGREGAR EL ELIMINAR TODO

}


