// El primer botón debe poner en modo lectura la sección:
// Pone el fondo de la sección a negro (o gris oscuro)
// El texto a blanco (o verde)
// Oculta las imágenes
// El segundo botón debe poner a modo normal la sección

// Seleccionar la section
const sectionHtml = document.querySelector("section");

// seleccionar botones
const modoLectura = document.getElementById("lecturaId");
const modoNormal = document.getElementById("normalId");

// funcion para activar el modo lectura
const activarModoLectura = () => {
  sectionHtml.classList.add("lectura");
};
// Funcion para activar modo normal
const activarModoNormal = () => {
  sectionHtml.classList.remove("lectura");
};

// Eventos
// clicar al boton de modo lectura
modoLectura.addEventListener(
  "click",
  () => {
    activarModoLectura();
  },
  false
);

modoNormal.addEventListener(
  "click",
  () => {
    activarModoNormal();
  },
  false
);
