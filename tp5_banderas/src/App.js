
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';

function App() {

  const [listaPaises, setListaPaises] = useState([]);
  const [pais, setPais] = useState(null);
  const [puntos, setPuntos] = useState(0);
  const [timer, setTimer] = useState(15);
  const [ayuda, setAyuda] = useState('_____');
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
    setAyuda('_____')
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

  function darAyuda() {

    let cantAyudas =  cntDistinct(pais.name)

    if(cantAyudas > letrasAyuda.length){
      let letraRandom;
      do {
        console.log(1)
        letraRandom = pais.name[getNumeroRandom(pais.name.length)]
      } while (letrasAyuda.includes(letraRandom));

      setLetrasAyuda([...letrasAyuda, letraRandom]);

      let guiones = '';
      for (let i = 0; i < pais.name.length; i++) {
        if (pais.name[i] === ' ') {
          guiones += ' ';
        } else if (letrasAyuda.includes(pais.name[i])) {
          guiones += pais.name[i];
        } else {
          guiones += '_';
        }
      }

      setAyuda(guiones);
      setTimer(timer - 2);
    }
    
  }

  let getPaisRandom = () => {
    let numRandom = getNumeroRandom(listaPaises.length);
    return listaPaises[numRandom];
  }

  function getNumeroRandom(max) {
    return Math.floor(Math.random() * max);
  }

  function cntDistinct(str) {
    let s = new Set();
    for (let i = 0; i < str.length; i++) {
      s.add(str[i]);
    }
    return s.size;
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
      } else {
        setPuntos(puntos - 1);
        setPais(getPaisRandom());
        setTimer(15)
        setAyuda('_____')
        setletrasAyuda([])
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      {pais ? (
        <div className="container">
          <div className="juego">
            <div className="w-50">
              <div className='datos'>
                <h2>Puntaje: <span style={{ color: "#1466c3" }}>{puntos}</span></h2>
                <h2>Tiempo: <span style={{ color: "#1466c3" }}>{timer} segundos</span></h2>
              </div>
              <img src={pais.flag} className="bandera" alt="bandera" />
              <h1 className="ayuda">{ayuda}</h1>
            </div>
            <div className="w-50">
              <Formulario chequearRespuesta={chequearRespuesta} darAyuda={darAyuda} ayuda={ayuda}/>
            </div>
          </div>
        </div>
      ) : (<div>Loading..</div>)}
    </>
  );
}

export default App;
