
import PropTypes from 'prop-types'

function Formulario({ chequearRespuesta, darAyuda }) {

    return (
        <form className='form' onSubmit={(e) => chequearRespuesta(e)}>
            <input type="text" name="pais" className="text-input" autoComplete="off" placeholder="" />
            <button type="button" className="help-button" onClick={() => darAyuda()}>Ayuda</button>
            <button type="submit" className="send-button">Enviar Respuesta</button>                       
        </form>
    );
}

Formulario.propTypes = {
    chequearRespuesta: PropTypes.func,
    darAyuda: PropTypes.func
}

export default Formulario;
