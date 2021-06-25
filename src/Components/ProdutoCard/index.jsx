import { Link } from "react-router-dom";
import "../../Styles/global-styles.css"

const ProdutoCard = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt='imagem do produto' className="img-card"/>
            <div className="card-body">
                <p className="card-text">{props.nome}</p><p className="card-text">{props.preco}</p>
            </div>
            <Link to={`produto/${props.id}`}>
                <button>Ver mais</button>
            </Link>
        </div>
    )
}

export default ProdutoCard;