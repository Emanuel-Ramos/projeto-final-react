import http from "../../http";
import { Link } from "react-router-dom";
import './styles.css'

const ListaProdutos = (props) => {

    if (props.show) {
        return (
            <div>
                {props.produtos.map((item, index) => <ul key={index}>
                    <li className="item-lista">{item.nome}</li>
                    <li className="item-lista">R${item.preco}</li>
                    <li className="item-lista">Id: {item.id}</li>
                    <Link to={`editarProduto/${item.id}`}>
                        <button>Editar</button>
                    </Link>
                </ul>)
                }
                <button onClick={props.hide}>
                    Ocultar produtos
                </button>
            </div >
        )
    }
    return (
        <div>

        </div>
    )
}

export default ListaProdutos;