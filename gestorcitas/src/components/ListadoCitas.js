import { type } from "@testing-library/user-event/dist/type";
import Cita from "./Cita";
import { useEffect, useState } from "react";

export default function ListadoCitas({listaCitas}){

    function eliminarCita(idCita){
        document.getElementById(idCita).style.display = 'none';
    }

    return (
    <>         
        {listaCitas.map(cita => (
            <div key={cita.id} id={cita.id} className="cita">
                <Cita citaMostrada={cita} onEliminarCita={eliminarCita}/>
            </div>            
        ))}
    </>
    );

}
  