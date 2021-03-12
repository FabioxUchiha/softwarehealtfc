export const validarNombre = (value) => {
  const patronNombre = /^([a-zñáéíóúA-ZÁÉÍÓÚ]+[\s]*)+$/;
  return patronNombre.test(value) ? false : true;
};

export const validarEmail = (value) => {
  const patronEmail = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/;
  return patronEmail.test(value) ? false : true;
};
