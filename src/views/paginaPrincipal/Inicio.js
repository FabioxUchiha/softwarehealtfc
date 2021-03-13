import React from "react";
import { Link } from "react-router-dom";
import { OlaBottom } from "../../components/OlaBottom";
import logoPc from "../../img/facebook_cover_photo_2.png";
import logoMovil from "../../img/facebook_profile_image.png";

export const Inicio = () => {
  return (
    <section className="select-none" id="inicio">
      <div className="relative animate__animated animate__pulse animate__delay-2s animate__repeat-2">
        <img src={logoPc} className="sr-only sm:not-sr-only" alt="imagen" />
        <img src={logoMovil} className="sm:hidden" alt="imagen" />
        <OlaBottom />
      </div>
      <div className="flex justify-center">
        <Link className="" to="/dashboard">
          <button className="p-2 text-white bg-gray-400 outline-none rounded-xl hover:bg-gray-300 hover:text-gray-500 hover:shadow-inner focus:outline-none">
            vamos a comenzar
          </button>
        </Link>
      </div>
      <div className="container mx-auto mt-4 text-justify ">
        <h2 className="mb-4 text-2xl font-bold text-center lg:text-3xl">
          Tu puedes controlar la información de tu consultorio
        </h2>
        <p className="mb-3">
          ¡Software Healt FC está listo para ti! Tanto si acabas de lanzarte al
          mundo del emprendedor y tienes grandes planes con tu consultorio,
          Software Healt FC te ayudará con la sistematización de historias
          clínicas, creación o mejora de tu sitio web.
        </p>
        <p className="">
          Puedes tener el diseño personalizado, gestionar la agenda de citas,
          historias clínicas, reportes a secretaria de salud y otras
          funcionalidades que no te puedes perder.
        </p>
      </div>
    </section>
  );
};
