
var notaMate = document.getElementById("notaMatematica"), notaLengua = document.getElementById("notaLengua"), notaEFSI= document.getElementById("notaEFSI");
var matematica = document.getElementById("matematica"), lengua = document.getElementById("lengua"), efsi = document.getElementById("EFSI");
var notas = [notaMate, notaLengua, notaEFSI];
var materias = [matematica, lengua, efsi];

function CalcularPromedio(){
    
    if(notaMate.value == "" || notaLengua.value == "" || notaEFSI.value == ""){
        alert("Uno/s campo/s no ha/n sido completado/s");
    }else{        
        var promedio = (parseFloat(notaEFSI.value) + parseFloat(notaLengua.value) + parseFloat(notaMate.value)) / 3;
        var textoPromedio = document.getElementById("resultado");
        textoPromedio.innerHTML = promedio;

        var imagen = document.getElementById("gif");
        if(promedio >= 6){
            document.getElementById("resultado").style.color = "green";
            imagen.setAttribute("src", "img/aprobe.gif");
            
        }else{
            document.getElementById("resultado").style.color = "red";
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
        console.log(menosDiferencia);
        for(i = 0; i < materias.length; i++){
            if(menosDiferencia == (10 - parseFloat(notas[i].value))){
                materias[i].style.color = "blue";
            }else{
                materias[i].style.color = "black";
            }
        }

    }
}

document.addEventListener('keyup', (event) => {
    
    var disabled = 0;

    notas.forEach(nota => {
        if(parseFloat(nota.value) < 1 || parseFloat(nota.value) > 10){
            nota.style.color = "red";
            disabled = 1;
        }else{
            nota.style.color = "green";
        }
    });
    
    if(disabled === 1){
        $('.button').prop('disabled', true); //CONSULTAR SI ESTA BIEN EL JQUERY
    }else{
        $('.button').prop('disabled', false);
    }

}, false);


