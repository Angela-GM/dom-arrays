// Cada botón debe tener un valor personalizado que se mostrará en un alert al hacer click en él.

// seleccionar todos los botones
const buttons = document.querySelectorAll("button");
console.log(buttons); //devuelve un array con todos los botones
// iteracion para recorrer el array de buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // mosrtar un alert para cada boton conel valor del texto del boton
    alert(e.target.textContent);
  });
});

// EJERCICIO 3
// Iteración 1
// crear array
const lista = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur"];
let intentos = 0; //declarar la variable intentos (sólo 3 intentos)
// Iteración 2
// Seleccionar div
const divHtml = document.getElementById("adivina-btn");
// iterar los datos del array
const generarBtn = () => {
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
    //   crear el boton y introducirlo en el div
    let newButton = document.createElement("button");
    newButton.textContent = `Adivina`;
    newButton.setAttribute("data-value", lista[i]); // almacenar el valor personalizado del botón
    divHtml.appendChild(newButton);

    // agregar evento de clic al botón creado
    newButton.addEventListener("click", (e) => {
      intentos++;
      console.log(intentos);
      const valorBoton = e.target.getAttribute("data-value");
      console.log(valorBoton);
      console.log(palabra);
      if (intentos < 3) {
        if (valorBoton === palabra) {
          alert(`Correcto!! este boton contiene la palabra ${valorBoton}`);
        } else {
          alert("Lo siento, no ha acertado");
        }
      } else {
        alert(
          "Lo siento ya ha agotado sus 3 intentos. Vuela a recargar la página para volver a jugar."
        );
      }
    });
  }
};

// llamar a la funcion
generarBtn();

// Iteraccion 4

const generateRandomItemArray = () => {
  const indexRandom = Math.floor(Math.random() * lista.length); //generar un indice aleatorio para seleccionar una palabra de forma aleatoria en el array lista
  const itemRandom = lista[indexRandom];
  return itemRandom;
};

console.log(generateRandomItemArray());

// Seleccionar el div donde debe imprimirse la palabra aleatoria
const divItemRandom = document.getElementById("item-random");

// funcion para imprimir la palabra aleatoria en el div
const printItemRandom = () => {
  const itemRandom = generateRandomItemArray();
  const newItem = document.createElement("p");
  newItem.textContent = `¿Cual es el boton con ${itemRandom}?`;
  divItemRandom.appendChild(newItem);
  return itemRandom;
};

const palabra = printItemRandom();
