export default function CampoFormulario(prop) {
    
    return (
    <>
        <label>{prop.prop.label}</label>
        <input type={prop.prop.type} name={prop.prop.name} className="u-full-width" placeholder={(prop.prop.placeholder !== undefined ? prop.prop.placeholder : "")} value=""/>
    </>
    );
}
  
  