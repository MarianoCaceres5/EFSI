
var notaMate = document.getElementById("notaMatematica"), notaLengua = document.getElementById("notaLengua"), notaEFSI= document.getElementById("notaEFSI");
var matematica = document.getElementById("matematica"), lengua = document.getElementById("lengua"), efsi = document.getElementById("EFSI");
var notas = [notaMate, notaLengua, notaEFSI];
var materias = [matematica, lengua, efsi];

function CalcularPromedio(){
    
    if(notaMate.value == "" || notaLengua.value == "" || notaEFSI.value == ""){
        alert("Uno/s campo/s no ha/n sido completado/s");
    }else{        
        var promedio = (parseFloat(notaEFSI.value) + parseFloat(notaLengua.value) + parseFloat(notaMate.value)) / notas.length;
        document.getElementById("resultadoObtenido").innerHTML = "Promedio: " + promedio;
        // var textoPromedio = document.getElementById("resultado");
        // textoPromedio.innerHTML = promedio;

        var imagen = document.getElementById("gif");
        if(promedio >= 6){
            document.getElementById("resultadoObtenido").style.color = "green";
            imagen.setAttribute("src", "img/aprobe.gif");            
            
        }else{
            document.getElementById("resultadoObtenido").style.color = "red";
            imagen.setAttribute("src", "img/reprobe.gif");
        }
    }
}

function MejorMateria(){

    var menosDiferencia = 111111111;

    if(notaMate.value == "" || notaLengua.value == "" || notaEFSI.value == ""){
        alert("Uno/s campo/s no ha/n sido completado/s");
    }else{

        for(i = 0; i < materias.length; i++){
            if(menosDiferencia >= (10 - parseFloat(notas[i].value))){
                menosDiferencia = 10 - parseFloat(notas[i].value);
            }  
        }
        
        var txtMejorMateria = "Mejor materia: ";
        for(i = 0; i < materias.length; i++){
            if(menosDiferencia == (10 - parseFloat(notas[i].value))){
                materias[i].style.color = "white";
                materias[i].style.background = "blue";
                
                txtMejorMateria += materias[i].id + " - ";
                document.getElementById("resultadoObtenido").style.color = "blue";
                document.getElementById("resultadoObtenido").innerHTML = txtMejorMateria;
            }else{
                materias[i].style.color = "black";
                materias[i].style.background = "white";
            }
        }

    }
}

document.addEventListener('keyup', (event) => {
    
    var disabled = 0;
    var botones = document.querySelectorAll('.button');

    notas.forEach(nota => {
        if(parseFloat(nota.value) < 1 || parseFloat(nota.value) > 10){
            nota.style.color = "red";
            disabled = 1;
        }else{
            nota.style.color = "green";
        }
    });
    
    if(disabled === 1){             
        botones.forEach(boton => {
            boton.disabled = true;
        });
        // $('.button').prop('disabled', true);
    }else{
        botones.forEach(boton => {
            boton.disabled = false;
        });
    }

}, false);
