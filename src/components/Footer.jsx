import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full px-2 mt-24 text-center text-gray-300 bg-slate-900 py-y" style={{ fontFamily: "Courier New, monospace" }}>
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 lg:grid-cols-6 md:grid-cols-5 border-b-2 border-gray-600 py-8">
        {/* Sección SOPORTE */}
        <div>
          <h6 className="pt-2 font-bold">SOPORTE</h6>
          <ul>
            <li className="py-1">Precios</li>
            <li className="py-1">Documentación</li>
            <li className="py-1">Guías</li>
            <li className="py-1">Estado de la API</li>
          </ul>
        </div>

        {/* Sección EMPRESA */}
        <div>
          <h6 className="pt-2 font-bold">EMPRESA</h6>
          <ul>
            <li className="py-1">Acerca de</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Trabajos</li>
            <li className="py-1">Prensa</li>
            <li className="py-1">Socios</li>
          </ul>
        </div>

        {/* Sección LEGAL */}
        <div>
          <h6 className="pt-2 font-bold">LEGAL</h6>
          <ul>
            <li className="py-1">Reclamos</li>
            <li className="py-1">Privacidad</li>
            <li className="py-1">Términos</li>
            <li className="py-1">Políticas</li>
            <li className="py-1">Condiciones</li>
          </ul>
        </div>

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Suscríbete a nuestro boletín</p>
          <p className="py-4">
            Las últimas noticias, artículos y recursos, enviados a tu bandeja de entrada semanalmente
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mb-4 mr-4 rounded-md"
              type="email"
              placeholder="Ingresa tu correo electrónico"
            />
            <button className="p-2 mb-4">Suscribirse</button>
          </form>
        </div>
      </div>

      <div className="flex-col flex max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2024 Angel Borrego Marrón</p>
        <div className="flex sm:w-[300px] justify-around pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
