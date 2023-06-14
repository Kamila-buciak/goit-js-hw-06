const text = document.querySelector("#text");
const input = document.querySelector("#font-size-control");

function newFontSize() {
  text.style.fontSize = `${input.value}px`;
}

input.addEventListener("input", newFontSize);
