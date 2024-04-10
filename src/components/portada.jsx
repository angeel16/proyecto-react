import React from 'react';
import { Link } from 'react-scroll';
import cyberBgImg from '../assets/portada.jpg';

const Portada = () => {
  return (
    <div className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${cyberBgImg})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="text-center z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">Bienvenido a nuestra empresa informática</h1>
        <p className="text-lg text-white mb-8">Tu socio en soluciones tecnológicas</p>
        <Link to={'/portada'} smooth={true} duration={500}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full uppercase tracking-wide transition-colors">Ver servicios</button>
        </Link>
      </div>
    </div>
  );
}

export default Portada;
