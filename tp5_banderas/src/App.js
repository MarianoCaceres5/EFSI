
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Bandera from './components/Bandera';
import Datos from './components/Datos';

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
        setLetrasAyuda([])
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
              <Datos puntos={puntos} timer={timer} />
              <Bandera pais={pais} ayuda={ayuda}/>              
            </div>
            <div className="w-50">
              <Formulario chequearRespuesta={chequearRespuesta} darAyuda={darAyuda}/>
            </div>
          </div>
        </div>
      ) : (<div>Loading..</div>)}
    </>
  );
}

export default App;
