import './styles.css'
import http from '../../http';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { useEffect } from "react"

const Cart = ({ produtos, excluirProduto }) => {

    const history = useHistory()

    const criarPedido = () => {
        const pedido = {
            user: localStorage.getItem('user'),
            produtos: [

            ]
        }
        produtos.forEach(element => {
            pedido.produtos.push({
                quantidade: element.quantidade,
                codigo: element.codigo
            })
        })
        http.post('cart/finalizar', pedido)
            .then(response => {
                alert('Pedido finalizado com sucesso!')
                history.push('/produtos')
            })
    }

    useEffect(() => {
        let user = localStorage.getItem('token')
        if (user == null) {
            history.push("/login")

        }
    }, [])

    return (
        <div className="pagina-carrinho">
            <div className="container">
                <section>
                    <h1>Carrinho</h1>
                    <div>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th >Produto</th>
                                        <th >Preço</th>
                                        <th >Quantidade</th>
                                        <th >Código</th>
                                        <th ></th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {produtos.map((item, indice) => <tr key={indice}>
                                        <td>{item.nome}</td>

                                        <td className="preco">R${item.preco}</td>
                                        <td><input value={item.quantidade} className="inputCarrinho" type="number" placeholder="1-100" onChange={(evento) => {
                                            item.quantidade = evento.target.value
                                        }}></input></td>
                                        <td>{item.codigo}</td>
                                        <td><button onClick={() => {
                                            excluirProduto(indice)
                                        }}>Excluir</button></td>
                                    </tr>)}
                                </tbody>
                            </table>
                            <button onClick={criarPedido}>Comprar</button>
                            <Link to="/produtos">Comprar mais itens</Link>
                        </div>
                    </div>
                </section>
            </div>

        </div>

    )
}

export default Cart