
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Paginas/Home';
import LogIn from './Paginas/LogIn';
import SignIn from './Paginas/SignIn';
import Profile from './Paginas/Profile';
import Produtos from './Paginas/Produtos';
import PedidosUser from './Paginas/PedidosUser';
import PedidosAll from './Paginas/PedidosAll';
import Cart from './Paginas/Cart';
import NotFound from './Paginas/NotFound';
import NavBar from './Components/NavBar';
import Produto from './Paginas/Produto';
import CadastroProduto from './Paginas/CadastroProdutos';


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LogIn} />
        <Route path="/signin" component={SignIn} />
        <Route path="/profile" component={Profile} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/produto/:id" component={Produto} />
        <Route path="/cadastroProduto" component={CadastroProduto} />
        <Route path="/pedidos/:id" component={PedidosUser} />
        <Route path="/pedidos" component={PedidosAll} />
        <Route path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
