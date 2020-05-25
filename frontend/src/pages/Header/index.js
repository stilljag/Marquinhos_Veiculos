import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.jpg';
import bannerImg from '../../assets/marquinhosveiculos.jpg';
import carro1Img from '../../assets/carro1.jpeg';



export default function Header() {
  const [veiculos, setVeiculos] = useState([]);  

  const id_logon = localStorage.getItem('id_logon');
  
  

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: '123456',
      }
    }).then(response => {
      setVeiculos(response.data);
    })
  }, [id_logon]);

 

  
  return (
    
    <div className="container">
      <section className="form" id="home">
        <div className="header">
          <img src={logoImg} alt="Marquinhos Veículos"/>
          <ul >
            <li><a href="#home">Home</a></li>
            <li><a href="#novidades">Novidades</a></li>
            <li><a href="#ofertas">Ofertas</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
      </section> 

      <section className="banner">
        <img src={bannerImg} alt="Marquinhos Veículos"/>
      </section>
     
      <section className="novidades" id="novidades"> 
        <h1>Confira nossas Novidades</h1>
        
        {veiculos.map(veiculo => (
          <div className="single-car" id='update'>     
              <ul>
                  <li key={veiculo.id}>
                    <img src={carro1Img} alt="Marquinhos Veículos"/>
                    <h2>{veiculo.fabricante} {veiculo.modelo}.</h2>

                    <h3> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(veiculo.valor)}</h3>
                    
                    <p>Ano {veiculo.ano} / {veiculo.km} km / {veiculo.combustivel}</p>               
                  </li>
              </ul>
          </div>
        ))}
      </section>
      

      
      <section className="contato">
        <h2>Entre em contato</h2>
        <form>
          <div className="form-wraper w100">
            <span>Nome:</span>
            <input placeholder="Nome*" type="text" name="nome" />
          </div>
          <div className="form-wraper w50">
            <span>E-mail:</span>
            <input placeholder="E-mail*" type="text" name="email" />
          </div>
          <div className="form-wraper w50">
            <span>Telefone:</span>
            <input placeholder="Telefone*" type="text" name="telefone" />
          </div>
          <div className="form-wraper w100">
            <span>Mensagem:</span>
            <textarea placeholder="Mensagem..."></textarea>
          </div>
          <div className="form-wraper w100 center">
            <input type="submit" name="acao" value="Enviar"></input>
          </div>  
        </form>
      </section>
      <section className="footer" id="contato">
        <div className="single-footer">
          <h2>Contatos:</h2>
          <p>Whatsapp: 53 98478-5157</p>
          <p>Telefone: 53 3261-8547</p>
        </div>
        <div className="single-footer">
          <h2>Endereço:</h2>
          <p>Rua General Osório, n° 475</p>
          <p>Cep: 961700-000</p>
        </div>
        <div className="single-footer">
          <h2>Redes Sociais:</h2>
          <p>Icons</p>
        </div>
      </section>
    </div>
  );
}
