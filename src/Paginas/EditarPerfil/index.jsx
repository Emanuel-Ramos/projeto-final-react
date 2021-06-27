import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import http from "../../http"

import './styles.css'

import { useHistory } from 'react-router-dom'



const EditarPerfil = () => {

    const { user } = useParams()
    const [usuario, setUser] = useState({ endereco: {} })
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [cep, setCep] = useState('')
    const [numero, setNumero] = useState('')
    const [telefone, setTelefone] = useState('')
    const [userNameCliente, setUserNameCliente] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [complemento, setComplemento] = useState('')
    const history = useHistory();


    useEffect(async () => {
        let user = localStorage.getItem('user')
        http.get('cliente/' + user).then(response => {
            setUser(response.data)
            setNome(response.data.nome)
            setUserNameCliente(response.data.usuario)
            setTelefone(response.data.telefone)
            setEmail(response.data.email)
            setDataNascimento(response.data.dataNascimento)
            setCpf(response.data.cpf)
            setCep(response.data.endereco.cep)
            setNumero(response.data.endereco.numero)
            setComplemento(response.data.endereco.complemento)
        })


    }, [user])



    function desligarPerfil() {
        const perfil_para_desligar = {
            cpf: cpf
        }
        http.put('cliente/status', perfil_para_desligar).then(console.log("Perfil desligado")).catch(erro => console.log(erro))

    }

    const salvar = (e) => {
        e.preventDefault()
        const alteracao = {
            nome: nome,
            usuario: userNameCliente,
            telefone: telefone,
            email: email,
            senha: usuario.senha,
            dataNascimento: dataNascimento,
            cpf: cpf,
            endereco: {
                cep: cep,
                numero: numero,
                complemento: complemento
            }
        }
        http.put('cliente/' + usuario.usuario, alteracao).then(() => {
            localStorage.setItem('user', userNameCliente)
            history.push("/profile")
        }).catch((erro) => {
            console.log(erro)
            alert('Confira os dados, algo deu errado')
        })
    }

    return (

        <div className="pagina-editar-perfil">
            <div className="container">
                <section>
                    <form onSubmit={salvar}>
                        
                        <label>Nome</label>
                        <input defaultValue={nome} onChange={(e) => setNome(e.target.value)} />
                        <label>Usuario</label>
                        <input defaultValue={userNameCliente} onChange={(e) => setUserNameCliente(e.target.value)} />
                        <label>Telefone</label>
                        <input defaultValue={telefone} onChange={(e) => setTelefone(e.target.value)} />
                        <label>Email</label>
                        <input defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Data de Nascimento</label>
                        <input defaultValue={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
                        <label>CPF</label>
                        <input defaultValue={cpf} onChange={(e) => setCpf(e.target.value)} />
                        <label>CEP</label>
                        <input defaultValue={cep} onChange={(e) => setCep(e.target.value)} />
                        <label>Numero</label>
                        <input defaultValue={numero} onChange={(e) => setNumero(e.target.value)} />
                        <label>Complemento</label>
                        <input defaultValue={complemento} onChange={(e) => setComplemento(e.target.value)} />
                        <button type="submit">Salvar</button>
                        <div className="bloco">
                    <button onClick={desligarPerfil}>Desligar perfil</button>

                        </div>
                    </form>
                </section>
            </div>

        </div>
    )
}

export default EditarPerfil