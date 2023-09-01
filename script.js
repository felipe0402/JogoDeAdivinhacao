const ativaClass = document.getElementById("titulo");
let inputs = document.getElementById("inputNunber");

const ramdoNuber = Math.round(Math.random() * 10);
let xAttempts = 1;

inputs.addEventListener("focus", focusHandler);
inputs.addEventListener("focusout", focusHandler);

function focusHandler() {
  ativaClass.classList.toggle("Ativaleds");
}

function buttonHandler(event) {
  event.preventDefault();

  if (Number(inputs.value) == ramdoNuber) {
    document.querySelector(".screen1").classList.add("hide");
    document.querySelector(".screen2").classList.remove("hide");

    document.querySelector(".screen2 .numeros ").innerText = `${xAttempts}`;
  }
  xAttempts++;
}
