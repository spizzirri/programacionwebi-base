const REGEX_LETTERS = /^[A-Za-z]+$/i;
const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ERROR_MESSAGE = {
  name: {
    empty: "El nombre es requerido",
    noValid: "El nombre debe contener solamente letras",
  },
  email: {
    empty: "El email es requerido",
    noValid: "Ingrese un formato valido",
  },
};

const submitBtn = document.querySelector(".js-submit-btn");
submitBtn.addEventListener("click", validate);

function validate(event) {
  event.preventDefault();

  const inputName = document.querySelector("#name");
  const inputEmail = document.querySelector("#email");
  const errorMsg = document.querySelector(".field-name .help");
  const errorEmailMsg = document.querySelector(".field-email .help");

  if (inputName.value === "") {
    inputName.classList.add("is-danger");
    errorMsg.classList.remove("is-hidden");
    errorMsg.textContent = ERROR_MESSAGE.name.empty;
    inputName.focus();
  } else {
    inputName.classList.remove("is-danger");
    errorMsg.classList.add("is-hidden");
  }

  if (inputEmail.value === "") {
    inputEmail.classList.add("is-danger");
    errorEmailMsg.classList.remove("is-hidden");
    errorEmailMsg.textContent = ERROR_MESSAGE.email.empty;
    inputEmail.focus();
  }

  if (!letterValidate(inputName.value)) {
    errorMsg.classList.remove("is-hidden");
    inputName.classList.add("is-danger");
    errorMsg.textContent = `${ERROR_MESSAGE.name.noValid} ${ERROR_MESSAGE.name.empty}`;
    inputName.focus();
  }

  if (!emailValidate(inputEmail.value)) {
    errorEmailMsg.classList.remove("is-hidden");
    errorEmailMsg.textContent = ERROR_MESSAGE.email.noValid;
  } else {
    inputEmail.classList.remove("is-danger");
    errorEmailMsg.classList.add("is-hidden");
  }
}

function letterValidate(text) {
  return REGEX_LETTERS.test(text);
}

function emailValidate(email) {
  return REGEX_EMAIL.test(email);
}
