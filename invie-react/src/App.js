import React from 'react';
import logo from './logo.svg';
import './App.css';
import Portada from './components/Portada';
import Guitarras from './components/Guitarras';
import Footer from './components/Footer';

function App() {
  return (
    <section className="Invie">
      <Portada />
      {/* Portada */}
      <Guitarras />
      {/* Guitarras */}
      <Footer />
      {/* Footer */}
    </section> 
  );
}

export default App;
