document.addEventListener("DOMContentLoaded", () => {
  const peliculas = document.querySelectorAll(".pelicula");
  peliculas.forEach(p => p.style.cursor = "pointer");
  console.log("Pixel Cinema 2025 inicializado");
});
