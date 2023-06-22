
function Formulario({onChequearRespuesta}) {
    return (
        <form onSubmit={(e) => onChequearRespuesta(e)}>
            <input type="text" name="pais" className="" placeholder="Nombre pais" />
            <button type="submit" className="u-full-width button-primary">Enviar Respuesta</button>
        </form>
    );
}
export default Formulario;
