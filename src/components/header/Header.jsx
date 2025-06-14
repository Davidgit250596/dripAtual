import './Header.css';
import logo from "../../assets/imgHeader/logo.png";
import lupa from "../../assets/imgHeader/Search.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import carrinho from '../../assets/img/carrinhodecompras.png';

export default function Header() {
    const [selectedLink, setSelectedLink] = useState('Home');
    const handleClick = (linkname) => { setSelectedLink(linkname) };

    return (
        <header className="cabeca">
            <div className="divHeaderToda">

                <div className="imagemLogoDigital">
                    <Link to={'/'} ><img src={logo} alt="logotipo da drip store" /></Link>
                </div>

                <div className="container-pesquisa">
                    <input type="text" className="input-pesquisa" placeholder="Pesquisar produto..." />
                    <Link to={'/pagina2'} ><img src={lupa} alt="Buscar" className="icone-lupa" /></Link>
                </div>

                <div className="linkCadastro">
                    <Link to="/Cadastro" className=" btn-cadastro">Cadastre-se</Link>
                    <Link to="/Login"> <button type="button" className="entrar">Entrar</button></Link>
                    <Link to="/Pagina2" > <img className="imagemCarrinho" src={carrinho} alt="" /> </Link>
                </div>
            </div>

            <div className="linksHeader">

                <Link
                    to={'/'}
                    className={`links ${selectedLink === 'Home' ? 'selected' : ''}`}
                    onClick={() => handleClick('Home')}
                >
                    Home
                </Link>

                <Link
                    to={'/Pagina2'}
                    className={`links ${selectedLink === 'Produtos' ? 'selected' : ''}`}
                    onClick={() => handleClick('Produtos')}
                >
                    Produtos
                </Link>

                <Link
                    to={'/Pagina3'}
                    className={`links ${selectedLink === 'Categorias' ? 'selected' : ''}`}
                    onClick={() => handleClick('Categorias')}
                >
                    Categorias
                </Link>

                <Link
                    to={'/'}
                    className={`links ${selectedLink === 'Pedidos' ? 'selected' : ''}`}
                    onClick={() => handleClick('Pedidos')}
                >
                    Meus Pedidos
                </Link>
            </div>
        </header>
    );
}