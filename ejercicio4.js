// Ejercicio 4:
// Dado el siguiente formulario, si el dato de entrada es la palabra “Barcelona” (independientemente de si está escrito con mayúsculas o minúsculas) en el segundo cuadro de texto debe aparecer el texto: “Estás en Barcelona”. En caso contrario aparecerá el texto: “No estás en Barcelona”.

// Seleccionar elementos del DOM
const inputDonde = document.getElementById("input-donde");
const buttonCheckCity = document.getElementById("btn-chek-city");
const inputMsg = document.getElementById("input-msg");

// Funcion para chekear el input
const chekInBcn = () => {
  // Comprobar valores de las variables
  //   console.log(inputDonde.value);
  //   console.log(inputMsg.value);
  const inputValue = inputDonde.value.toLowerCase();
  if (inputValue === "barcelona") {
    inputMsg.value = "Estás en Barcelona";
  } else {
    inputMsg.value = "No está en Barcelona";
  }
  console.log(inputMsg.value);
};

// Llamar a la funcion
buttonCheckCity.addEventListener("click", function (event) {
  event.preventDefault();
  chekInBcn();
});
