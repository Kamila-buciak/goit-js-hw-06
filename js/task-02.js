const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const items = [
  "Condiments",
  "Herbs",
  "Tomatos",
  "Garlic",
  "Mushrooms",

  "Potatoes",
];

items.forEach((item) => {
  const element = document.createElement("li");
  element.textContent = item;
  element.classList.add("item");
  list.prepend(element);
});
