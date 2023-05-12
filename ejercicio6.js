// Ejercicio 6: Imágenes
// Iteración 1.
// Crear un array con cuatro o cinco nombres de imagenes (nombreImagen.jpg)

const imagesArray = [
  "imagen01.jpg",
  "imagen02.jpg",
  "imagen03.jpg",
  "imagen04.jpg",
  "imagen05.jpg",
];

// Iteración 2.
// Al cargar la página recorrer el array y construir tantas etiquetas <img> como elementos tenga el array

// SELECCIONAR ELEMENTOS DEL DOM
const divHtml = document.getElementById("images-container");

// Funcion para recorrer el array
const createImages = () => {
  imagesArray.map((image) => {
    const imageHtml = document.createElement("img");
    divHtml.appendChild(imageHtml);
    imageHtml.src = `./images/${image}`;
    imageHtml.alt = image;
    imageHtml.classList = "ejercicio6";

    // Iteracion 3
    imageHtml.addEventListener("click", () => {
      alert(imageHtml.alt);
    });
  });
};

createImages();

// Iteración 3.
// Una vez hemos trasladado las imagenes al documento, activar un listener para todas ellas de forma que se ejecute una función que muestre un alert con el nombre de la imagen (su atributo src)

// Iteración 4.
// Si incorporamos o borramos imagenes del array inicial el ejercicio debe seguir funcionando perfectamente
