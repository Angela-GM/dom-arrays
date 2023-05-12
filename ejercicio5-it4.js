// Iteración 4:
// Repetir el ejercicio de la calculadora pero utilizando la función eval() para realizar los cálculos en lugar de if

// Permitir la introducción de números decimales:

// Utilizar campos de input de tipo texto
// Utilizar parseFloat() en vez de parseInt()

//seleccionar elementos del DOM
// const inputNum1 = parseInt(document.querySelector("#num1").value);
// const inputNum2 = parseInt(document.querySelector("#num2").value);
const operatorSelected = document.querySelector("#operator");
const inputResult = document.querySelector("#result");
const btnCalcular = document.querySelector("button");

// Nueva funcion para calcular

const startCalc = () => {
  //seleccionar elementos del DOM
  const inputNum1 = parseFloat(document.querySelector("#num1").value);
  const inputNum2 = parseFloat(document.querySelector("#num2").value);

  inputResult.value = eval(inputNum1 + operatorSelected.value + inputNum2);
  console.log(inputResult.value);
};

// Evento boton calcular
btnCalcular.addEventListener("click", function (event) {
  event.preventDefault();
  startCalc();
});
