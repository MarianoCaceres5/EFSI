
function Bandera({pais, ayuda}) {
    return (
        <>
            <img src={pais.flag} className="bandera" alt="bandera" />
            <h1 className="ayuda">{ayuda}</h1>
        </>
    );
}
export default Bandera;
