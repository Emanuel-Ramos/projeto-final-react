import { useEffect, useState } from 'react'
import axios from "axios";
import MostrarStatus from '../../Components/MostrarStatus';
import { useHistory } from "react-router-dom";
import './styles.css'

const LogIn = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [loginStatus, setLoginStatus] = useState(false)
    const history = useHistory();
    const efetuarLogin = (evento) => {
        evento.preventDefault()
        const usuario = {
            user: email,
            pass: senha
        }

        axios.post('http://localhost:8080/auth', usuario)
            .then(response => {
                console.log(response.data)
                localStorage.setItem('user', response.data.user)
                localStorage.setItem('token', response.data.token)
                window.location.reload();
            }).catch(erro => {
                console.log(erro)
                setLoginStatus(true)
            })
        console.log('Formulario foi submetido');
        setEmail('')
        setSenha('')
    }

    useEffect(() => {
        let user = localStorage.getItem('user')
        console.log(user)
        if (user != null) {
            history.push("/produtos")

        }
    }, [])


    const manipuladorEmail = (evento) => {
        setEmail(evento.target.value)
    }
    const manipuladorSenha = (evento) => {
        setSenha(evento.target.value)
    }
    return (
        <div className="pagina-login">
            <div className="container">
                <section>

                    <form onSubmit={efetuarLogin}>
                        <div className="bloco">
                            <h3>Login</h3>
                        </div>

                        <div>
                            <label>Usuario</label>
                            <input value={email} onChange={manipuladorEmail} type="text" required />
                        </div>
                        <div>
                            <label>Senha</label>
                            <input value={senha} onChange={manipuladorSenha} type="password" required />
                        </div>
                        <button>Entrar</button>
                        <div className="bloco">
                        <button type="button" onClick={() => history.push("/signin")}>Nao tem conta? <u>Cadastre-se</u></button>
                        </div>
                        <div className="bloco">
                        <MostrarStatus status={loginStatus} hide={() => setLoginStatus(false)} />
                        </div>
                      
                    </form>

                    
                </section>
            </div>
        </div>

    )
}

export default LogIn