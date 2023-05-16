import { type } from "@testing-library/user-event/dist/type";
import Cita from "./Cita";

export default function ListadoCitas(citas){

    let listaCitas;

    if(Array.isArray(citas)){
        listaCitas = [
            {id:0, mascota:"Nina", dueno:"Martin", fecha:"2021-08-05", hora:"08:20", sintomas:"Le duele la pierna"}, 
            ...citas       
        ]
    }else{
        listaCitas = [
            {id:0, mascota:"Nina", dueno:"Martin", fecha:"2021-08-05", hora:"08:20", sintomas:"Le duele la pierna"},     
        ]
    }

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
  