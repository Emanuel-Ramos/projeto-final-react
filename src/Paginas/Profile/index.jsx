import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './styles.css'
import http from "../../http"
import DadosCliente from '../../Components/DadosCliente'
import { useHistory } from "react-router-dom";

const Profile = () => {

    let [user, setUser] = useState({ endereco: {} })
    const history = useHistory();

    useEffect(() => {
        let user = localStorage.getItem('user')
        console.log(user)
        if (user == null) {
            history.push("/login")

        } else {
            http.get('cliente/' + user).then(e => setUser(e.data)).catch(erro => console.log(erro))

        }
    }, [])

    const deslogar = () => {

        localStorage.clear();
        window.location.reload();
    }

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
            <Link to={`pedidos`}>
                <button>
                    Ver pedidos
                </button>
            </Link>
            <button onClick={deslogar}>
                Deslogar
            </button>
        </div>
    )
}

export default Profile