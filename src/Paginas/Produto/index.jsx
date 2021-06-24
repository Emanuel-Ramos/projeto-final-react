import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import http from "../../http"
import { Link } from "react-router-dom";
import './styles.css'

const Produto = () => {
    const { id } = useParams()
    const [produto, setProduto] = useState({})

    useEffect(() => {
        http.get('produto/' + id)
            .then(response => setProduto(response.data))

    }, [id])

    return (
        <div className="produto-area">
            <a>
                {produto.nome}
            </a>
            <a>
                {produto.preco}
            </a>
            <a>
                Quantidade
            </a>
            <button>
                Adicionar ao carrinho
            </button>
        </div>
    )
}

export default Produto

