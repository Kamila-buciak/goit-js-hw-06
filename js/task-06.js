const input = document.querySelector("input#validation-input");
input.addEventListener("blur", (e) => {
  if (
    e.currentTarget.value.length ===
    parseInt(e.currentTarget.getAttribute("data-length"))
  ) {
    e.currentTarget.classList.add("valid");
    e.currentTarget.classList.remove("invalid");
  } else {
    e.currentTarget.classList.add("invalid");
    e.currentTarget.classList.remove("valid");
  }
});
