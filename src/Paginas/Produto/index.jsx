import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import http from "../../http"
import { Link } from "react-router-dom";
import './styles.css'
import { useHistory } from "react-router";

const Produto = ({ adicionaProduto }) => {
    const { id } = useParams()
    const [produto, setProduto] = useState({})
    let [user, setUser] = useState({ endereco: {} })
    const history = useHistory();


    useEffect(() => {
        let user = localStorage.getItem('user')
        console.log(user)
        if (user == null) {
            history.push("/login")

        } else {
            http.get('cliente/' + user).then(e => setUser(e.data)).catch(erro => console.log(erro))
            http.get('produto/' + id)
                .then(response => setProduto(response.data))

        }


    }, [id])

    const adicionarProduto = () => {

        adicionaProduto(produto)



    }

    return (
        <div className="produto-area">

            <div className="container">
                <div className="row">

                    <div className=" col-12 col-lg-3">
                        <h1>{produto.nome}</h1>
                        <h4>{produto.descricao}</h4>
                    </div>

                    <div className=" col-12 col-lg-6">
                        <img src={produto.url} />
                    </div>

                    <div className=" col-12 col-lg-3">
                        <h3 className="freteGreen">Frete gratis</h3>
                        <h3>R${produto.preco},00</h3>


                        <div className="btn-group me-2" >
                            <button onClick={adicionarProduto} className="btn btn-dark mt-3 block">Adicionar ao carrinho</button>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/produtos" className="btn mt-3 block">🠔 Voltar para Produtos </Link>
        </div>
    )
}

export default Produto

