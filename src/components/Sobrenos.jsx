import React from "react";

const Sobrenos = () => {
  return (
    <div name="acerca" className="w-full my-32" style={{ fontFamily: "Courier New, monospace" }}>
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Confiado por amantes del diseño interior
          </h2>
          <p className="py-6 text-3xl text-gray-500">
            Descubre por qué miles de personas eligen nuestros accesorios para iluminar, decorar sus hogares y espacios de trabajo.
          </p>
        </div>
        <div className="grid gap-1 px-2 text-center md:grid-cols-3">
          <div className="py-8 border shadow-xl rounded-xl">
            <p className="text-6xl font-bold text-indigo-600">100%</p>
            <p className="mt-2 text-gray-400">Satisfacción garantizada</p>
          </div>
          <div className="py-8 border shadow-xl rounded-xl">
            <p className="text-6xl font-bold text-indigo-600">Envío Gratis</p>
            <p className="mt-2 text-gray-400">En todos los pedidos</p>
          </div>
          <div className="py-8 border shadow-xl rounded-xl">
            <p className="text-6xl font-bold text-indigo-600">Variedad</p>
            <p className="mt-2 text-gray-400">Más de 100 estilos únicos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobrenos;
