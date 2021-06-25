
import { Link } from "react-router-dom";
import './styles.css'

const ListaCategorias = (props) => {

    if (props.show) {
        return (
            <div>
                {props.categorias.map((item, index) => <ul key={index}>
                    <li className="item-lista">{item.nome}</li>
                    <li className="item-lista">Id: {item.id}</li>
                    <Link to={`editarCategoria/${item.id}`}>
                        <button>Editar</button>
                    </Link>
                </ul>)
                }
                <button onClick={props.hide}>
                    Ocultar categorias
                </button>
            </div >
        )
    }
    return (
        <div>

        </div>
    )
}

export default ListaCategorias;