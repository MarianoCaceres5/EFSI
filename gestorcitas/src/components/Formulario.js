
// import CampoFormulario from "./CampoFormulario";
import { useState } from "react";

export default function Formulario({onAgregarCita}) {

    // let camposFormulario = [
    //     {id:0, label:"Nombre Mascota", type:"text", name:"mascota", placeholder:"Nombre Mascota"},
    //     {id:1,label:"Nombre Dueño", type:"text", name:"propietario", placeholder:"Nombre dueño de la mascota"},
    //     {id:2,label:"Fecha", type:"date", name:"fecha"},
    //     {id:3,label:"Hora", type:"time", name:"hora"},
    //     // {id:4,label:"Sintomas", type:"textarea", name:"sintomas"}
    // ]    

    const [idState, setId] = useState(2);
    const [mascotaState, setMascota] = useState('');
    const [duenoState, setDueno] = useState('');
    const [fechaState, setFecha] = useState('');
    const [horaState, setHora] = useState('');
    const [sintomasState, setSintomas] = useState('');   

    function crearCita(e){

        e.preventDefault();
        setId(idState + 1)

        let cita = {
            id: idState,
            mascota: mascotaState,
            dueno: duenoState,
            fecha: fechaState,
            hora:horaState,
            sintomas:sintomasState
        } 

        onAgregarCita(cita)

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
            <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" onChange={(e) => setMascota(e.target.value)}/>
            <label>Nombre Dueño</label>
            <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" onChange={(e) => setDueno(e.target.value)}/>
            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width" onChange={(e) => setFecha(e.target.value)}/>
            <label>hora</label>
            <input type="time" name="hora" className="u-full-width" onChange={(e) => setHora(e.target.value)}/>
            <label>Sintomas</label>  
            <textarea name="sintomas" className="u-full-width" onChange={(e) => setSintomas(e.target.value)}></textarea>      

            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>

        </form>
    </>
    );
}
  