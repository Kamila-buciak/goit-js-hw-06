const textInput = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

textInput.addEventListener("input", (event) => {
  if (textInput != "") {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = " Anonymous";
  }
});

textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value === "") {
    output.textContent = " Anonymous";
  }
});
