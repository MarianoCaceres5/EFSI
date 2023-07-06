
function Bandera({pais, ayuda, filtro}) {
    return (
        <>            
            <img src={pais.flag} className={"bandera " + filtro} alt="bandera" />         
            <h1 className="ayuda">{ayuda}</h1>
        </>
    );
}
export default Bandera;
