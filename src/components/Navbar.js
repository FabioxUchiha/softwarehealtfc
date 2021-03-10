import React from "react";

export const Navbar = () => {
  return (
    <nav class="flex top-0 fixed justify-around space-x-2 w-full sm:text-2xl lg:text-3xl z-50">
      <a href="#inicio">Inicio</a>
      <a href="#acercade">Acerca de</a>
      <a href="#contacto">Contacto</a>
    </nav>
  );
};
