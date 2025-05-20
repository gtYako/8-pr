let root = document.querySelector(":root");
let button = document.querySelector("#themeToggle");

button.addEventListener("click", (e) => {
  e.preventDefault();
  root.classList.toggle("dark");
  if (button.textContent === "Перейти на тёмную тему") {
    button.textContent = "Перейти на светлую тему";
  } else {
    button.textContent = "Перейти на тёмную тему";
  }
});