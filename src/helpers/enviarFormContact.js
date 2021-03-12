const sendForm = (value) => {
  fetch("https://formsubmit.co/ajax/fcastellanos782@gmail.com", {
    method: "POST",
    body: new FormData(value),
  })
    .then((res) => {})
    .catch((res) => console.log(res));
};

export default sendForm;
