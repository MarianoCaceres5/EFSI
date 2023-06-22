
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
  }

  useEffect(() => {
    cargarPaises();
  }, []);

  useEffect(() => {
    setPais(getPaisRandom());
  }, [listaPaises])

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1)
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      {pais ? (
        <div className="App" >
          <header className="App-header">
            <h2>PUNTAJE: {puntos}</h2>
            <h3>TIEMPO: {timer}</h3>
            <img src={pais.flag} className="bandera" alt="bandera" />
            <h1>{ayuda}</h1>
            <form onSubmit={(e) => chequearRespuesta(e)}>
              <input type="text" name="pais" className="" placeholder="Nombre pais" />
              <button type="submit" className="u-full-width button-primary">Enviar Respuesta</button>
            </form>
            <button type="button" className="u-full-width button-primary" onClick={() => darAyuda()}>Ayuda</button>
          </header>
        </div>) : (<div>Loading..</div>)}
    </>
  );
}

export default App;
