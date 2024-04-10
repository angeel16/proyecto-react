import React from "react";
import ciudad from '../assets/portada.jpg';
import productos from '../assets/productoselectronicos.jpg';
import soporte from '../assets/Cloud-Center-Andalucía_Soporte-Técnico.png';
import contacto from '../assets/como_encontrar_las_mejores_formas_de_contacto_de_las_empresas_50780_orig.jpg';

const AboutUs = () => {
    return (
        <div name="acerca" className="container mx-auto p-8 text-center">
            <div className="mb-8">
                <div className="flex justify-center mb-4">
                    <a href="#acerca" className="w-64 h-64 mr-8 relative rounded-lg overflow-hidden">
                        <img src={ciudad} alt="Imagen 1" className="w-full h-full" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h2 className="text-3xl font-bold">Quiénes Somos</h2>
                        </div>
                    </a>
                    <a href="#productos" className="w-64 h-64 mr-8 relative rounded-lg overflow-hidden">
                        <img src={productos} alt="Imagen 1" className="w-full h-full" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h2 className="text-3xl font-bold">Productos</h2>
                        </div>
                    </a>
                    <a href="#soporte" className="w-64 h-64 mr-8 relative rounded-lg overflow-hidden">
                        <img src={soporte} alt="Imagen 1" className="w-full h-full" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h2 className="text-3xl font-bold">Soporte</h2>
                        </div>
                    </a>
                    <a href="#contacto" className="w-64 h-64 relative rounded-lg overflow-hidden">
                        <img src={contacto} alt="Imagen 3" className="w-full h-full" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                            <h2 className="text-3xl font-bold">Contacto</h2>
                        </div>
                    </a>
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-4" id="acerca">Quiénes Somos</h2>
                <p className="text-xl mb-4">
                    Fundada en 1997 con el principal objetivo de ser una empresa del sector de las tecnologías de la información que pudiera ofrecer a sus clientes una solución completa de productos y servicios con la mejor relación calidad-precio.
                    Siempre con propuestas de última generación y trabajos realizados con un alto grado de satisfacción para los clientes, hemos conseguido crear una imagen de seriedad y profesionalidad.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
