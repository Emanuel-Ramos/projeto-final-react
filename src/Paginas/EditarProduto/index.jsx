import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import http from "../../http"
import { Link } from "react-router-dom";
import './styles.css'
import Select from 'react-select'

const EditarProduto = () => {
    const { id } = useParams()
    const [produto, setProduto] = useState({})
    const [codigoProduto, setCodigoProduto] = useState('')
    const [descricaoProduto, setDescricaoProduto] = useState('')
    const [quantidadeEstoque, setEstoque] = useState('')
    const [nomeProduto, setNomeProduto] = useState('')
    const [preco, setPreco] = useState('')
    const [categoriaProduto, setCategoriaProduto] = useState({})
    const [arquivo, setArquivo] = useState('')
    const [categorias, setCategorias] = useState([])
    const reader = new FileReader();

    const options = categorias.map((item) => {
        return {
            key: item.id,
            value: item.nome,
            label: item.nome
        }
    })

    const manipuladorArquivo = (evento) => {
        const arquivos = evento.target.files;
        const arquivo = arquivos[0];
        reader.readAsDataURL(arquivo);
        reader.onload = () => {
            setArquivo(reader.result);
        };
    }

    const editarProduto = (e) => {
        e.preventDefault()
        const produtoEditado = {
            codigo: codigoProduto,
            descricao: descricaoProduto,
            estoque: quantidadeEstoque,
            imagem: arquivo,
            nome: nomeProduto,
            preco: preco,
            categoria_id: categoriaProduto.key
        }
        http.put('produto/' + id, produtoEditado).then(console.log("Produto editado")).catch(erro => console.log(erro))
    }

    useEffect(() => {
        http.get('categoria').then(response => setCategorias(response.data))
        http.get('produto/' + id)
            .then(response => setProduto(response.data))


    }, [id])

    return (
        <div className="produto-area">
            <form onSubmit={editarProduto} className="form-categoria">
                <label>
                    Codigo
                    <input type="text" value={codigoProduto} onChange={(e) => setCodigoProduto(e.target.value)} />
                </label>
                <label>
                    Descricao
                    <input type="text" value={descricaoProduto} onChange={(e) => setDescricaoProduto(e.target.value)} />
                </label>
                <label>
                    Estoque
                    <input type="number" min="0" max="255" step="1" value={quantidadeEstoque} onChange={(e) => setEstoque(Number(e.target.value))} />
                </label>
                <label>
                    Imagem
                    <input type="file" onChange={manipuladorArquivo} className="form-control-file" />
                </label>
                <label>
                    Nome
                    <input type="text" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} />
                </label>
                <label>
                    Preco
                    <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} />
                </label>
                <label>
                    Categoria
                    <Select
                        defaultValue="nenhum"
                        name="colors"
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={setCategoriaProduto}
                    />
                </label>
                <button type="submit">Cadastrar Produto</button>
            </form>
            <Link to={`/cadastroProduto`}>
                <button>
                    Voltar para cadastro produtos
                </button>
            </Link>
        </div>
    )
}

export default EditarProduto