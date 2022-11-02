import './User.css';
import { React, useEffect, useState } from "react";
import axios from 'axios';
import Aleatorio from '../Aleatorio';

function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {

    const interval = setInterval(() => {

      axios.get(`https://jsonplaceholder.typicode.com/users/${Aleatorio(1, 10, 1)}`)
        .then(res => {
          setUser(res.data);
        });

    }, 2000);

    return () => clearInterval(interval);

  });

  return (
    <div className='user-painel glass col left'>
      <div className="row">
        <h1 className='h1'>{user.name}</h1>
        <h4 className='h3'>id:{user.id}</h4>
      </div>
      <h3 className='h3'>User name: {user.username}</h3>
      <h3 className='h3'>Email: {user.email}</h3>
      <h3 className='h3'>Telefone: {user.phone}</h3>
      <h3 className='h3'>Site: {user.website}</h3>
      <h3 className='h3'>Endereço: {user?.address?.street}, {user?.address?.suite}, {user?.address?.city}, {user?.address?.zipcode}</h3>
      <h4 className='h3'>GEO: lat{user?.address?.geo?.lat}, lng{user?.address?.geo?.lng}</h4>
      <h4 className='h3'>Empresa: {user?.company?.name}, {user?.company?.catchPhrase}, {user?.company?.bs}</h4>
    </div>

  );
}

export default User;
