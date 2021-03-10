import React from "react";

import foto from "../../img/nosotros.jpg";

export const Acercade = () => {
  return (
    <section id="acercade">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="flex col-span-12 sm:col-span-5">
            <img className="mx-auto rounded-full" src={foto} alt="foto" />
          </div>
          <div className="col-span-12 mx-auto sm:p-5 sm:col-span-7">
            <h2 className="mb-4 text-2xl font-bold text-center lg:text-3xl">
              Acerca de nosotros
            </h2>
            <p className="mb-3 text-justify">
              Somos una empresa dedicada al desarrollo de soluciones
              informáticas para los consultorios y clínicas odontológicas,
              mediante el uso de software para sistematizar desde el ingreso de
              los pacientes hasta el reporte de cada informe que se debe hacer a
              secretaria de salud según los estándares de calidad.
            </p>
            <p className="mb-3 text-justify">
              Somos una sociedad conformada por: <br />- Fabio Castellanos:
              Ingeniero de Sistemas y Computación. <br />- Claudia Marín:
              Odontóloga general, especialista en Periodoncia, Gerencia y
              Auditoria de la Calidad en Salud.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
