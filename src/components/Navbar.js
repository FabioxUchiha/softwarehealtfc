import React from "react";

export const Navbar = () => {
  return (
    <nav class="animate__animated animate__backInLeft flex top-0 fixed justify-around space-x-2 w-full text-xl sm:text-2xl lg:text-3xl z-50 mt-3 text-gray-500 bg-gradient-to-l from-gray-200">
      <a className="" href="#inicio">
        Inicio
      </a>
      <a href="#acercade">Acerca de</a>
      <a href="#contacto">Contacto</a>
    </nav>
  );
};
