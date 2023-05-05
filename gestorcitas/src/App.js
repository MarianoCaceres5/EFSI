import React from 'react';
import './App.css';
import Titulo from './components/Titulo.js'
// import Subtitulo from './components/Subtitulo.js'
import Formulario from './components/Formulario.js';
import ListadoCitas from './components/ListadoCitas.js';

function App() {
    return (
        <>    
            <Titulo/>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        {/* <Subtitulo texto="CREAR MI CITA"/> */}
                        <h2>CREAR MI CITA</h2>
                        <Formulario/>
                    </div>
                    <div className="one-half column">
                        {/* <Subtitulo texto="Administra tus citas"/>*/}
                        <h2>Administra tus citas</h2>
                        <ListadoCitas/>
                    </div>
                </div>
            </div>        
        </>
    );
}

export default App

