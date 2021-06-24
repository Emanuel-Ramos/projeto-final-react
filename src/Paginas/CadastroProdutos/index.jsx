import { useEffect, useState } from "react"
import './styles.css'
import http from "../../http"
import React, { Component } from 'react'
import Select from 'react-select'

const CadastroProduto = () => {
    const [codigoProduto, setCodigoProduto] = useState('')
    const [descricaoProduto, setDescricaoProduto] = useState('')
    const [estoque, setEstoque] = useState('')
    const [imagem, setImagem] = useState('')
    const [nomeProduto, setNomeProduto] = useState('')
    const [preco, setPreco] = useState('')
    const [categoriaProduto, setCategoriaProduto] = useState({})

    const [categorias, setCategorias] = useState([])
    const [nomeCategoria, setNomeCategoria] = useState('')
    const [codigoCategoria, setCodigoCategoria] = useState('')
    const [descricaoCategoria, setDescricaoCategoria] = useState('')
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
            estoque: estoque,
            imagem: imagem,
            nome: nomeProduto,
            preco: preco,
            categoria_id: categoriaProduto.key
        }
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
                        <input type="text" value={estoque} onChange={(e) => setEstoque(e.target.value)} />
                    </label>
                    <label>
                        Imagem
                        <input type="text" value={imagem} onChange={(e) => setImagem(e.target.value)} />
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
            </div>
        </div>
    )
}

export default CadastroProduto