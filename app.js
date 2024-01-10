const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".info");
const showAbout = document.querySelector("#about");
const projects = document.querySelector("#projects");
const aboutButton = document.querySelector('#about-button');
const logo = document.querySelector('.logo');
const back = document.querySelector('.btn-back');

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
 
  projects.classList.toggle("active");
});

aboutButton.addEventListener('click', () => {
  projects.classList.toggle("active");
  showAbout.classList.toggle("active");
  logo.classList.toggle('active');
  back.classList.toggle('active');
})

back.addEventListener('click', () => {
  showAbout.classList.toggle('active');
  projects.classList.toggle("active");
  logo.classList.toggle('active');
  back.classList.toggle('active');
} )

const toggleHiddenElement = (domElement) => {
  if (domElement.style.display === 'none') {
    domElement.style.display = 'flex';
  } else {
    domElement.style.display = 'none';
  }
}

//aboutButton.addEventListener("click", () => {
//  toggleHiddenElement(background);
//})
