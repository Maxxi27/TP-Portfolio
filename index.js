const nav = document.getElementById("nav-bar");
const inicioSection = document.getElementById("Inicio");
const menuToggle = document.getElementById("menu-toggle");
window.addEventListener("scroll", () => {
  const posicionInicio = inicioSection.offsetTop + inicioSection.offsetHeight;
  if (window.scrollY >= posicionInicio) {
    nav.classList.remove("hidden");
  } else {
    nav.classList.add("hidden");
  }
});
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});
