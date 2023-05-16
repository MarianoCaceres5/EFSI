
export default function CampoFormulario({prop}) {
    
    return (
    <>
        <label>{prop.label}</label>
        <input className="u-full-width" placeholder={(prop.placeholder !== undefined ? prop.placeholder : "")} value=""/>
    </>
    );
}
  
  