const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".info");

const background = document.querySelector("#about");

const projects = document.querySelector("#projects");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  background.classList.toggle("active");
  projects.classList.toggle("active");
});
