import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Admin from 'pages/Admin';
import CadastrarProduto from 'pages/Admin/CadastrarProduto';
import CadastrarUsuario from 'pages/Admin/CadastrarUsuario';
import Login from 'pages/Admin/Login';
import Produtos from 'pages/Admin/Produtos';
import RecuperarSenha from 'pages/Admin/RecuperarSenha';
import Cardapio from 'pages/Cardapio';
import Contatos from 'pages/Contatos';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Personalizacao from 'pages/Personalizacao';
import Prato from 'pages/Prato';
import Sobre from 'pages/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route path='roupas' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
            <Route path='personalizacao' element={<Personalizacao />} />
          </Route>
          
          <Route index element={<Inicio />} />

          <Route path='prato/:id' element={<Prato />} />
          <Route path='contatos' element={<Contatos />} />

          <Route path='/admin'>
            <Route index element={<Admin />} />
            <Route path='login/' element={<Login />} />
            <Route path='login/:user' element={<Login />} />
            <Route path='cadastrarUsuario' element={<CadastrarUsuario />} />
            <Route path='recuperar-senha' element={<RecuperarSenha />} />
            <Route path='cadastrar-produto' element={<CadastrarProduto />} />
            <Route path='produtos' element={<Produtos />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}