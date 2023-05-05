
import CampoFormulario from "./CampoFormulario";

export default function Formulario() {

    let camposFormulario = [
        {id:0, label:"Nombre Mascota", type:"text", name:"mascota", placeholder:"Nombre Mascota"},
        {id:1,label:"Nombre Dueño", type:"text", name:"propietario", placeholder:"Nombre dueño de la mascota"},
        {id:2,label:"Fecha", type:"date", name:"fecha"},
        {id:3,label:"Hora", type:"time", name:"hora"},
        // {id:4,label:"Sintomas", type:"textarea", name:"sintomas"}
    ]
    return (
    <>
        <form>
            {
                camposFormulario.map(campo =>(
                    
                    <CampoFormulario key={campo.id} prop={campo}/>
                                        
                ))
            }      
            <label>Sintomas</label>  
            <textarea name="sintomas" className="u-full-width"></textarea>       
            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
        </form>
    </>
    );
}
  
  