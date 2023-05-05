
import Cita from "./Cita";

export default function Formulario() {

    let listaCitas = [
        {id:0, mascota:"Nina", dueno:"Martin", fecha:"2021-08-05", hora:"08:20", sintomas:"Le duele la pierna"}
    ]
    return (
    <>         
        {listaCitas.map(cita => (
            <div key={cita.id} className="cita">
                <Cita prop={cita} />
            </div>            
        ))}
    </>
    );
}
  
  