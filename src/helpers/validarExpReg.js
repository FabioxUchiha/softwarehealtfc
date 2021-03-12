export const validarNombre = (value) => {
  const patronNombre = /^([a-zñáéíóúA-ZÁÉÍÓÚ]+[\s]*)+$/;
  return patronNombre.test(value) ? false : true;
};

export const validarEmail = (value) => {
  const patronEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return patronEmail.test(value) ? false : true;
};
