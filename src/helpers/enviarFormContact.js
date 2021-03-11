const enviarFormulario = (value) => {
  // const mensaje = JSON.stringify(value);
  fetch("https://formsubmit.co/ajax/fcastellanos782@gmail.com", {
    method: "POST",
    body: new FormData(value),
  })
    .then((res) => {
      console.log(res);
    })
    .catch((res) => console.log(res));
};

export default enviarFormulario;
