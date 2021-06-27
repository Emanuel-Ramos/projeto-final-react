import { Link } from "react-router-dom";
import "../../Styles/global-styles.css"

const PedidoCard = (props) => {
    return (
        <div className="card">            
            <div className="card-body">
                <p className="card-text">{props.codigo}</p>
                <p className="card-text">{props.cliente}</p>
                <p className="card-text">{props.valorTotal}</p>
                {props.produtos.map((produto) =>
                <p className="card-text">{produto}</p>                            
                )}
                
            </div>
            <Link to={`pedidos`}>
                <button>Excluir</button>
            </Link>
        </div>
    )
}

export default PedidoCard;