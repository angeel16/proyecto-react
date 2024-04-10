import React, { useState } from "react";
import { PhoneIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import supportImg from "../assets/support.jpg";

const Soporte = () => {
  const [showContactVentas, setShowContactVentas] = useState(false);
  const [showContactSoporte, setShowContactSoporte] = useState(false);
  const [showContactMedios, setShowContactMedios] = useState(false);

  const handleContactClick = (contact) => {
    switch (contact) {
      case "Ventas":
        setShowContactVentas(!showContactVentas);
        setShowContactSoporte(false);
        setShowContactMedios(false);
        break;
      case "Soporte Técnico":
        setShowContactVentas(false);
        setShowContactSoporte(!showContactSoporte);
        setShowContactMedios(false);
        break;
      case "Consultas de Medios":
        setShowContactVentas(false);
        setShowContactSoporte(false);
        setShowContactMedios(!showContactMedios);
        break;
      default:
        setShowContactVentas(false);
        setShowContactSoporte(false);
        setShowContactMedios(false);
        break;
    }
  };

  return (
    <div name="soporte" className="w-full mt-24" id="soporte">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="object-cover w-full h-full mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-3xl text-center text-slate-300">SOPORTE</h2>
          <h3 className="py-6 text-5xl font-bold text-center">
            Encuentra el apoyo adecuado
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Estamos aquí para ayudarte con cualquier pregunta o problema que tengas sobre nuestros servicios informáticos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pt-12 text-black">
          <div className="flex flex-col bg-white shadow-2xl rounded-xl">
            <div className="p-8 flex-grow">
              <PhoneIcon className="w-16 p-4 text-white bg-indigo-600 rounded-lg mb-6" />
              <h3 className="my-2 text-2xl font-bold ">Ventas</h3>
              <p className="text-lg text-gray-600 mb-6">
                ¿Tienes preguntas sobre nuestros servicios informáticos o necesitas ayuda para hacer un pedido?
              </p>
            </div>
            <div className="p-4 bg-slate-100 cursor-pointer" onClick={() => handleContactClick("Ventas")}>
              <p className="flex items-center text-indigo-600">
                Contáctanos <ChevronRightIcon className="w-5 ml-2 transform transition-transform" style={{ transform: showContactVentas ? 'rotateY(180deg)' : 'rotateY(0deg)' }} />
              </p>
            </div>
            {showContactVentas && (
              <div className="p-4 bg-gray-100 mt-4">
                <p>Contacto para Ventas: ventas@tuempresa.com</p>
                <p>Teléfono de Ventas: +123 456 789</p>
              </div>
            )}
          </div>

          <div className="flex flex-col bg-white shadow-2xl rounded-xl">
            <div className="p-8 flex-grow">
              <LightBulbIcon className="w-16 p-4 text-white bg-indigo-600 rounded-lg mb-6" />
              <h3 className="my-2 text-2xl font-bold ">Soporte Técnico</h3>
              <p className="text-lg text-gray-600 mb-6">
                ¿Necesitas ayuda para instalar o configurar tus sistemas informáticos?
              </p>
            </div>
            <div className="p-4 bg-slate-100 cursor-pointer" onClick={() => handleContactClick("Soporte Técnico")}>
              <p className="flex items-center text-indigo-600">
                Contáctanos <ChevronRightIcon className="w-5 ml-2 transform transition-transform" style={{ transform: showContactSoporte ? 'rotateY(180deg)' : 'rotateY(0deg)' }} />
              </p>
            </div>
            {showContactSoporte && (
              <div className="p-4 bg-gray-100 mt-4">
                <p>Contacto para Soporte Técnico: soporte@tuempresa.com</p>
                <p>Teléfono de Soporte Técnico: +123 456 789</p>
              </div>
            )}
          </div>

          <div className="flex flex-col bg-white shadow-2xl rounded-xl">
            <div className="p-8 flex-grow">
              <LightBulbIcon className="w-16 p-4 text-white bg-indigo-600 rounded-lg mb-6" />
              <h3 className="my-2 text-2xl font-bold ">Consultas de Medios</h3>
              <p className="text-lg text-gray-600 mb-6">
                ¿Eres parte de los medios de comunicación y tienes preguntas sobre nuestra empresa o servicios informáticos?
              </p>
            </div>
            <div className="p-4 bg-slate-100 cursor-pointer" onClick={() => handleContactClick("Consultas de Medios")}>
              <p className="flex items-center text-indigo-600">
                Contáctanos <ChevronRightIcon className="w-5 ml-2 transform transition-transform" style={{ transform: showContactMedios ? 'rotateY(180deg)' : 'rotateY(0deg)' }} />
              </p>
            </div>
            {showContactMedios && (
              <div className="p-4 bg-gray-100 mt-4">
                <p>Contacto para Consultas de Medios: prensa@tuempresa.com</p>
                <p>Teléfono de Medios: +123 456 789</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soporte;
