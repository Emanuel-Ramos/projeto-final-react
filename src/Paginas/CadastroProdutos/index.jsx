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
    }, [produtos.length || categorias.length])

    const cadastrarProduto = (e) => {
        e.preventDefault()
        if (categoriaProduto.key == undefined) {
            return alert("Voce deve escolher uma categoria")
        }
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
                <section className="form-cadastro">
                    <div className="area-form">
                        <form onSubmit={cadastrarCategoria} className="form-categoria">
                            <h3>Cadastro de categoria</h3>
                            <div className="input-area">
                                <label>Nome</label>
                                <input value={nomeCategoria} onChange={(e) => setNomeCategoria(e.target.value)} />
                            </div>

                            <div className="input-area">

                                <label>Codigo</label>
                                <input value={codigoCategoria} onChange={(e) => setCodigoCategoria(e.target.value)} />

                            </div>

                            <div className="input-area">
                                <label>Descricao</label>
                                <input value={descricaoCategoria} onChange={(e) => setDescricaoCategoria(e.target.value)} />

                            </div>

                            <button type="submit"> Cadastrar categoria</button>
                            <button onClick={mostrarCategorias}>
                                Mostrar categorias
                            </button>
                            <ListaCategorias categorias={categorias} show={showListaCategorias} hide={ocultarCategorias} />
                        </form>
                    </div>
                    <div className="area-form">
                        <form onSubmit={cadastrarProduto} className="form-categoria">
                            <h3>Cadastro de Produto</h3>
                            <div className="input-area">
                                <label>Codigo</label>
                                <input type="text" value={codigoProduto} onChange={(e) => setCodigoProduto(e.target.value)} />
                            </div>

                            <div className="input-area">
                                <label>Descricao</label>
                                <input type="text" value={descricaoProduto} onChange={(e) => setDescricaoProduto(e.target.value)} />
                            </div>

                            <div className="input-area">
                                <label>Estoque</label>
                                <input type="number" min="0" max="255" step="1" value={quantidadeEstoque} onChange={(e) => setEstoque(Number(e.target.value))} />
                            </div>

                            <div className="input-area">
                                <label>Imagem</label>
                                <input type="file" onChange={manipuladorArquivo} className="form-control-file" />
                            </div>

                            <div className="input-area">
                                <label>Nome</label>
                                <input type="text" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} />
                            </div>

                            <div className="input-area">
                                <label>Preco</label>
                                <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} />
                            </div>

                            <div className="input-area">
                                <label>Categoria</label>
                                <Select
                                    defaultValue="nenhum"
                                    name="colors"
                                    options={options}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    onChange={setCategoriaProduto}
                                />
                            </div>
                            <button type="submit">Cadastrar Produto</button>
                        </form>
                        <button onClick={mostrarProdutos}>
                            Mostrar produtos
                        </button>
                        <ListaProdutos produtos={produtos} show={showListaProdutos} hide={ocultarProdutos} />
                    </div>
                </section>
            </div>
        </div>

    )
}

export default CadastroProduto