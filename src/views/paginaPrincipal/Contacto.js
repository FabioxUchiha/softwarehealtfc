import React from "react";
import { ContactForm } from "./ContactForm";

export const Contacto = () => {
  return (
    <section id="contacto" className="container mx-auto mb-3">
      <h2 className="mb-4 text-2xl font-bold text-center lg:text-3xl">
        Contacto
      </h2>
      <p className="text-justify">
        Hablemos 👋. No dudes en ponerte en contacto con nosotros mediante la
        información de contacto a continuación, o envíanos un mensaje mediante
        el formulario.
      </p>
      <div className="grid mt-3 sm:grid-cols-2">
        <div className="mx-auto sm:col-span-1 sm:mx-auto">
          <h2 className="mb-4 text-2xl font-bold text-center lg:text-3xl">
            Ponte en contacto
          </h2>
          <p>
            <ul>
              <li>Calle Ejemplo, 1</li>
              <li>Ciudad, 10100 Bogotá</li>
              <li>fcastellanos782@gmail.com</li>
              <li>+57 314 332 5474</li>
            </ul>
          </p>
        </div>
        <div className="mx-auto sm:col-span-1 sm:mx-auto">
          <h2 className="mb-4 text-2xl font-bold text-center lg:text-3xl">
            Envíanos un mensaje
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
