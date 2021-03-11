import React from "react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 flex justify-around w-full mt-3 space-x-2 text-xl text-gray-500 animate__animated animate__backInLeft sm:text-2xl lg:text-3xl bg-gradient-to-l from-gray-200">
      <a className="" href="#inicio">
        Inicio
      </a>
      <a href="#acercade">Acerca de</a>
      <a href="#contacto">Contacto</a>
    </nav>
  );
};
