
// import Cita from "./Cita";

export default function ListadoCitas({listaCitas}){

    return (
    <>         
        {listaCitas.map(cita => (
            <div key={cita.id} className="cita">
                {/* <Cita citaMostrada={cita}/> */}
                <p>
                    Mascota: <span>{cita.mascota}</span>
                </p>
                <p>
                    Dueño: <span>{cita.dueno}</span>
                </p>
                <p>
                    Fecha: <span>{cita.fecha}</span>
                </p>
                <p>
                    Hora: <span>{cita.hora}</span>
                </p>
                <p>
                    Sintomas: <span>{cita.sintomas}</span>
                </p>
                <button className="button elimnar u-full-width">Eliminar x </button>
            </div>            
        ))}
    </>
    );

}
  