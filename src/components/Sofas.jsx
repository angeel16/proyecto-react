import React, { useState } from "react";

const SofaCatalog = () => {
    const sofas = [
        {
            id: 1,
            name: "Sofá rinconero Comfivo 111 (Soft 017 + Lawa 05)",
            description: "",
            imageUrl: require("../assets/2.webp"),
            price: "1500€",
        },
        {
            id: 2,
            name: "Rinconera de diseño modelo IBISSA con 3 asientos en tela Aquaclean",
            description: "",
            imageUrl: require("../assets/7.jpg"),
            price: "2800€",
        },
        {
            id: 3,
            name: "Sofá Gala 4 plazas con chaise longue izquierdo beige 300 cm",
            description: "",
            imageUrl: require("../assets/8.webp"),
            price: "2500€",
        },

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
            <h2 className="text-3xl font-semibold text-center mb-8">Catálogo de Sofas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {sofas.map((sofa) => (
                    <div key={sofa.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className={`transform-gpu transition-transform duration-500 ${showInfo === sofa.id ? 'rotate-y-180' : ''}`}>
                            <div className="w-full h-64">
                                <img
                                    src={sofa.imageUrl}
                                    alt={sofa.name}
                                    className="w-full h-full object-cover cursor-pointer"
                                    onClick={() => handleImageClick(sofa.id)}
                                />
                            </div>
                        </div>
                        <div className={`transform-gpu transition-transform duration-500 ${showInfo === sofa.id ? 'rotate-y-180' : 'rotate-y-180 hidden'}`}>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{sofa.name}</h3>
                                <p className="text-gray-700 mb-4">{sofa.description}</p>
                                <p className="text-gray-900 font-bold">{sofa.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SofaCatalog;
