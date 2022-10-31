import './Nav.css';
import { React } from "react"
// import { React, useEffect, useState } from "react"
import { Outlet, Link } from "react-router-dom";
// import Aleatorio from '../Aleatorio';

function Nav() {

  /*
  const numAleatorio = () => { Aleatorio(1, 6, 1) }
  const [planoDeFundo, setPlanoDeFundo] = useState({ backgroundImage: `url(../planoDeFundo/img(${numAleatorio()}).jpg)`, });

  useEffect(() => {

    const interval = setInterval(() => {
      setPlanoDeFundo({ backgroundImage: `url(../planoDeFundo/img(1).jpg)`, });
      console.log('TESTE');
    }, 2000);

    return () => clearInterval(interval);

  });
  */

  return (
    <div>
      <div class='backImg'> </div>
      {/* <div class='backImg' style={planoDeFundo}> </div> */}
      <nav className='nav-Painel glass row'>
        <Link className='nav-a' to="/">🍀 Sortear número</Link>
        <Link className='nav-a' to="/Relogio">🕗 Relógio</Link>
        <Link className='nav-a' to="/User">😎 Usuário</Link>
      </nav>
      <Outlet />

    </div>

  );
}

export default Nav;
