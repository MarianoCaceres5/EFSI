
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';

function App() {

  const [listaPaises, setListaPaises] = useState([]);
  const [pais, setPais] = useState(null);
  const [puntos, setPuntos] = useState(0);
  const [timer, setTimer] = useState(15);
  const [ayuda, setAyuda] = useState('');
  const [letrasAyuda, setLetrasAyuda] = useState([]);

  let chequearRespuesta = (e) => {
    e.preventDefault();
    if (e.target.pais.value.toLowerCase() === pais.name.toLowerCase()) {
      setPuntos(puntos + 10 + (timer > 0 ? timer : 0));
    } else {
      setPuntos(puntos - 1);
    }
    e.target.pais.value = '';
    setPais(getPaisRandom());
    setTimer(15)
    setAyuda('')
    setLetrasAyuda([])
  }

  let cargarPaises = async () => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((result) => {
        setListaPaises(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  let getPaisRandom = () => {
    let numRandom = getNumeroRandom(listaPaises.length);
    return listaPaises[numRandom];
  }

  function getNumeroRandom(max) {
    return Math.floor(Math.random() * max);
  }

  function darAyuda() {    
    let letraRandom = pais.name[getNumeroRandom(pais.name.length)]
    while((letrasAyuda.includes(letraRandom))){
      letraRandom = pais.name[getNumeroRandom(pais.name.length)]
    }
    setLetrasAyuda([...letrasAyuda, letraRandom]);

    let guiones = '';
    for (let i = 0; i < pais.name.length; i++) {
      if (pais.name[i] === ' ') {
        guiones += ' ';
      } else if(letrasAyuda.includes(pais.name[i])){
        guiones += pais.name[i];
      } else {
        guiones += '_';
      }
    }
    setAyuda(guiones);
    setTimer(timer-2)
  }

  useEffect(() => {
    cargarPaises();
  }, []);

  useEffect(() => {
    setPais(getPaisRandom());
  }, [listaPaises])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1)
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      {pais ? (    
        
          <div className="container">   
            <div className="datos">
              <h1>PUNTAJE: {puntos}</h1>
              <h1>TIEMPO: {timer}</h1>     
            </div>  
            <div className="juego">
              <div className="w-50">
                <img src={pais.flag} className="bandera" alt="bandera" />
                <h1 className="ayuda">{ayuda}</h1>
              </div>              
              <div className="w-50"> 
                <form className='form' onSubmit={(e) => chequearRespuesta(e)}>
                  <input type="text" name="pais" className="text-input" autocomplete="off" placeholder="" />
                  <button type="button" className="help-button" onClick={() => darAyuda()}>Ayuda</button>
                  <button type="submit" className="send-button">Enviar Respuesta</button>
                </form>              
              </div>
            </div>
          </div>
        ) : (<div>Loading..</div>)}
    </>
  );
}

export default App;
