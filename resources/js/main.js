document.addEventListener("DOMContentLoaded", () => {
    const hamMenu = document.getElementById("ham-menu");
    const navBar = document.getElementById("nav-bar");
  
    hamMenu.addEventListener("click", () => {
      navBar.classList.toggle("show");
    });
  });
  