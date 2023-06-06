
// import CampoFormulario from "./CampoFormulario";
import { useState } from "react";

export default function Formulario({onAgregarCita}) {

    const [idState, setId] = useState(0);
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

        if(cita.mascota == '' || cita.dueno == '' || cita.fecha == '' || cita.hora == '' || cita.sintomas == ''){
            
        }
        setId(idState + 1)

        //validar campos
        //crear cita
        //vaciar form

        setCita({
            id: idState,
            mascota: e.target.mascota.value,
            dueno: e.target.propietario.value,
            fecha: e.target.fecha.value,
            hora: e.target.hora.value,
            sintomas: e.target.sintomas.value
        })

        onAgregarCita(cita)

    }

    const onHandleChange = (e) =>{
        setCita({
            ...cita,
            [e.target.name]:e.target.value
        }           
        )
    }


    return (
    <>
        <form onSubmit={(e) => crearCita(e)}>
            {/* {
                camposFormulario.map(campo =>(
                    
                    <CampoFormulario key={campo.id} prop={campo}/>
                                        
                ))
            }       */}

            <label>Nombre Mascota</label>
            <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value={cita.mascota} onChange={onHandleChange}/>
            <label>Nombre Dueño</label>
            <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value={cita.dueno} onChange={onHandleChange}/>
            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width" value={cita.fecha} onChange={onHandleChange}/>
            <label>hora</label>
            <input type="time" name="hora" className="u-full-width" value={cita.hora} onChange={onHandleChange}/>
            <label>Sintomas</label>  
            <textarea name="sintomas" className="u-full-width" value={cita.sintomas} onChange={onHandleChange}></textarea>      

            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>

        </form>
    </>
    );
}
  