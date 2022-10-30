import './Nav.css';
import { React } from "react"
import { Outlet, Link } from "react-router-dom";

function Nav() {

  return (
    <>
      <nav className='nav-Painel glass row'>
        <Link className='nav-a' to="/">🍀 Números</Link>
        <Link className='nav-a' to="/Relogio">🕗 Relógio</Link>
        <Link className='nav-a' to="/User">😎 Usuário</Link>
      </nav>
      <Outlet />
    </>

  );
}

export default Nav;
