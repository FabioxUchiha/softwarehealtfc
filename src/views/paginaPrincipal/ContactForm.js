import React, { useEffect, useState } from "react";
import sendForm from "../../helpers/enviarFormContact";
import { validarEmail, validarNombre } from "../../helpers/validarExpReg";

const initialFormValue = {
  nombre: "",
  email: "",
  mensaje: "",
};

export const ContactForm = () => {
  const [formValue, setFormValue] = useState(initialFormValue);
  const [errorNombre, setErrorNombre] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  useEffect(() => {
    formValue.nombre !== "" && setErrorNombre(validarNombre(formValue.nombre));
    formValue.email !== "" && setErrorEmail(validarEmail(formValue.email));
  }, [formValue]);

  const handleChangesInput = (e) => {
    const changedInput = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(changedInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errorNombre === true || errorEmail === true) {
    } else {
      setErrorNombre(false);
      setErrorEmail(false);
      sendForm(e.target);
      setFormValue(initialFormValue);
    }
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
            value={formValue.nombre}
          />
          {errorNombre && (
            <p className="text-red-500">Ingrese un nombre valido</p>
          )}
          <label for="email">Correo electrónico:*</label>
          <input
            onChange={handleChangesInput}
            className="lowercase rounded-lg focus:outline-none focus:ring-2"
            name="email"
            id="email"
            type="text"
            placeholder="--tucorreo@correo.com--"
            value={formValue.email}
          />
          {errorEmail && (
            <p className="text-red-500">Ingrese un email valido</p>
          )}
          <label for="mensaje">Mensaje</label>
          <textarea
            onChange={handleChangesInput}
            className="border rounded-lg focus:outline-none focus:ring-2"
            name="mensaje"
            id="mensaje"
            cols="30"
            rows="4"
            value={formValue.mensaje}
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
