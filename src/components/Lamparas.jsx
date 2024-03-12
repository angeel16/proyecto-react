import React, { useState } from "react";

const LampCatalog = () => {
  const lamps = [
    {
      id: 1,
      name: "Louise Moderna Geométrica Metal/Acrílico Lámpara Colgante",
      description: "La lámpara de araña está fabricada con material metálico de alta calidad para brindar brillo y longevidad, con excelente resistencia al calor y la corrosión. Disponible en negro, blanco y dorado, su diseño único inspirado en una nota musical añade elegancia y sofisticación a cualquier espacio, siendo perfecta para iluminar salones, comedores y más.",
      imageUrl: require("../assets/1.webp"),
      price: "300€",
    },
    {
      id: 2,
      name: "Lámpara grande 27 luces LED dimable SPHERE Ø 80 cm",
      description: "Lámpara gran formato de diseño moderno, modelo SPHERE LED. Ideal para la iluminación decorativa interior de grandes espacios. Fabricado en metal y policarbonato. Acabado en color cromo, cobre y latón satinados.",
      imageUrl: require("../assets/4.jpg"),
      price: "2500€",
    },
    {
      id: 3,
      name: "Arisha Diseño Anilla Metal Lámpara Colgante",
      description: "Nuestras lámparas de araña modernas combinan silicona delicada con metal premium para una fusión armoniosa de estética y funcionalidad. Con una construcción resistente al desgaste y una gama de colores cautivadores, se integran perfectamente en cualquier decoración. Su diseño innovador y ajustable permite una instalación fácil y una personalización versátil para adaptarse a cualquier visión de diseño.",
      imageUrl: require("../assets/3.jpg"),
      price: "300€",
    },
    {
      id: 4,
      name: "Louise Moderna Irregular Metal/Silicio Lámpara Colgante Negra",
      description: "Nuestra lámpara colgante de Metal y Silicona ofrece durabilidad y estilo excepcionales, con un diseño atemporal que se adapta a cualquier entorno. Ofrecemos versiones estándar y regulables para ajustar el ambiente según tus preferencias y garantizar compatibilidad con sistemas de iluminación. ",
      imageUrl: require("../assets/3.webp"),
      price: "150€",
    },
    {
      id: 5,
      name: "Lámpara de techo Majesty ROBLE Natural",
      description: "Es una pieza artesanal única que combina elegancia nórdica con la calidez del roble natural. Su diseño minimalista y su luz única la convierten en un punto focal encantador para cualquier espacio. Con su meticulosa artesanía y su estilo atemporal.",
      imageUrl: require("../assets/1.avif"),
      price: "200€",
    },
    {
      id: 6,
      name: "Lámparas de Araña",
      description: "Con esta elegante araña de estilo y trae un estilo elegante para el salón. Este hermoso accesorio de luz está garantizado para brindar calidez e iluminación a su espacio habitable.",
      imageUrl: require("../assets/6.jpg"),
      price: "1500€",
    }
  ];

  const [showInfo, setShowInfo] = useState(null);

  const handleImageClick = (lampId) => {
    if (showInfo === lampId) {
      setShowInfo(null); // Si la tarjeta está mostrando información y se hace clic nuevamente en la imagen, ocultamos la información
    } else {
      setShowInfo(lampId); // De lo contrario, mostramos la información de la lámpara correspondiente al hacer clic en la imagen
    }
  };

  return (
    <div className="container mx-auto py-8" name="Catalogo" style={{ fontFamily: "Courier New, monospace" }}>
      <h2 className="text-3xl font-semibold text-center mb-8">Catálogo de Lámparas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {lamps.map((lamp) => (
          <div key={lamp.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className={`transform-gpu transition-transform duration-500 ${showInfo === lamp.id ? 'rotate-y-180' : ''}`}>
              <div className="w-full h-64">
                <img
                  src={lamp.imageUrl}
                  alt={lamp.name}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => handleImageClick(lamp.id)}
                />
              </div>
            </div>
            <div className={`transform-gpu transition-transform duration-500 ${showInfo === lamp.id ? 'rotate-y-180' : 'rotate-y-180 hidden'}`}>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{lamp.name}</h3>
                <p className="text-gray-700 mb-4">{lamp.description}</p>
                <p className="text-gray-900 font-bold">{lamp.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LampCatalog;
