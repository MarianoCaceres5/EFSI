
let listaTareas = document.querySelector('#lista');
let arrayTareas = [];
let idIncremental = 0;

function AgregarTarea(){   

    let tareaIngresada = document.querySelector('.inputTarea');
    if(tareaIngresada.value != 0){
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
    }else{
        alert("INGRESE UNA TAREA");
    }

}

function MostrarTareas(){
    listaTareas.innerHTML = "";
    arrayTareas.map((tarea) => {        
        if(tarea.checked == true){
            listaTareas.innerHTML += 
            `
                <li id="${tarea.id}" class="tarea">
                    <input type="checkbox" class="checked" checked onchange="TacharTarea(${tarea.id})">
                    <p class="textoTachado">${tarea.texto}</p>    
                    <button onclick="EliminarTarea(${tarea.id})" class="botonEliminar">Eliminar</button>
                </li>
            `; 
        }else{
            listaTareas.innerHTML += 
            `
                <li id="${tarea.id}" class="tarea">
                    <input type="checkbox" onchange="TacharTarea(${tarea.id})"">
                    <p>${tarea.texto}</p>   
                    <button onclick="EliminarTarea(${tarea.id})" class="botonEliminar">Eliminar</button>                  
                </li>
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
    let menorDistancia = 99999999, tareaMasRapida, tareaHecha = false;
    arrayTareas.map(tarea =>{
        if(tarea.fechaTachada != null && (tarea.fechaTachada-tarea.fechaCreada) <= menorDistancia){
            tareaHecha = true;
            menorDistancia = tarea.fechaTachada-tarea.fechaCreada;
            tareaMasRapida = tarea;
        }
    });
    if(tareaHecha == true){        
        document.querySelector('.tareaMasRapida').style.display = 'block';
        document.querySelector('.tareaMasRapida').innerHTML = `
            <h3>Tarea hecha en el menor tiempo: <span style="color:#007BFF;"> ${tareaMasRapida.texto} </span></h3>
        `;
    }else{
        document.querySelector('.tareaMasRapida').style.display = 'none';
        alert("Ninguna tarea fue realizada todavia");
    }
}

function EliminarTarea(id){
    let arrayActualizado = arrayTareas.filter(tarea =>(tarea.id != id));
    arrayTareas = arrayActualizado;
    MostrarTareas();
}