import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import api from '../../services/api';


import './styles.css';

import logoImg from '../../assets/logo.jpg';

export default function NewIncident() {  
  const [fabricante, setFabricante] = useState('');
  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');
  const [estado, setEstado] = useState('');
  const [portas, setPortas] = useState('');
  const [combustivel, setCombustivel] = useState('');
  const [obs, setObs] = useState('');
  const [valor, setValor] = useState('');
  const [km, setKm] = useState('');
  const [ano, setAno] = useState('');

  const history = useHistory();
  const id_logon=localStorage.getItem('id_logon');
  const logon_id=id_logon;
    
  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      fabricante,
      modelo,
      placa,
      estado, 
      portas,
      combustivel,
      obs,
      valor, 
      km,
      ano,
      logon_id,
    };

    try {
      await api.post('veiculos', data, {     
        headers:{
          authorization:id_logon,          
        }
      });
      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Marquinhos Veículos"/>

          <h1>Cadastre seus novos veículos</h1>

        </section>

        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Fabricante"
            value={fabricante}
            onChange={e => setFabricante(e.target.value)}
          />

          <input 
            placeholder="Modelo"
            value={modelo}
            onChange={e => setModelo(e.target.value)}
          />

          <input className="w50"
            placeholder="Placa"
            value={placa}
            onChange={e => setPlaca(e.target.value)}
          />

          <input className="w50"
            placeholder="Combustível"
            value={combustivel}
            onChange={e => setCombustivel(e.target.value)}
          />

          <input 
            placeholder="Estado"
            value={estado}
            onChange={e => setEstado(e.target.value)}
          />

          <input className="w50"
            placeholder="Portas"
            value={portas}
            onChange={e => setPortas(e.target.value)}
          />

          <input className="w50"
            placeholder="Valor"
            value={valor}
            onChange={e => setValor(e.target.value)}
          />

          <input className="w50"
            placeholder="Ano"
            value={ano}
            onChange={e => setAno(e.target.value)}
          />

          <input className="w50"
            placeholder="kilometragem"
            value={km}
            onChange={e => setKm(e.target.value)}
          />

          <textarea
            placeholder="Observações"
            value={obs}
            onChange={e => setObs(e.target.value)}
          />
          <button className="button" type="submit">Cadastrar</button>
          

        </form>
      </div>
    </div>
  )
}
