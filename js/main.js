const player = document.getElementById("player");
let ejeX = 0;
let ejeY = 0;

const derecha = () => {

  ejeX += 50;
  player.style.transform = `translate(${ejeX}px, ${ejeY}px)`;

}

const izquierda = () => {

  ejeX -= 50;
  player.style.transform = `translate(${ejeX}px, ${ejeY}px))`;

}

const arriba = () => {

  ejeY -= 50;
  player.style.transform = `translate(${ejeX}px, ${ejeY}px)`;

}

const abajo = () => {

  ejeY += 50;
  player.style.transform = `translate(${ejeX}px, ${ejeY}px)`;

}

document.addEventListener("keypress", (e) => {

  if (e.key == "d") {

    derecha();

  } else if (e.key == "a") {

    izquierda();

  } else if (e.key == "w") {

    arriba();

  } else if (e.key == "s") {

    abajo();

  }

});
