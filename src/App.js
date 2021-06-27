import { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Paginas/Home';
import LogIn from './Paginas/LogIn';
import SignIn from './Paginas/SignIn';
import Profile from './Paginas/Profile';
import Produtos from './Paginas/Produtos';
import PedidosAll from './Paginas/PedidosAll';
import Cart from './Paginas/Cart';
import NotFound from './Paginas/NotFound';
import NavBar from './Components/NavBar';
import Produto from './Paginas/Produto';
import CadastroProduto from './Paginas/CadastroProdutos';
import EditarProduto from './Paginas/EditarProduto';
import Footer from './Components/Footer';
import EditarCategoria from './Paginas/EditarCategorias';
import EditarPerfil from "./Paginas/EditarPerfil";

function App() {

  const [carrinho, setCarrinho] = useState([])

  const adicionaProduto = (produto) => {
    if (!carrinho.includes(produto)) {
      setCarrinho([
        ...carrinho,
        produto
      ])
    }
    console.log(carrinho);
  }

  const excluir = (indice) => {
    carrinho.splice(indice, 1)
    setCarrinho([
      ...carrinho
    ])
  }

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LogIn} />
        <Route path="/signin" component={SignIn} />
        <Route path="/profile" component={Profile} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/produto/:id">
          <Produto adicionaProduto={adicionaProduto} component={Produto} />
        </Route>
        <Route path="/cadastroProduto" component={CadastroProduto} />
        <Route path="/editarProduto/:id" component={EditarProduto} />
        <Route path="/editarPerfil/:usuario" component={EditarPerfil} />
        <Route path="/editarCategoria/:id" component={EditarCategoria} />
        <Route path="/pedidos" component={PedidosAll} />
        <Route path="/cart">
          <Cart produtos={carrinho} excluirProduto={excluir} />
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
