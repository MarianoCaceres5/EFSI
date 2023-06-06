
import Cita from "./Cita";

export default function ListadoCitas({listaCitas, onEliminarCita}){

    return (
    <>         
        {listaCitas.map((cita, id) => (
            <div key={id} className="cita">
                <Cita citaMostrada={cita} onEliminarCita={onEliminarCita}/>  
            </div>            
        ))}
    </>
    );

}
  