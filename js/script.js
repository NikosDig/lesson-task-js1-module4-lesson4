// When the input values change, validate the values and enable the button if all values are valid.
// Once the form is submitted display a message to the user that form was submitted.
// const form = document.querySelector("form");
// const firstName = document.querySelector("#firstName");
// const lastName = document.querySelector("#lastName");
// const email = document.querySelector("#email");
// const button = document.querySelector("button");
// const message = document.querySelector("#message");

// firstName.addEventListener("change", enableSubmit);
// lastName.addEventListener("change", enableSubmit);

// function firstNameValidation() {
//   if (firstName.value.trim().length > 2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function lastNameValidation() {
//   if (lastName.value.trim().length > 4) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function enableSubmit() {
//   if (
//     firstName.value.trim().length > 0 &&
//     lastName.value.trim().length > 4 &&
//     emailValidation(email.value)
//   ) {
//     button.disabled = false;
//   }
// }

// form.onsubmit = function () {
//   preventDefault();
// };
// form.addEventListener("submit", enableSubmit);
// function enableSubmit() {
//   if (firstName.value.trim().length > 0 && lastName.value.trim().length > 3) {
//     button.removeAttribute("disabled");
//   }
// }

// function emailValidation(email) {
//   const regEx = /\S+@\S+\.\S+/;
//   const patternMatches = regEx.test(email);
//   return patternMatches;
// }

const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const button = document.querySelector("button");

function checkIfButtonIsDisabled() {
  // if all inputs pass validation enable the button
  if (
    checkLength(firstName.value, 1) &&
    checkLength(lastName.value, 4) &&
    validateEmail(email.value)
  ) {
    button.disabled = false;
  } else {
    // clear the message
    message.innerHTML = "";
    // disable button
    button.disabled = true;
  }
}

// call the same function for each input's keyup event
firstName.addEventListener("keyup", checkIfButtonIsDisabled);
lastName.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);

// function to run when the form is submitted
function submitForm(event) {
  event.preventDefault();
  // display a message once the form has been submitted
  message.innerHTML = '<div class="message">Your message has been sent</div>';
  // clear all input values
  form.reset();
}

form.addEventListener("submit", submitForm);

// function to check if the length of the input value is valid
function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
