const enviarFormulario = (e) => {
  e.preventDefault();
  e.stopPropagation();
  // console.log(e.target.value);
  // fetch("https://formsubmit.co/fcastellanos782@gmail.com", {
  //   method: "POST",
  //   // body: new FormData(e.target),
  // }).then((res) => {
  //   res.ok ? res.json() : Promise.reject(res);
  // });
};

export default enviarFormulario;
