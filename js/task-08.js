const form = document.querySelector(".login-form");
form.addEventListener("submit", submit);

function submit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields");
  }

  const data = {
    Email: email.value,
    Password: password.value,
  };
  console.log(data);
  event.currentTarget.reset();
}
form.addEventListener("submit", submit);
