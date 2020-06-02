import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.jpg';
import perfilImg from '../../assets/WhatsApp Image 2020-05-25 at 14.18.44.jpeg';

export default function Profile() {
  const [veiculos, setVeiculos] = useState([]);  

  const id_logon = localStorage.getItem('id_logon');
  const name = localStorage.getItem('name');
  const history = useHistory();

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: id_logon,
      }
    }).then(response => {
      setVeiculos(response.data);
    })
  }, [id_logon]);

  async function handleDeleteVeiculo(id) {
    try {
      await api.delete(`veiculos/${id}`, {
        headers: {
          Authorization: id_logon,
        }
      });

      setVeiculos(veiculos.filter(veiculo => veiculo.id !== id));
    } catch (err) {
      alert('Erro ao deletar, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="container">
      <section className="form" id="home">
        <div className="header">
          <img src={logoImg} alt="Marquinhos Veículos"/>
        </div>
      </section> 
    <div className="profile-container">
      <header>
        <img src={perfilImg} alt="Marquinhos Veiculos" />
        <span>Bem vindo, {name}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo veículo</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#212121" />
        </button>
      </header>

      <h1>Veículos cadastrados</h1>

      <ul>
        {veiculos.map(veiculo => (
          <li key={veiculo.id}>

            <strong>FABRICANTE:</strong>
            <p>{veiculo.fabricante}</p>

            <strong>MODELO:</strong>
            <p>{veiculo.modelo}</p>

            <strong>PLACA:</strong>
            <p>{veiculo.placa}</p>

            <strong>COMBUSTÍVEL:</strong>
            <p>{veiculo.combustivel}</p>

            <strong>ESTADO:</strong>
            <p>{veiculo.estado}</p>

            <strong>PORTAS:</strong>
            <p>{veiculo.portas}</p>

            <strong>ANO:</strong>
            <p>{veiculo.ano}</p>

            <strong>KM:</strong>
            <p>{veiculo.km}</p>

            <strong>OBSERVAÇÕES:</strong>
            <p>{veiculo.obs}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(veiculo.valor)}</p>

            <button onClick={() => handleDeleteVeiculo(veiculo.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
    <section className="footer" id="contato"></section>
  </div>
  );
}