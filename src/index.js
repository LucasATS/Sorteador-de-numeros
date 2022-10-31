import { HashRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

import './index.css';

import App from './components/App';
import Nav from './components/Nav';
import Relogio from './components/Relogio';
import User from './components/User';

const painelRelogio = () => {
  return <div className='painel glass col'>
    <Relogio />
  </div>
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<App />} />
        <Route path="Relogio" element={painelRelogio()} />
        <Route path="User" element={<User />} />
      </Route>
    </Routes>
  </HashRouter>
);