import React from "react";

export const ContactForm = () => {
  return (
    <div>
      <form className="text-center">
        <div className="grid grid-cols-1 gap-1 p-3 bg-gray-200 rounded-lg">
          <label for="nombre">Nombre:*</label>
          <input
            className="uppercase rounded-full"
            name="nombre"
            id="nombre"
            type="text"
            placeholder="--pepito perez--"
          />
          <label for="email">Correo electrónico:*</label>
          <input
            className="lowercase rounded-full"
            name="email"
            id="email"
            type="text"
            placeholder="--pepitoperez@correo.com--"
          />
          <label for="mensaje">Mensaje</label>
          <textarea
            className="border rounded-md"
            name="mensaje"
            id="mensaje"
            name="mensaje"
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-white rounded-lg" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
