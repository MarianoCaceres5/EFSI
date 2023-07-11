
import PropTypes from 'prop-types'

function Datos({puntos, timer}) {
    return (
        <>
            <div className='datos'>
                <h2>Puntaje: <span style={{ color: "#1466c3" }}>{puntos}</span></h2>
                <h2>Tiempo: <span style={{ color: "#1466c3" }}>{timer} segundos</span></h2>
            </div>
        </>
    );
}

Datos.propTypes = {
    puntos: PropTypes.number,
    timer: PropTypes.number
}

export default Datos;
