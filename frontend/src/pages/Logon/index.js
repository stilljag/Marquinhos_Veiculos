import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';


import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.jpg';

export default function Logon() {
  const [id_logon, setId_logon] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
        const response = await api.post('logon', { id_logon });
        localStorage.setItem('id_logon', id_logon);
        localStorage.setItem('name', response.data.name);  
        history.push('/profile');
    } catch (err) {
        alert('Falha no login, tente novamente.');
    }
  }   

  return (
    <div className="logon-container">
      <section className="classe">

        <form onSubmit={handleLogin}>
          <h1>Seja bem-vindo Marquinhos, digite sua sua senha</h1>

          <input 
            placeholder="Senha"
            value={id_logon}
            onChange={e => setId_logon(e.target.value)}
          />

          <button className="button" type="submit">Entrar</button>
        </form>
        <div className="img-perfil">
          <img src={logoImg} alt="Marquinhos Veículos"/>
        </div>
      </section>
    </div>
  );
}
