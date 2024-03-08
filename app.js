let pos0 = {
  x: 0,
  y: 0,
};
let pos1 = {
  x: window.innerWidth - 124,
  y: 0,
};
const visibilityDuration = 1000; // Duración de la invisibilidad en milisegundos

const makePlayerInvisible = function (player) {
  player.style.visibility = "hidden"; // Oculta el jugador estableciendo la propiedad de visibilidad a 'hidden'
};

const makePlayerVisible = function (player) {
  player.style.visibility = "visible"; // Restaura la visibilidad del jugador estableciendo la propiedad de visibilidad a 'visible'
};
const checkCollision = function () {
  const rect1 = player1.getBoundingClientRect();
  const rect2 = player2.getBoundingClientRect();

  if (
    rect1.left < rect2.right &&
    rect1.right > rect2.left &&
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top
  ) {
    alert("¡Colisión detectada!");
  }
};

let speed = 100;
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");

const keyCallback1 = function (event) {
  switch (event.code) {
    case "KeyD":
      pos0.x = pos0.x + speed;
      break;
    case "KeyA":
      pos0.x = pos0.x - speed;
      break;
    case "KeyW":
      pos0.y = pos0.y + speed;
      break;
    case "KeyS":
      pos0.y = pos0.y - speed;
      break;
    case "KeyQ": // Tecla para hacer invisible al jugador 1
      makePlayerInvisible(player1); // Hace invisible al jugador 1
      setTimeout(() => makePlayerVisible(player1), visibilityDuration); // Restaura la visibilidad después de 'visibilityDuration' milisegundos
      break;
  }
  player1.style.left = pos0.x + "px";
  player1.style.bottom = pos0.y + "px";

  keyCallback2(event);
};

const keyCallback2 = function (event) {
  switch (event.code) {
    case "ArrowRight":
      pos1.x = pos1.x + speed;
      break;
    case "ArrowLeft":
      pos1.x = pos1.x - speed;
      break;
    case "ArrowUp":
      pos1.y = pos1.y + speed;
      break;
    case "ArrowDown":
      pos1.y = pos1.y - speed;
      break;
    case "KeyL": // Tecla para hacer invisible al jugador 2
      makePlayerInvisible(player2); // Hace invisible al jugador 2
      setTimeout(() => makePlayerVisible(player2), visibilityDuration); // Restaura la visibilidad después de 'visibilityDuration' milisegundos
      break;
  }
  player2.style.left = pos1.x + "px";
  player2.style.bottom = pos1.y + "px";
  checkCollision();
};

document.addEventListener("keydown", keyCallback1);
keyCallback1({});
let gravity = 5; // Velocidad de la gravedad
const applyGravity = function () {
  if (pos0.y > 0) {
    // Verifica que el jugador 1 no esté en el suelo
    pos0.y = Math.max(0, pos0.y - gravity); // Aplica la gravedad reduciendo la posición vertical
    player1.style.bottom = pos0.y + "px"; // Actualiza la posición del jugador en la pantalla
  }

  if (pos1.y > 0) {
    // Verifica que el jugador 2 no esté en el suelo
    pos1.y = Math.max(0, pos1.y - gravity); // Aplica la gravedad reduciendo la posición vertical
    player2.style.bottom = pos1.y + "px"; // Actualiza la posición del jugador en la pantalla
  }
};

// Llama a la función applyGravity() en un intervalo regular para simular la gravedad
setInterval(applyGravity, 100); // Ajusta el intervalo según sea necesario
