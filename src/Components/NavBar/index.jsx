import { Link } from "react-router-dom"
import "./style.css"
import { useEffect, useState } from "react"
import http from "../../http"
import { useHistory } from "react-router-dom";


const NavBar = () => {
    const [user, setUser] = useState('')
    const history = useHistory();
    const [logged, setLogged] = useState(false)

    const NavBarLogged = () => {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>

                    <li><Link to="/produtos">Produtos</Link></li>

                    <li><Link to="/cart">Carrinho</Link></li>

                    <li><Link aria-current="page" to="/profile">Perfil</Link></li>
                </ul>
            </div>
        )
    }

    const NavBarDisloged = () => {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                    <li><Link aria-current="page" to="/login">Entrar</Link></li>
                </ul>
            </div>
        )
    }

    useEffect(() => {
        let user = localStorage.getItem('user')
        console.log(user)
        if (user != null) {

            http.get('cliente/' + user).then(e => setUser(e.data)).catch(erro => console.log(erro))
            setLogged(true)

        }

    }, [])
    if (logged) {
        return (
            <header>
                <nav>
                    <img src="" alt="logo skins" />

                    <NavBarLogged />



                </nav>
            </header>

        )
    } else {
        return (
            <header>
                <nav>
                    <img src="" alt="logo skins" />

                    <NavBarDisloged />



                </nav>
            </header>

        )
    }
}
export default NavBar;