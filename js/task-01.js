const elements = document.querySelectorAll(".item");
console.log(`Number of categories:${elements.length}`);

elements.forEach((element) => {
  const categoryName = element.querySelector("h2");
  const categoryEl = element.querySelectorAll("li");
  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${categoryEl.length}`);
});
