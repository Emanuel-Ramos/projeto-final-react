import { useEffect, useState } from "react"
import './styles.css'
import http from "../../http"
import React, { Component } from 'react'
import Select from 'react-select'
import { Link } from "react-router-dom"

const CadastroProduto = () => {
    const [codigoProduto, setCodigoProduto] = useState('')
    const [descricaoProduto, setDescricaoProduto] = useState('')
    const [quantidadeEstoque, setEstoque] = useState('')
    const [imagem, setImagem] = useState('')
    const [nomeProduto, setNomeProduto] = useState('')
    const [preco, setPreco] = useState('')
    const [categoriaProduto, setCategoriaProduto] = useState({})
    const [arquivo, setArquivo] = useState('')
    const [categorias, setCategorias] = useState([])
    const [nomeCategoria, setNomeCategoria] = useState('')
    const [codigoCategoria, setCodigoCategoria] = useState('')
    const [descricaoCategoria, setDescricaoCategoria] = useState('')
    const [showListaProdutos, setShowListaProdutos] = useState(false)
    const options = categorias.map((item) => {
        return {
            key: item.id,
            value: item.nome,
            label: item.nome
        }
    })

    useEffect(() => {
        http.get('categoria').then(response => setCategorias(response.data))
    }, [])

    const cadastrarProduto = (e) => {
        e.preventDefault()
        let newProduto = {
            codigo: codigoProduto,
            descricao: descricaoProduto,
            estoque: quantidadeEstoque,
            imagem: arquivo,
            nome: nomeProduto,
            preco: preco,
            categoria_id: categoriaProduto.key
        }
        console.log(newProduto)
        http.post('produto', newProduto).then(console.log("Produto cadastrado")).catch(erro => console.log(erro))
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
            setArquivo(reader.result);
        };
    }

    const mostrarProdutos = () => {
        setShowListaProdutos(true)
        console.log(showListaProdutos)
    }

    return (
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
                    Listar todos os produtos
                </button>
            </div>
        </div>
    )
}

export default CadastroProduto