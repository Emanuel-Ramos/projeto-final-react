import { useState } from 'react'
import axios from "axios";

const LogIn = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const efetuarLogin = (evento) => {
        evento.preventDefault()
        const usuario = {
            user: email,
            pass: senha
        }

        axios.post('http://localhost:8080/auth', usuario)
            .then(response => {
                console.log(response.data)
                localStorage.setItem('token', response.data.token)
            })
        console.log('Formulario foi submetido');
        setEmail('')
        setSenha('')
    }
    const manipuladorEmail = (evento) => {
        setEmail(evento.target.value)
    }
    const manipuladorSenha = (evento) => {
        setSenha(evento.target.value)
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={efetuarLogin}>
                <div>
                    <label>Usuario</label>
                    <input value={email} onChange={manipuladorEmail} type="text" required />
                </div>
                <div>
                    <label>Senha</label>
                    <input value={senha} onChange={manipuladorSenha} type="password" required />
                </div>
                <button>Entrar</button>
            </form>
        </div>
    )
}

export default LogIn