import React, { useState } from "react";

const SillaCatalog = () => {
    const sillas = [
        {
            id: 1,
            name: "Colección Equus",
            description: "Elegancia, nobleza, fuerza y dinamismo en esta preciosa colección Equus.",
            imageUrl: require("../assets/9.jpg"),
            price: "300€",
        },
        {
            id: 2,
            name: "Colección Earth",
            description: "En esta colección encontramos imponentes piezas de mobiliario, auténticas piezas de colección, como en sus sillas.",
            imageUrl: require("../assets/10.jpg"),
            price: "400€",
        },
        {
            id: 3,
            name: "Colección Metrópolis",
            description: "Las sillas recuperan en esta colección su estatus histórico como símbolo de distinción.",
            imageUrl: require("../assets/11.jpg"),
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
            <h2 className="text-3xl font-semibold text-center mb-8">Sillas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {sillas.map((silla) => (
                    <div key={silla.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className={`transform-gpu transition-transform duration-500 ${showInfo === silla.id ? 'rotate-y-180' : ''}`}>
                            <div className="w-full h-64">
                                <img
                                    src={silla.imageUrl}
                                    alt={silla.name}
                                    className="w-full h-full object-cover cursor-pointer"
                                    onClick={() => handleImageClick(silla.id)}
                                />
                            </div>
                        </div>
                        <div className={`transform-gpu transition-transform duration-500 ${showInfo === silla.id ? 'rotate-y-180' : 'rotate-y-180 hidden'}`}>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{silla.name}</h3>
                                <p className="text-gray-700 mb-4">{silla.description}</p>
                                <p className="text-gray-900 font-bold">{silla.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SillaCatalog;
