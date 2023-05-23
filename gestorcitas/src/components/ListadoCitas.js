
import Cita from "./Cita";

export default function ListadoCitas({listaCitas, onEliminarCita}){

    return (
    <>         
        {listaCitas.map(cita => (
            <div key={cita.id} className="cita">
                <Cita citaMostrada={cita} onEliminarCita={onEliminarCita}/>  
            </div>            
        ))}
    </>
    );

}
  