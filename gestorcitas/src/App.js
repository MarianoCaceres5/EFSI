import React, { useEffect, useState } from 'react';
import './App.css';
import Titulo from './components/Titulo.js'
// import Subtitulo from './components/Subtitulo.js'
import Formulario from './components/Formulario.js';
import ListadoCitas from './components/ListadoCitas';

function App() {

    const [arrayCitas, setArrayCitas] = useState([{id:0, mascota:"Pedro", dueno:"Bautista", fecha:"2021-08-05", hora:"08:20", sintomas:"Problemas estomacales"}]);  

    function agregarCita(cita){
        setArrayCitas(
            [
                ...arrayCitas,
                cita
            ]            
        )
    }

    function eliminarCita(idCita){
        let nuevoArray = arrayCitas.filter(cita => cita.id != idCita);
        setArrayCitas(nuevoArray)
    }

    return (
        <>    
            <Titulo/>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        {/* <Subtitulo texto="CREAR MI CITA"/> */}
                        <h2>CREAR MI CITA</h2>
                        <Formulario onAgregarCita={agregarCita}/>
                    </div>   
                    <div className="one-half column">
                        <h2>Administra tus citas</h2>
                        <ListadoCitas listaCitas={arrayCitas} onEliminarCita={eliminarCita}/>
                    </div>                 
                </div>
            </div>        
        </>
    );
}



export default App
