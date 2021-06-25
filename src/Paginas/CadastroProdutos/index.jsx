import { useEffect, useState } from "react"
import './styles.css'
import http from "../../http"
import React, { Component } from 'react'
import Select from 'react-select'
import ListaProdutos from "../../Components/ListaProdutos"
import { useLocation } from 'react-router-dom';
import ListaCategorias from '../../Components/ListaCategorias'

const CadastroProduto = () => {
    const [codigoProduto, setCodigoProduto] = useState('')
    const [descricaoProduto, setDescricaoProduto] = useState('')
    const [quantidadeEstoque, setEstoque] = useState('')
    const [nomeProduto, setNomeProduto] = useState('')
    const [preco, setPreco] = useState('')
    const [categoriaProduto, setCategoriaProduto] = useState({})
    const [arquivo, setArquivo] = useState('')
    const [categorias, setCategorias] = useState([])
    const [nomeCategoria, setNomeCategoria] = useState('')
    const [codigoCategoria, setCodigoCategoria] = useState('')
    const [descricaoCategoria, setDescricaoCategoria] = useState('')
    const [showListaProdutos, setShowListaProdutos] = useState(false)
    const [showListaCategorias, setShowListaCategoria] = useState(false)
    const [produtos, setProdutos] = useState([])
    const [url, setUrl] = useState('')
    const location = useLocation();
    const options = categorias.map((item) => {
        return {
            key: item.id,
            value: item.nome,
            label: item.nome
        }
    })

    useEffect(() => {
        http.get('categoria').then(response => setCategorias(response.data))
        http.get('produto').then((response) => { setProdutos(response.data) }).catch(erro => console.log(erro))
    }, [location])

    const cadastrarProduto = (e) => {
        e.preventDefault()
        let newProduto = {
            codigo: codigoProduto,
            descricao: descricaoProduto,
            estoque: quantidadeEstoque,
            imagem: arquivo,
            nome: nomeProduto,
            preco: preco,
            url: url,
            categoria_id: categoriaProduto.key
        }
        http.post('produto', newProduto).then(console.log("Produto cadastrado")).catch(erro => console.log(erro))
        window.location.reload();
    }

    const cadastrarCategoria = (e) => {
        let newCategoria = {
            nome: nomeCategoria,
            codigo: codigoCategoria,
            descricao: descricaoCategoria
        }
        http.post('categoria', newCategoria).then(console.log("Categoria cadastrada")).catch(erro => console.log(erro))
    }

    const reader = new FileReader();

    const manipuladorArquivo = (evento) => {
        const arquivos = evento.target.files;
        const arquivo = arquivos[0];
        reader.readAsDataURL(arquivo);
        reader.onload = () => {
            setUrl(reader.result);
        };
    }

    const mostrarCategorias = (e) => {
        e.preventDefault()
        setShowListaCategoria(true)

    }

    const ocultarCategorias = () => {
        setShowListaCategoria(false)

    }

    const mostrarProdutos = () => {
        setShowListaProdutos(true)

    }

    const ocultarProdutos = () => {
        setShowListaProdutos(false)

    }

    return (
        <div className="pagina-cadastro-produtos">
            <div className="container">

                <div className="cadastro-area">
                    <div>
                        <form onSubmit={cadastrarCategoria} className="form-categoria">
                            <h1>Cadastro de categoria</h1>
                            <label>
                                Nome
                                <input value={nomeCategoria} onChange={(e) => setNomeCategoria(e.target.value)} />
                            </label>
                            <label>
                                Codigo
                                <input value={codigoCategoria} onChange={(e) => setCodigoCategoria(e.target.value)} />
                            </label>
                            <label>
                                Descricao
                                <input value={descricaoCategoria} onChange={(e) => setDescricaoCategoria(e.target.value)} />
                            </label>
                            <button type="submit"> Cadastrar categoria</button>
                            <button onClick={mostrarCategorias}>
                                Mostrar categorias
                            </button>
                            <ListaCategorias categorias={categorias} show={showListaCategorias} hide={ocultarCategorias} />
                        </form>
                    </div>
                    <div className="cadastro-produto" >
                        <form onSubmit={cadastrarProduto} className="form-categoria">
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
                        <button onClick={mostrarProdutos}>
                            Mostrar produtos
                        </button>
                        <ListaProdutos produtos={produtos} show={showListaProdutos} hide={ocultarProdutos} />
                    </div>
                </div>


            </div>
        </div>

    )
}

export default CadastroProduto