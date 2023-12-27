const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".info");
const background = document.querySelector("#about");
const projects = document.querySelector("#projects");
const aboutButton = document.querySelector('#about-button');

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  background.classList.toggle("active");
  projects.classList.toggle("active");
});

const toggleHiddenElement = (domElement) => {
  if (domElement.style.display === 'none') {
    domElement.style.display = 'flex';
  } else {
    domElement.style.display = 'none';
  }
}

aboutButton.addEventListener("click", () => {
  toggleHiddenElement(background);
})