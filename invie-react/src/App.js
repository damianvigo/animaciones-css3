import React from 'react';
import logo from './logo.svg';
import './App.css';
import Portada from './components/Portada';
import Guitarras from './components/Guitarras';
import Footer from './components/Footer';

import logoPortada from './assets/images/invie.png';
import acustica from './assets/images/invie-acustica.png';
import classic from './assets/images/invie-classic.png';

const data = {
   menu: [
    {
      href: 'index.html',
      title: 'Home'
    },
    {
      href: '#guitarras',
      title: 'Guitarras'
    },
    {
      href: 'precios.html',
      title: 'precios'
    },
    {
      href: 'ejemplo',
      title: 'Don\'t click me'
    }
  ],

  logoPortada: logoPortada,

  guitarras: [
    {
      image: acustica,
      alt: 'Guitarra Invie Acustica',
      name: 'Invie Acustica',
      features: [
        'Estilo vintage',
        'Madera pura',
        'Incluye estuche invisible de aluminio'
      ]
    },
    {
      image: classic,
      alt: 'Guitarra Invie Classic',
      name: 'Invie Classic',
      features: [
        'Estilo vintage',
        'Liviana',
        'Empieza tu camino como rockstar'
      ]
    }
  ]
}


function App() {
  return (
    <section className="Invie">
      <Portada menu={data.menu} logo={data.logoPortada}/>
      {/* Portada */}
      <Guitarras guitarras={data.guitarras}/>
      {/* Guitarras */}
      <Footer />
      {/* Footer */}
    </section> 
  );
}

export default App;
