import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.jpg';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

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
            value={id}
            onChange={e => setId(e.target.value)}
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
