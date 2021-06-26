import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './styles.css'
import http from "../../http"
import DadosCliente from '../../Components/DadosCliente'

const Profile = () => {

    let [user, setUser] = useState({ endereco: {} })

    useEffect(() => {
        let user = localStorage.getItem('user')
        http.get('cliente/' + user).then(e => setUser(e.data))
    }, [])


    return (
        <div className="profileArea">
            <div className="dados-usuario">
                <DadosCliente data={user} />
                <Link to={`editarPerfil/${user.usuario}`}>
                    <button >Editar</button>
                </Link>
            </div>


            <Link to={`cadastroProduto`}>
                <button>
                    Cadastrar Produtos
                </button>
            </Link>
        </div>
    )
}

export default Profile