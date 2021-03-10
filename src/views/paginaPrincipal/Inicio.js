import React from "react";
import { OlaBottom } from "../../components/OlaBottom";
import { OlaTop } from "../../components/OlaTop";
import logoPc from "../../img/facebook_cover_photo_2.png";
import logoMovil from "../../img/facebook_profile_image.png";

export const Inicio = () => {
  return (
    <div id="inicio">
      <div className="relative">
        {/* <OlaTop /> */}
        <img src={logoPc} className="sr-only sm:not-sr-only" alt="imagen" />
        <img src={logoMovil} className="sm:hidden" alt="imagen" />
        <OlaBottom />
      </div>
      <div className="container mx-auto mt-4">
        <h2 className="mb-3 font-bold text-center sm:text-2xl lg:text-3xl">
          Controla la información de tu consultorio
        </h2>
        <p className="mb-3">
          ¡Software Healt FC esta listo para ti! Tanto si acabas de lanzarte al
          mundo del emprendedor y tienes grandes planes con tu consultorio,
          Software Healt FC te ayudará con la sistematización de historias
          clínicas, creación o mejora de tu sitio web.
        </p>
        <p>
          Puedes tener el diseño personalizado, y gestionar las las consultas,
          historias clínicas, reportes a secretaria de salud y otras
          funcionalidades que no te puedes perder.
        </p>
      </div>
    </div>
  );
};
