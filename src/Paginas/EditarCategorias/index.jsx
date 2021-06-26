import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import http from "../../http"
import { Link } from "react-router-dom";
import './styles.css'
import { useHistory } from 'react-router-dom'

const EditarCategoria = () => {
    const { id } = useParams()
    const [categoria, setCategoria] = useState('')
    const [nomeCategoria, setNomeCategoria] = useState('')
    const [codigoCategoria, setCodigoCategoria] = useState('')
    const [descricaoCategoria, setDescricaoCategoria] = useState('')
    const history = useHistory()



    const editarCategoria = (e) => {
        e.preventDefault()
        const categoriaEditada = {
            codigo: codigoCategoria,
            descricao: descricaoCategoria,
            nome: nomeCategoria

        }
        http.put('categoria/' + id, categoriaEditada).then(console.log("Categoria editada")).catch(erro => console.log(erro))
        history.push('/cadastroProduto')
    }

    useEffect(() => {
        http.get('categoria/' + id)
            .then(response => {
                setCategoria(response.data)
                setNomeCategoria(response.data.nome)
                setCodigoCategoria(response.data.codigo)
                setDescricaoCategoria(response.data.descricao)

            })


    }, [id])
    function excluirCategoria() {
        http.delete('categoria/' + id).then(console.log("Categoria deletada")).catch(erro => console.log(erro))
        history.push('/cadastroProduto')
    }

    return (

        <div className="produto-area">
            <form onSubmit={editarCategoria} className="form-categoria">
                <label>
                    Codigo
                    <input type="text" value={codigoCategoria} onChange={(e) => setCodigoCategoria(e.target.value)} />
                </label>
                <label>
                    Descricao
                    <input type="text" value={descricaoCategoria} onChange={(e) => setDescricaoCategoria(e.target.value)} />
                </label>
                <label>
                    Nome
                    <input type="text" value={nomeCategoria} onChange={(e) => setNomeCategoria(e.target.value)} />
                </label>

                <button type="submit">Editar Categoria</button>
            </form>
            <Link to={`/cadastroProduto`}>
                <button>
                    Voltar para cadastro produtos
                </button>
            </Link>
            <button onClick={excluirCategoria}>Apagar categoria</button>
        </div>
    )
}

export default EditarCategoria