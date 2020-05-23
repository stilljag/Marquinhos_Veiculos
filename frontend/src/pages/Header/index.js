import React from 'react';

import './styles.css';

import logoImg from '../../assets/logo.jpg';
import bannerImg from '../../assets/marquinhosveiculos.jpg';
import carro1Img from '../../assets/carro1.jpeg';

export default function Header() {
  /**ad */
  
  return (
    <div className="container">
      <section className="form">
        <div className="header">
          <img src={logoImg} alt="Marquinhos Veículos"/>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Novidades">Novidades</a></li>
            <li><a href="#Ofertas">Ofertas</a></li>
            <li><a href="#Entre em contato">Contato</a></li>
          </ul>
        </div>
      </section> 
      <section className="banner">
        <img src={bannerImg} alt="Marquinhos Veículos"/>
      </section>
      <section className="novidades">
        <h1>Confira nossas Novidades</h1>
        <div className="single-car">
          <img src={carro1Img} alt="Marquinhos Veículos"/>
          <h2>Chevrolet Camaro 6.2 2SS</h2>
          <h3>R$ 150.000,00</h3>
          <p>Ano 2019 / 20.000 km / Gasolina</p>
        </div>
        <div className="single-car">
          <img src={carro1Img} alt="Marquinhos Veículos"/>
          <h2>Chevrolet Camaro 6.2 2SS</h2>
          <h3>R$ 150.000,00</h3>
          <p>Ano 2019 / 20.000 km / Gasolina</p>
        </div>
        <div className="single-car">
          <img src={carro1Img} alt="Marquinhos Veículos"/>
          <h2>Chevrolet Camaro 6.2 2SS</h2>
          <h3>R$ 150.000,00</h3>
          <p>Ano 2019 / 20.000 km / Gasolina</p>
        </div>
        <div className="single-car">
          <img src={carro1Img} alt="Marquinhos Veículos"/>
          <h2>Chevrolet Camaro 6.2 2SS</h2>
          <h3>R$ 150.000,00</h3>
          <p>Ano 2019 / 20.000 km / Gasolina</p>
        </div>
        <div className="single-car">
          <img src={carro1Img} alt="Marquinhos Veículos"/>
          <h2>Chevrolet Camaro 6.2 2SS</h2>
          <h3>R$ 150.000,00</h3>
          <p>Ano 2019 / 20.000 km / Gasolina</p>
        </div>
        <div className="single-car">
          <img src={carro1Img} alt="Marquinhos Veículos"/>
          <h2>Chevrolet Camaro 6.2 2SS</h2>
          <h3>R$ 150.000,00</h3>
          <p>Ano 2019 / 20.000 km / Gasolina</p>
        </div>
      </section>
      <section className="novidades">
        <h1>Aproveite nossas Ofertas</h1>
        <div className="single-car">
          <img src={carro1Img} alt="Marquinhos Veículos"/>
          <h2>Chevrolet Camaro 6.2 2SS</h2>
          <h3>R$ 150.000,00</h3>
          <p>Ano 2019 / 20.000 km / Gasolina</p>
        </div>
        <div className="single-car">
          <img src={carro1Img} alt="Marquinhos Veículos"/>
          <h2>Chevrolet Camaro 6.2 2SS</h2>
          <h3>R$ 150.000,00</h3>
          <p>Ano 2019 / 20.000 km / Gasolina</p>
        </div>
        <div className="single-car">
          <img src={carro1Img} alt="Marquinhos Veículos"/>
          <h2>Chevrolet Camaro 6.2 2SS</h2>
          <h3>R$ 150.000,00</h3>
          <p>Ano 2019 / 20.000 km / Gasolina</p>
        </div>
        <div className="single-car">
          <img src={carro1Img} alt="Marquinhos Veículos"/>
          <h2>Chevrolet Camaro 6.2 2SS</h2>
          <h3>R$ 150.000,00</h3>
          <p>Ano 2019 / 20.000 km / Gasolina</p>
        </div>
        <div className="single-car">
          <img src={carro1Img} alt="Marquinhos Veículos"/>
          <h2>Chevrolet Camaro 6.2 2SS</h2>
          <h3>R$ 150.000,00</h3>
          <p>Ano 2019 / 20.000 km / Gasolina</p>
        </div>
        <div className="single-car">
          <img src={carro1Img} alt="Marquinhos Veículos"/>
          <h2>Chevrolet Camaro 6.2 2SS</h2>
          <h3>R$ 150.000,00</h3>
          <p>Ano 2019 / 20.000 km / Gasolina</p>
        </div>
      </section>
    </div>
  );
}
