import { useState } from 'react'
import http from '../../http'
import './styles.css'

const SignIn = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [cpf, setCpf] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [userNameCliente, setUserNameCliente] = useState('')
    const [senhaConfirma, setSenhaConfirma] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [complemento, setComplemento] = useState('')

    const efetuarCadastro = (evento) => {
        evento.preventDefault()
        const usuario = {
            nome: nome,
            usuario: userNameCliente,
            telefone: telefone,
            email: email,
            dataNascimento: dataNascimento,
            senha: senhaConfirma,
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


        http.post('cliente', usuario)
            .then(response => console.log(response.data))
            .catch(erro => console.log(erro))
        console.log('Formulario foi submetido');
    }

    const manipuladorSenha = (evento) => {
        setSenha(evento.target.value)
    }
    const manipuladorSenhaConfirma = (evento) => {
        if (senha === evento.target.value) {
            setSenhaConfirma(evento.target.value)
            console.log('senhas iguais');
        } else { console.log("senhas diferentes") }
    }


    return (
        <div>
            <h1>Registro de usuario</h1>
            <form onSubmit={efetuarCadastro} className='form-registro'>
                <div>
                    <label>Nome</label>
                    <input value={nome} onChange={(evento) => { setNome(evento.target.value) }} type="text" required />
                </div>
                <div>
                    <label>Email</label>
                    <input value={email} onChange={(evento) => { setEmail(evento.target.value) }} type="email" required />
                </div>
                <div>
                    <label>Senha</label>
                    <input defaultValue={senha} onBlur={manipuladorSenha} type="password" required />
                </div>
                <div>
                    <label>Confirmar Senha</label>
                    <input defaultValue={senhaConfirma} onBlur={manipuladorSenhaConfirma} type="password" required />
                </div>
                <div>
                    <label>CPF</label>
                    <input value={cpf} onChange={(evento) => { setCpf(evento.target.value) }} type="number" required />
                </div>
                <div>
                    <label>Username</label>
                    <input value={userNameCliente} onChange={(evento) => { setUserNameCliente(evento.target.value) }} type="text" required />
                </div>
                <div>
                    <label>Telefone</label>
                    <input value={telefone} onChange={(evento) => { setTelefone(evento.target.value) }} type="number" required />
                </div>
                <div>
                    <label>Data de nascimento</label>
                    <input value={dataNascimento} onChange={(evento) => { setDataNascimento(evento.target.value) }} type="text" required />
                </div>
                <div>
                    <label>CEP</label>
                    <input value={cep} onChange={(evento) => { setCep(evento.target.value) }} type="number" required pattern="\d{5}-\d{3}" />
                </div>
                <div>
                    <label>Rua</label>
                    <input value={rua} onChange={(evento) => { setRua(evento.target.value) }} type="text" required />
                </div>
                <div>
                    <label>Numero</label>
                    <input value={numero} onChange={(evento) => { setNumero(evento.target.value) }} type="number" required />
                </div>
                <div>
                    <label>Bairro</label>
                    <input value={bairro} onChange={(evento) => { setBairro(evento.target.value) }} type="text" required />
                </div>
                <div>
                    <label>Cidade</label>
                    <input value={cidade} onChange={(evento) => { setCidade(evento.target.value) }} type="text" required />
                </div>
                <div>
                    <label>UF</label>
                    <input value={uf} onChange={(evento) => { setUf(evento.target.value) }} type="text" required />
                </div>
                <div>
                    <label>Complemento</label>
                    <input value={complemento} onChange={(evento) => { setComplemento(evento.target.value) }} type="text" required />
                </div>
                <button>Registrar</button>
            </form>
        </div>
    )
}

export default SignIn