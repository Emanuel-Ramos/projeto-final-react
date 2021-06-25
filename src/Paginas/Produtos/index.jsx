import { useEffect, useState } from "react"
import ProdutoCard from "../../Components/ProdutoCard"
import "./style.css"
import http from "../../http"

const Produtos = () => {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {

        http.get('produto').then((response) => { setProdutos(response.data) }).catch(erro => console.log(erro))

    }, [])

    return (
        <div className="pagina-produtos">
            <div className="container">
                <div className="cardsArea">
                    {produtos.map((item) =>
                        <ProdutoCard key={item.id} id={item.id} nome={item.nome} preco={item.preco} img={item.url} />
                    )}
                </div>
            </div>
        </div>

    )
}

export default Produtos