// Añade un callback al evento window.onload que haga lo siguiente:

// Recoger la posición del sprite
// Evaluar mediante la propiedad which de un evento la tecla pulsada. Estableceremos un reconocimiento de las 4 flechas de dirección. El avance será de 10 px en la dirección de la flecha.
// Establecer los límites del movimiento para que no se salga de la pantalla.
// Asignar los valores x e y a las propiedades left y top, respectivamente del sprite.

window.onload = function () {
  const rocket = document.getElementById("rocket");
  let x = 0;
  let y = 0;

  document.addEventListener("keydown", function (event) {
    const key = event.which;
    const rocketWidth = rocket.offsetWidth;
    const rocketHeight = rocket.offsetHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    switch (key) {
      case 37: // Left arrow key
        x -= 10;
        if (x < 0) x = 0;
        break;
      case 38: // Up arrow key
        y -= 10;
        if (y < 0) y = 0;
        break;
      case 39: // Right arrow key
        x += 10;
        if (x > screenWidth - rocketWidth) x = screenWidth - rocketWidth;
        break;
      case 40: // Down arrow key
        y += 10;
        if (y > screenHeight - rocketHeight) y = screenHeight - rocketHeight;
        break;
    }

    rocket.style.left = x + "px";
    rocket.style.top = y + "px";
  });
};
