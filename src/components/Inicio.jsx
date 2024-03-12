import React from "react";
import cyberBgImg from "../assets/logo.png";

const Inicio = () => {
  return (
    <div name="Inicio" className="flex flex-col justify-center items-center w-full h-screen bg-zinc-200" style={{ fontFamily: "Courier New, monospace" }}>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex justify-center items-center md:justify-end md:pr-8">
          <img className="w-full rounded-3xl" src={cyberBgImg} alt="Cyber Background" />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start py-8 px-4">
          <p className="text-2xl md:text-xl text-black">Decora tu hogar con estilo</p>
          <h1 className="py-3 text-5xl font-bold md:text-7xl text-black">Encuentra los accesorios perfectos</h1>
          <br />
          <p className="pb-3 text-2xl md:text-lg text-black">Explora nuestra colección de accesorios únicos y elegantes. Desde modernos y minimalistas hasta clásicos y extravagantes, tenemos lo que necesitas para crear el ambiente perfecto en tu hogar. Ya sea que estés buscando decorar tu sala de estar, dormitorio, cocina o cualquier otro espacio, encontrarás el accesorio ideal que se adapte a tu estilo y necesidades.</p>
          <p className="pb-3 text-2xl md:text-lg text-black">¡Descubre nuestras ofertas especiales y dale vida a tu hogar con nuestros increíbles accesorios!</p>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
