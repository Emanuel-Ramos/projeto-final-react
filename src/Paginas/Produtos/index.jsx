import { useEffect, useState } from "react"
import ProdutoCard from "../../Components/ProdutoCard"
import "./style.css"
import http from "../../http"

const Produtos = () => {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        // let teste = [{
        //     id: "1",
        //     nome: "Draven",
        //     preco: "100000,00",
        //     img: "https://i.pinimg.com/originals/d1/90/a6/d190a699c83b47691dbb50f5d898e765.png"
        // },
        // {
        //     id: "2",
        //     nome: "Draven",
        //     preco: "100000,00",
        //     img: "https://i.pinimg.com/originals/d1/90/a6/d190a699c83b47691dbb50f5d898e765.png"
        // },
        // {
        //     id: "3",
        //     nome: "Draven",
        //     preco: "100000,00",
        //     img: "https://i.pinimg.com/originals/d1/90/a6/d190a699c83b47691dbb50f5d898e765.png"
        // },
        // {
        //     id: "4",
        //     nome: "Draven",
        //     preco: "100000,00",
        //     img: "https://i.pinimg.com/originals/d1/90/a6/d190a699c83b47691dbb50f5d898e765.png"
        // },
        // {
        //     id: "5",
        //     nome: "Draven",
        //     preco: "100000,00",
        //     img: "https://i.pinimg.com/originals/d1/90/a6/d190a699c83b47691dbb50f5d898e765.png"
        // },
        // {
        //     id: "6",
        //     nome: "Draven",
        //     preco: "100000,00",
        //     img: "https://i.pinimg.com/originals/d1/90/a6/d190a699c83b47691dbb50f5d898e765.png"
        // }]
        http.get('produto').then((response) => { setProdutos(response.data) }).catch(erro => console.log(erro))
        // setProdutos(teste)
    }, [])

    return (
        <div className="cardsArea">
            {produtos.map((item) =>
                <ProdutoCard key={item.id} id={item.id} nome={item.nome} preco={item.preco} img={item.img} />
            )}
        </div>
    )
}

export default Produtos