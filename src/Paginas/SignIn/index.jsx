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
        <div className="pagina-cadastro">
            <div className="container">
                <section className="form-cadastro">
                    <h1>Registro de usuario</h1>
                    <form onSubmit={efetuarCadastro} className='form-registro'>
                        <div className="input-area">
                            <label>Nome</label>
                            <input value={nome} onChange={(evento) => { setNome(evento.target.value) }} type="text" required />
                        </div>
                        <div className="input-area">
                            <label>Email</label>
                            <input value={email} onChange={(evento) => { setEmail(evento.target.value) }} type="email" required />
                        </div>
                        <div className="input-area">
                            <label>Senha</label>
                            <input defaultValue={senha} onBlur={manipuladorSenha} type="password" required />
                        </div>
                        <div className="input-area">
                            <label>Confirmar Senha</label>
                            <input defaultValue={senhaConfirma} onBlur={manipuladorSenhaConfirma} type="password" required />
                        </div>
                        <div className="input-area">
                            <label>CPF</label>
                            <input value={cpf} onChange={(evento) => { setCpf(evento.target.value) }} type="number" required />
                        </div>
                        <div className="input-area">
                            <label>Username</label>
                            <input value={userNameCliente} onChange={(evento) => { setUserNameCliente(evento.target.value) }} type="text" required />
                        </div>
                        <div className="input-area">
                            <label>Telefone</label>
                            <input value={telefone} onChange={(evento) => { setTelefone(evento.target.value) }} type="number" required />
                        </div>
                        <div className="input-area">
                            <label>Data de nascimento</label>
                            <input value={dataNascimento} onChange={(evento) => { setDataNascimento(evento.target.value) }} type="text" required />
                        </div>
                        <div className="input-area">
                            <label>CEP</label>
                            <input value={cep} onChange={(evento) => { setCep(evento.target.value) }} type="number" required pattern="\d{5}-\d{3}" />
                        </div>
                        <div className="input-area">
                            <label>Rua</label>
                            <input value={rua} onChange={(evento) => { setRua(evento.target.value) }} type="text" required />
                        </div>
                        <div className="input-area">
                            <label>Numero</label>
                            <input value={numero} onChange={(evento) => { setNumero(evento.target.value) }} type="number" required />
                        </div>
                        <div className="input-area">
                            <label>Bairro</label>
                            <input value={bairro} onChange={(evento) => { setBairro(evento.target.value) }} type="text" required />
                        </div>
                        <div className="input-area">
                            <label>Cidade</label>
                            <input value={cidade} onChange={(evento) => { setCidade(evento.target.value) }} type="text" required />
                        </div>
                        <div className="input-area">
                            <label>UF</label>
                            <input value={uf} onChange={(evento) => { setUf(evento.target.value) }} type="text" required />
                        </div>
                        <div className="input-area">
                            <label>Complemento</label>
                            <input value={complemento} onChange={(evento) => { setComplemento(evento.target.value) }} type="text" required />
                        </div>
                        <div className="btn-area">
                        <button className="btn-registro">Registrar</button>

                        </div>
                    
                    </form>
                </section>
            </div>
        </div>

    )
}

export default SignIn