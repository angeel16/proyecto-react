import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="flex items-center justify-between w-full h-full px-8">
        <div className="flex items-center">
          <h1 className="mr-4 text-3xl font-bold sm:text-4xl" style={{ fontFamily: "Courier New, monospace" }}>Destellos Efímeros
          </h1>
          <ul className="hidden md:flex">
            <li style={{ fontFamily: "Courier New, monospace" }}>
              <Link to="Inicio" >
                Home
              </Link>
            </li>
            <li style={{ fontFamily: "Courier New, monospace" }}>
              <Link to="acerca" >
                AcercaDe
              </Link>
            </li>
            <li style={{ fontFamily: "Courier New, monospace" }}>
              <Link to="Catalogo" >
                Catalogo
              </Link>
            </li>

            <li style={{ fontFamily: "Courier New, monospace" }}>
              <Link to="Soporte" >
                Soporte
              </Link>
            </li>
          </ul>
        </div>

      </div>

      <ul className={!nav ? "hidden" : "absolute w-full px-8 bg-zinc-200"}>
        <li className="w-full border-b-2 border-zinc-300">
          <Link onClick={handleClose} to="Inicio" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li className="w-full border-b-2 border-zinc-300">
          <Link
            onClick={handleClose}
            to="acerca"
            smooth={true}
            offset={-200}
            duration={500}
          >
            AcercaDe
          </Link>
        </li>
        <li className="w-full border-b-2 border-zinc-300">
          <Link
            onClick={handleClose}
            to="Catalogo"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Catalogo
          </Link>
        </li>
        <li className="w-full border-b-2 border-zinc-300">
          <Link
            onClick={handleClose}
            to="Cuenta"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Cuentas
          </Link>
        </li>
        <li className="w-full border-b-2 border-zinc-300">
          <Link
            onClick={handleClose}
            to="Soporte"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Soporte
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
