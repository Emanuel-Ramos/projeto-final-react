import { useEffect, useState } from "react"
import http from "../../http"

const EditarCliente = (props) => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [userNameCliente, setUserNameCliente] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [complemento, setComplemento] = useState('')
    const salvar = () => {
        console.log(nome)
        const alteracao = {
            nome: nome,
            usuario: userNameCliente,
            telefone: telefone,
            email: email,
            dataNascimento: dataNascimento,
            senha: props.data.senha,
            cpf: cpf,
            endereco: {
                cep: cep,
                rua: rua,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                uf: uf,
                complemento: complemento
            }
        }
        props.salvarAlteracoes(alteracao)
    }

    const aplicarGambiarra = () => {
        setNome(props.data.nome)
    }

    if (props.edit) {
        return (
            <div onLoad={aplicarGambiarra}>
                <form onSubmit={salvar}>
                    <label>Nome</label>
                    <input defaultValue={props.data.nome} onChange={(e) => setNome(e.target.value)} />
                    <label>Usuario</label>
                    <input defaultValue={props.data.userNameCliente} onChange={(e) => setUserNameCliente(e.target.value)} />
                    <label>Telefone</label>
                    <input defaultValue={props.data.telefone} onChange={(e) => setTelefone(e.target.value)} />
                    <label>Email</label>
                    <input defaultValue={props.data.email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Data de Nascimento</label>
                    <input defaultValue={props.data.dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
                    <label>CPF</label>
                    <input defaultValue={props.data.cpf} onChange={(e) => setCpf(e.target.value)} />
                    <label>CEP</label>
                    <input defaultValue={props.data.endereco.cep} onChange={(e) => setCep(e.target.value)} />
                    <label>Rua</label>
                    <input defaultValue={props.data.endereco.rua} onChange={(e) => setRua(e.target.value)} />
                    <label>Numero</label>
                    <input defaultValue={props.data.endereco.numero} onChange={(e) => setNumero(e.target.value)} />
                    <label>Bairro</label>
                    <input defaultValue={props.data.endereco.bairro} onChange={(e) => setBairro(e.target.value)} />
                    <label>Cidade</label>
                    <input defaultValue={props.data.endereco.cidade} onChange={(e) => setCidade(e.target.value)} />
                    <label>UF</label>
                    <input defaultValue={props.data.endereco.estado} onChange={(e) => setUf(e.target.value)} />
                    <label>Complemento</label>
                    <input defaultValue={props.data.endereco.complemento} onChange={(e) => setComplemento(e.target.value)} />

                    <button type="submit">Salvar</button>
                </form>
            </div>
        )
    } else {
        return (
            <div>
                <a>Bem vindo ao seu perfil {props.data.nome}</a>
                <h1>
                    Dados de cadastro
                </h1>
                <div>
                    <h3>Nome</h3>
                    <a>{props.data.nome}</a>
                    <h3>Usuario</h3>
                    <a>{props.data.usuario}</a>
                    <h3>Telefone</h3>
                    <a>{props.data.telefone}</a>
                    <h3>Email</h3>
                    <a>{props.data.email}</a>
                    <h3>cpf</h3>
                    <a>{props.data.cpf}</a>
                    <h3>cep</h3>
                    <a>{props.data.endereco.cep}</a>
                    <h3>rua</h3>
                    <a>{props.data.endereco.rua}</a>
                    <h3>numero</h3>
                    <a>{props.data.endereco.numero}</a>
                    <h3>bairro</h3>
                    <a>{props.data.endereco.bairro}</a>
                    <h3>cidade</h3>
                    <a>{props.data.endereco.cidade}</a>
                    <h3>uf</h3>
                    <a>{props.data.endereco.uf}</a>
                    <h3>complemento</h3>
                    <a>{props.data.endereco.complemento}</a>

                </div>
            </div>
        )
    }
}

export default EditarCliente