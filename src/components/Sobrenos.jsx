import React from "react";

const ImageCard = ({ imageUrl, name, description, price }) => {
  const [showInfo, setShowInfo] = React.useState(false);

  return (
    <div
      className="relative bg-white shadow-lg rounded-md overflow-hidden cursor-pointer"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <div className="w-full h-96">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          style={{ objectFit: "cover" }}
        />
      </div>
      {showInfo && (
        <div className="absolute top-0 left-0 right-0 bg-gray-900 bg-opacity-75 text-white text-center p-4">
          <h1 className="text-xl font-bold">{name}</h1>
        </div>
      )}
      {showInfo && (
        <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-75 text-white text-center p-4">
          <h3 className="text-lg">{description}</h3>
          {price && <p className="text-gray-200 font-bold">{price}</p>}
        </div>
      )}
    </div>
  );
};

const Productos = () => {
  const productos = [
    {
      id: 1,
      name: "Ordenadores",
      description: "Por su alto rendimiento y fiabilidad solo distribuimos primeras marcas.",
      imageUrl: require("../assets/ordenadores.jpg"),
    },
    {
      id: 2,
      name: "Movilidad y Logística",
      description: "Como expertos en este sector, nuestro portfolio es el más amplio y competitivo",
      imageUrl: require("../assets/zebra.jpg"),
    },
    {
      id: 3,
      name: "Servicios de mantenimiento",
      description: "Servicio técnico Hardware, administración de sistema, administración bases de datos SQL, seguridad y programación a medida.",
      imageUrl: require("../assets/Serviciostecnicos.jpg"),
    },
  ];

  return (
    <div className="container mx-auto py-8" name="Catalogo" id="productos">
      <h2 className="text-3xl font-bold text-center mb-8">Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {productos.map((producto) => (
          <ImageCard
            key={producto.id}
            imageUrl={producto.imageUrl}
            name={producto.name}
            description={producto.description}
            price={producto.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Productos;
