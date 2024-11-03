function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");

const createBtn = document.querySelector("button[data-create]");

const destroyBtn = document.querySelector("button[data-destroy]");

const box = document.querySelector("#boxes");

let boxSize = 30;

createBtn.addEventListener("click", createMarkup);
destroyBtn.addEventListener("click", destroyBoxes);

function createMarkup() {
  if (+input.value < 1 || +input.value > 100) {
    box.innerHTML = "";
    input.value = "";
    return alert("enter a number from 1 to 100!");
  }
  
  createBoxes(+input.value);
}

function createBoxes(amount) {
  box.innerHTML = "";
  boxSize = 30;
  input.value = "";

  const arr = [];

  for (let i = 0; i < amount; i++) {
    const Boxes = document.createElement("div");
    Boxes.style.width = `${boxSize}px`;
    Boxes.style.height = `${boxSize}px`;
    Boxes.style.backgroundColor = getRandomHexColor();

    arr.push(Boxes);

    boxSize += 10;
  }

  box.append(...arr);
  
}

function destroyBoxes() {
  box.innerHTML = "";
  boxSize = 30;
  input.value = "";
}

