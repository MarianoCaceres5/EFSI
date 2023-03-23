
let listaTareas = document.querySelector('#lista');
let arrayTareas = [];
let idIncremental = 1;

function AgregarTarea(){
    listaTareas.innerHTML = "";

    let tareaIngresada = document.querySelector('.inputTarea').value;
    //console.log(tareaIngresada);

    let objetoTarea = {
        id : idIncremental++,
        checked : false,
        texto : tareaIngresada,
        fechaCreada :  Date.now(),
        fechaTachada : null
    }
    arrayTareas.push(objetoTarea);
    MostrarTareas();

}

function MostrarTareas(){
    arrayTareas.map((tarea) => {
        if(tarea.checked == true){
            listaTareas.innerHTML += 
            `
                <div class="tarea">
                    <input type="checkbox" checked onchange="TacharTarea(${tarea.id})">
                    <p class="textoTachado">${tarea.texto}</p>    
                </div>
            `; 
        }else{
            listaTareas.innerHTML += 
            `
                <div class="tarea">
                    <input type="checkbox" onchange="TacharTarea(${tarea.id})"">
                    <p>${tarea.texto}</p>    
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
        }else{
            tarea.checked = true;
            tarea.fechaTachada = Date.now()
        }
    });
    console.log(tareaSeleccionada)
    //MostrarTareas();

}