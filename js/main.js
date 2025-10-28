// Toggle language button placeholder 
document.getElementById("lang-toggle").addEventListener("click", function() {
  alert("Language switching feature coming soon!");
});

// Example of small animation on scroll or load
window.addEventListener("load", () => {
  document.querySelector(".hero-content").style.opacity = "1";
  document.querySelector(".hero-content").style.transition = "opacity 1s ease-in";
});


const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

const toggleBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});