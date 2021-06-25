import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './styles.css'
import http from "../../http"
import EditarCliente from '../../Components/EditarCliente'

const Profile = () => {

    let [user, setUser] = useState({})
    let [edit, setEdit] = useState(false)

    useEffect(() => {
        let user = localStorage.getItem('user')
        http.get('cliente/' + user).then(e => setUser(e.data))
    }, [])

    const editar = () => {
        setEdit(true)
    }

    const salvar = (alteracao) => {
        console.log(alteracao)
        http.put('cliente/' + alteracao).then(e => setUser(e.data))
        setEdit(false)
    }

    return (
        <div className="profileArea">
            <div className="dados-usuario">
                <EditarCliente edit={edit} data={user} salvarAlteracoes={salvar} />
                <button onClick={editar}>Editar</button>
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