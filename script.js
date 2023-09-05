const ativaClass = document.getElementById("titulo");
const inputs = document.getElementById("inputNunber");

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

let randoNuber = Math.round(Math.random() * 10);
let xAttempts = 1;

//functin callback

inputs.addEventListener("focus", focusHandler);
inputs.addEventListener("focusout", focusHandler);

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
function focusHandler() {
  ativaClass.classList.toggle("Ativaleds");
}
//Eventos

function buttonHandler(event) {
  event.preventDefault();

  if (Number(inputs.value) == randoNuber) {
    toggleScreen();

    screen2.querySelector(" .numeros ").innerText = `${xAttempts}`;
  }
  limitInput();
  inputs.value = "";
  xAttempts++;
}

function rendomResetClick() {
  toggleScreen();
  randoNuber = Math.round(Math.random() * 10);
  xAttempts = 1;
}

btn1.addEventListener("click", buttonHandler);
btn2.addEventListener("click", rendomResetClick);

function limitInput() {
  if (
    Number(inputs.value) < 0 ||
    Number(inputs.value) > 10 ||
    (!Number(inputs.value) && Number(inputs.value) != 0)
  ) {
    alert("So sera aceito numuros entre 0 e 10");
  }
}

/*Desafios
  Cria um limite no input entre 0 e 10 



*/
