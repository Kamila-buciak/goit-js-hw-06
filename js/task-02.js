const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let list = document.querySelector("#ingredients");
let items = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let nodes = items.map((lang) => {
  let li = document.createElement("li");
  li.textContent = lang;
  return li;
});

list.append(...nodes);
