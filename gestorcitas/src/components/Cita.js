
export default function Cita({citaMostrada, onEliminarCita}) {
  
  return (
    <>      
      <p>
        Mascota: <span>{citaMostrada.mascota}</span>
      </p>
      <p>
        Dueño: <span>{citaMostrada.dueno}</span>
      </p>
      <p>
        Fecha: <span>{citaMostrada.fecha}</span>
      </p>
      <p>
        Hora: <span>{citaMostrada.hora}</span>
      </p>
      <p>
        Sintomas: <span>{citaMostrada.sintomas}</span>
      </p>
      <button onClick={() => onEliminarCita(citaMostrada.id)}  className="button eliminar u-full-width">Eliminar x </button> {/* se pone el () en el onclick para que no se ejecute todo el tiempo la funcion */}
    </>
  );
}
  
  