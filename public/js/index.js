function sleep(time = 1000) {
  return new Promise((res) => {
    setTimeout(() => {
      res(true)
    }, time)
  },)
}

document.addEventListener("DOMContentLoaded", () => {
  $("#phone").mask("(00) 0 00000-0000");

  $.validator.addMethod(
    "telefoneValido",
    function (value) {
      return value.length >= 17;
    },
    "Telefone deve ter no mínimo 17 caracteres."
  );

  $("#lead-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      phone: {
        required: true,
        telefoneValido: true,
      },
      email: {
        email: true,
        required: true,
      },
    },
    messages: {
      name: {
        required: "Por favor, informe seu nome.",
        minlength: "Nome deve ter no mínimo 3 caracteres.",
      },
      phone: {
        required: "Por favor, informe um telefone válido.",
        telefoneValido: "Por favor, informe um telefone válido.",
      },
      email: {
        email: "Por favor, informe um e-mail válido.",
        required: "Por favor, informe um e-mail válido.",
      },
    },
    submitHandler: function (form, event) {
      event.preventDefault();
      const { name, lastName, email, description } = $(form).serializeArray().reduce((acc, cur) => {
        const { name, value } = cur
        return {
            ...acc,
            [name]: value
        }
      },{})
      $(form).addClass('is--loading')
      sendEmail({ name, lastName, email, description })
      .then(() => {
          $(form).removeClass('is--loading')
          $(form).addClass('is--success')
          alert('Envio de email não implementado')
        })
    },
  });
});

async function sendEmail({ name, lastName, email, description}) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  await sleep(3000)
  return true
  // return fetch("http://localhost:3000/api/send-email", {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: JSON.stringify({ name, lastName, email, description}),
  //   mode: 'cors'
  // })
  // .then(response => response.text())
  // .then(result => console.log(result))
  // .catch(error => console.log('error', error));
}