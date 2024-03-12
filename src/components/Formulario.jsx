import React, { useState } from "react";

const RegistroFormulario = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [confirmarContrasena, setConfirmarContrasena] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (contrasena !== confirmarContrasena) {
            console.log("Las contraseñas no coinciden");
            return;
        }
        console.log("Usuario registrado:");
        console.log("Nombre:", nombre);
        console.log("Email:", email);
        console.log("Contraseña:", contrasena);
        // Limpiar los campos del formulario
        setNombre("");
        setEmail("");
        setContrasena("");
        setConfirmarContrasena("");
    };

    return (
        <div className="max-w-md mx-auto mt-10" style={{ fontFamily: "Courier New, monospace" }}>
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Registro de Usuario</h2>
            <p className="text-gray-700 mb-4">Por favor, completa el siguiente formulario para registrarte.</p>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="contrasena" className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                    <input
                        type="password"
                        id="contrasena"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Contraseña"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="confirmarContrasena" className="block text-gray-700 text-sm font-bold mb-2">Confirmar Contraseña</label>
                    <input
                        type="password"
                        id="confirmarContrasena"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Confirmar Contraseña"
                        value={confirmarContrasena}
                        onChange={(e) => setConfirmarContrasena(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Registrarse
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegistroFormulario;
