const MostrarStatus = (props) => {

    if (props.status) {
        return (
            <div>
                <a>Confira seus dados, algo deu errado</a>
                <button onClick={props.hide}>Fechar </button>
            </div>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default MostrarStatus