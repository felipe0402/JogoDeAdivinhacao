const ativaClass = document.getElementById("titulo");
const inputs = document.getElementById("imput");

const screen = document.getElementsByClassName("screen1");
const scren2 = document.getElementsByClassName("screen2");

inputs.addEventListener("focus", focusHandler);
inputs.addEventListener("focusout", focusHandler);

function focusHandler() {
  ativaClass.classList.toggle("Ativaleds");
}

function buttonHandler(event) {
  event.preventDefault();
  screen.classList.toggle("hide");
  scren2.classList.toggle("hide");
}
