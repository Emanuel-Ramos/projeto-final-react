import "../../Styles/global-styles.css"
import http from "../../http"

const PedidoCard = (props) => {


    function excluirPedido() {
        console.log(props);
        http.delete('pedido-finalizado/' + props.id).then(console.log("Pedido deletado")).catch(erro => console.log(erro))
        window.location.reload()

    }

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
            
                <button onClick={excluirPedido}>Excluir</button>
            
        </div>
    )
}

export default PedidoCard;