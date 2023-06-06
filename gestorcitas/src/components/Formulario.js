
// import CampoFormulario from "./CampoFormulario";
import { useState } from "react";

export default function Formulario({onAgregarCita}) {

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
            <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" required value={cita.mascota} onChange={onHandleChange}/>
            <label>Nombre Dueño</label>
            <input type="text" name="dueno" className="u-full-width" placeholder="Nombre dueño de la mascota" required value={cita.dueno} onChange={onHandleChange}/>
            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width" value={cita.fecha} required onChange={onHandleChange}/>
            <label>hora</label>
            <input type="time" name="hora" className="u-full-width" value={cita.hora} required onChange={onHandleChange}/>
            <label>Sintomas</label>  
            <textarea name="sintomas" className="u-full-width" value={cita.sintomas} required onChange={onHandleChange}></textarea>      

            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>

        </form>
    </>
    );
}
  