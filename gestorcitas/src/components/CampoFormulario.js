
export default function CampoFormulario(prop) {
    
    return (
    <>
        <label>{prop.prop.label}</label>
        <input className="u-full-width" placeholder={(prop.prop.placeholder !== undefined ? prop.prop.placeholder : "")} value=""/>
    </>
    );
}
  
  