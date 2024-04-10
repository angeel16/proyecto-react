import React from 'react';

const ContactForm = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white mt-5" name="contacto" id="contacto">
            <div className="container mx-auto" >
                <h2 className="text-3xl font-bold mb-8 text-center">Contáctanos para cualquier problema</h2>
                <form className="max-w-lg mx-auto">
                    <div className="mb-6">
                        <label className="block mb-2" htmlFor="name">Nombre</label>
                        <input className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" type="text" id="name" name="name" required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2" htmlFor="email">Correo Electrónico</label>
                        <input className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" type="email" id="email" name="email" required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2" htmlFor="message">Problema</label>
                        <textarea
                            className="w-full text-gray-800 px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100"
                            id="message"
                            name="message"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button className="bg-white text-gray-800 px-6 py-3 rounded-lg hover:bg-indigo-300 hover:text-white transition-colors" type="submit">Enviar</button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
