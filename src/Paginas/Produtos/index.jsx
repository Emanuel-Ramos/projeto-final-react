import { useEffect, useState } from "react"
import ProdutoCard from "../../Components/ProdutoCard"
import "./style.css"
import http from "../../http"

const Produtos = () => {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {

        http.get('produto').then((response) => { setProdutos(response.data) }).catch(erro => console.log(erro))

    }, [])

    if (produtos.length == 0) {
        return (
            <div className="pagina-produtos">
                <div className="container">
                    <div className="empty-page">
                        <h1>Nao temos nada por aqui ainda</h1>
                        <h1>Efetue o Login, va para a pagina perfil e cadastre novos produtos!</h1>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="pagina-produtos">
                <div className="container">
                    <div className="cards-area">
                        {produtos.map((item) =>
                            <ProdutoCard key={item.id} id={item.id} nome={item.nome} preco={item.preco} img={item.url} />
                        )}
                    </div>
                </div>
            </div>

        )
    }
}

export default Produtos