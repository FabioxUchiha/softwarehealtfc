import React, { useState } from "react";
import enviarFormulario from "../../helpers/enviarFormContact";

const initialFormValue = {
  nombre: "",
  email: "",
  mensaje: "",
};

export const ContactForm = () => {
  const [formValue, setFormValue] = useState(initialFormValue);

  const handleChangesInput = (e) => {
    const changedInput = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(changedInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    enviarFormulario(e.target);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="text-center">
        <div className="grid grid-cols-1 gap-1 p-3 bg-gray-200 rounded-lg">
          <label for="nombre">Nombre:*</label>
          <input
            onChange={handleChangesInput}
            className="uppercase rounded-lg focus:outline-none focus:ring-2"
            name="nombre"
            id="nombre"
            type="text"
            placeholder="--tu nombre--"
          />
          <label for="email">Correo electrónico:*</label>
          <input
            onChange={handleChangesInput}
            className="lowercase rounded-lg focus:outline-none focus:ring-2"
            name="email"
            id="email"
            type="text"
            placeholder="--tucorreo@correo.com--"
          />
          <label for="mensaje">Mensaje</label>
          <textarea
            onChange={handleChangesInput}
            className="border rounded-lg focus:outline-none focus:ring-2"
            name="mensaje"
            id="mensaje"
            cols="30"
            rows="4"
          ></textarea>
          <button
            className="bg-white rounded-lg hover:bg-gray-400 hover:text-gray-50"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
