
// import CampoFormulario from "./CampoFormulario";
import { useState } from "react";
import Error from "./Error.js";

export default function Formulario({onAgregarCita}) {

    const [error, setError] = useState(false);
    const [idState, setId] = useState(1);
    const [cita, setCita] = useState({
        id : idState,
        mascota:'',
        dueno:'',
        fecha:'',
        hora:'',
        sintomas:''
    });     

    function crearCita(e){

        e.preventDefault();

        if (cita.mascota == '' || cita.dueno == '' || cita.fecha == '' || cita.hora == '' || cita.sintomas == ''){
            setError(true);
            return 0;
        }
        
        setError(false);
        setId(idState + 1)
        onAgregarCita(cita);            
        setCita({
            id : idState,
            mascota:'',
            dueno:'',
            fecha:'',
            hora:'',
            sintomas:''
        });                    

        //validar campos
        //crear cita
        //vaciar form
    }

    const onHandleChange = (e) =>{
        setCita({
            ...cita,
            id: idState,
            [e.target.name]:e.target.value
        }           
        )
    }

    return (
    <>
        <form onSubmit={(e) => crearCita(e)}>
            
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value={cita.mascota} onChange={onHandleChange}/>
            <label>Nombre Dueño</label>
            <input type="text" name="dueno" className="u-full-width" placeholder="Nombre dueño de la mascota" value={cita.dueno} onChange={onHandleChange}/>
            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width" value={cita.fecha} onChange={onHandleChange}/>
            <label>hora</label>
            <input type="time" name="hora" className="u-full-width" value={cita.hora} onChange={onHandleChange}/>
            <label>Sintomas</label>  
            <textarea name="sintomas" className="u-full-width" value={cita.sintomas} onChange={onHandleChange}></textarea>      
            
            {error ? (
                <Error/>
            ) : (
                <div> </div>
            )}
            
            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>

        </form>
    </>
    );
}
  