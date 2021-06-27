import { useEffect, useState } from "react"
import PedidoCard from "../../Components/PedidoCard"
import http from "../../http"


const PedidosAll = () => {
    const [pedidos, setPedidos] = useState([])
    useEffect(() => {

        http.get('carrinho').then((response) => { setPedidos(response.data) }).catch(erro => console.log(erro))

    }, [])

    return (
        <div>
            <div className="container">
                    <div className="cards-area">
                        {pedidos.map((item) =>
                            <PedidoCard key={item.id} id={item.id} produtos={item.produtos} valorTotal={item.valor} cliente={item.cliente} codigo={item.codigo} />
                        )}
                    </div>
                </div>

        </div>

    )
}

export default PedidosAll