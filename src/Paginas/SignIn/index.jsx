import { useState } from 'react'
import http from '../../http'
import './styles.css'
import { useHistory } from "react-router-dom";
import MostrarStatus from '../../Components/MostrarStatus'

const SignIn = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [cpf, setCpf] = useState('')
    const [cep, setCep] = useState('')
    const [numero, setNumero] = useState('')
    const [telefone, setTelefone] = useState('')
    const [userNameCliente, setUserNameCliente] = useState('')
    const [senhaConfirma, setSenhaConfirma] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [complemento, setComplemento] = useState('')
    const history = useHistory();
    const [cadastroStatus, setCadastroStatus] = useState(false)

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
                numero: numero,
                complemento: complemento
            }
        }


        http.post('cliente', usuario)
            .then(response => {
                console.log(response.data)
                history.push("/login")
            })
            .catch(erro => {
                console.log(erro)
                setCadastroStatus(true)
            })
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
                            <input required placeholder="Fulano" value={nome} onChange={(evento) => { setNome(evento.target.value) }} type="text" required />
                        </div>
                        <div className="input-area">
                            <label>Email</label>
                            <input required placeholder="fulano@hotmail.com" value={email} onChange={(evento) => { setEmail(evento.target.value) }} type="email" required />
                        </div>
                        <div className="input-area">
                            <label>Senha</label>
                            <input required placeholder="123123" defaultValue={senha} onBlur={manipuladorSenha} type="password" required />
                        </div>
                        <div className="input-area">
                            <label>Confirmar Senha</label>
                            <input required placeholder="123123" defaultValue={senhaConfirma} onBlur={manipuladorSenhaConfirma} type="password" required />
                        </div>
                        <div className="input-area">
                            <label>CPF</label>
                            <input required placeholder="Cpf sem pontos e traco" value={cpf} onChange={(evento) => { setCpf(evento.target.value) }} type="number" required />
                        </div>
                        <div className="input-area">
                            <label>Username</label>
                            <input required placeholder="fulaninho" value={userNameCliente} onChange={(evento) => { setUserNameCliente(evento.target.value) }} type="text" required />
                        </div>
                        <div className="input-area">
                            <label>Telefone</label>
                            <input required placeholder="22981479500" value={telefone} onChange={(evento) => { setTelefone(evento.target.value) }} type="number" required />
                        </div>
                        <div className="input-area">
                            <label>Data de nascimento</label>
                            <input required placeholder="2001-01-01" value={dataNascimento} onChange={(evento) => { setDataNascimento(evento.target.value) }} type="text" required />
                        </div>
                        <div className="input-area">
                            <label>CEP</label>
                            <input required placeholder="Cep sem traco" value={cep} onChange={(evento) => { setCep(evento.target.value) }} type="number" required pattern="\d{5}-\d{3}" />
                        </div>

                        <div className="input-area">
                            <label>Numero</label>
                            <input required placeholder="123" value={numero} onChange={(evento) => { setNumero(evento.target.value) }} type="number" required />
                        </div>

                        <div className="input-area">
                            <label>Complemento</label>
                            <input required placeholder="Casa" value={complemento} onChange={(evento) => { setComplemento(evento.target.value) }} type="text" required />
                        </div>
                        <div className="btn-area">
                            <button required placeholder="" className="btn-registro">Registrar</button>

                        </div>

                    </form>
                    <MostrarStatus status={cadastroStatus} hide={() => setCadastroStatus(false)} />

                </section>
            </div>
        </div>

    )
}

export default SignIn