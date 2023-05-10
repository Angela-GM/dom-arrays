// Ejercicio 5: EJERCICIO CALCULADORA
// Hacer una calculadora que haga uso de los operadores aritméticos: +, -, *, /, los evalúe mediante un if y guarde la información en una variable que será impresa en un campo de texto.

// Controlar, mediante la expresión isNaN(numero) si los números introducidos son o no numéricos (mostrar un alert en caso que no lo sean)

// Iteración 2:
// Añadir el evento onclick al botón de 'Calcular'
//seleccionar elementos del DOM
const inputNum1 = parseInt(document.querySelector("#num1").value);
const inputNum2 = parseInt(document.querySelector("#num2").value);
const operatorSelected = document.querySelector("#operator");
const inputResult = document.querySelector("#result");
const btnCalcular = document.querySelector("button");

console.log(operatorSelected.value);

// Funcion para calcular
const startCalc = () => {
  //seleccionar elementos del DOM
  const inputNum1 = parseInt(document.querySelector("#num1").value);
  const inputNum2 = parseInt(document.querySelector("#num2").value);
  if (operatorSelected.value === "+") {
    inputResult.value = inputNum1 + inputNum2;
    console.log(operatorSelected.value);
  } else if (operatorSelected.value === "-") {
    inputResult.value = inputNum1 - inputNum2;
  } else if (operatorSelected.value === "*") {
    inputResult.value = inputNum1 * inputNum2;
  } else if (operatorSelected.value === "/") {
    inputResult.value = inputNum1 / inputNum2;
  } else {
    alert("Debe seleccionar un operador");
  }
};

// Evento boton calcular
btnCalcular.addEventListener("click", function (event) {
  event.preventDefault();
  startCalc();
});
