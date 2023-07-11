
import PropTypes from 'prop-types'

function Bandera({pais, ayuda, filtro}) {
    return (
        <>            
            <img src={pais.flag} className={"bandera " + filtro} alt="bandera" />         
            <h1 className="ayuda">{ayuda}</h1>
        </>
    );
}

Bandera.propTypes = {
    pais: PropTypes.object,
    ayuda: PropTypes.string,
    filtro: PropTypes.string
}

export default Bandera;
