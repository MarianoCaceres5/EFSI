

export default function Cita(prop) {
  // console.log(prop)
  return (
    <>
      <p>
        Mascota: <span>{prop.prop.mascota}</span>
      </p>
      <p>
        Dueño: <span>{prop.prop.dueno}</span>
      </p>
      <p>
        Fecha: <span>{prop.prop.fecha}</span>
      </p>
      <p>
        Hora: <span>{prop.prop.hora}</span>
      </p>
      <p>
        Sintomas: <span>{prop.prop.sintomas}</span>
      </p>
      <button className="button elimnar u-full-width">Eliminar x </button>
    </>
  );
}
  
  