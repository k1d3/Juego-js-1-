import { asesino, mago, tanque, boss } from "./personajes.js";

/*----------------crear el usuario-----------------*/
let salida = true;
while (salida) {
  var nombre = prompt("Ingrese su nombre: ");
  let confirmar = confirm(`${nombre} es el nombre ingresado, es correcto?`);

  if (confirmar) {
    alert(`Bienvenido ${nombre}`);
    salida = false;
    break;
  } else {
    alert("Ingrese nuevamente el su nombre de usuario");
  }
}
/*----------------seleccionar pj-----------------*/
let salir = true;
while (salir) {
  var personaje = {};
  personaje = prompt(`Seleccione el pj para la batalla:
    1 - Asesisno
    2 - Tanque
    3 - Mago
    `).toLocaleLowerCase();

  if (personaje === "1" || personaje === "asesino") {
    personaje = asesino;
    var personaje = new asesino(50, 300, 10, 20, 3.5);
    salir = false;
  } else if (personaje === "2" || personaje === "tanque") {
    personaje = tanque;
    var personaje = new tanque(10, 500, 7, 5, 15);
    salir = false;
  } else if (personaje === "3" || personaje === "mago") {
    personaje = mago;
    var personaje = new mago(30, 400, 15, 15, 4.3);
    salir = false;
  } else alert("el valor ingresado es incorrecto, Intente nuevamente.");
}
alert(
  `${nombre.toUpperCase()} la pelea contra el Boss esta por comenzar abre tu consola y disfruta.`
);

/*let elfo;
let humano;
let enano;
switch (personaje) {
  case "asesino":
    elfo = new asesino(50, 700, 10, 20, 3.5);
    break;
  case "tanque":
    humano = new tanque(10, 1100, 7, 5, 15);
    break;
  case "mago":
    enano = new mago(30, 850, 15, 15, 4.3);
    break;
}*/

const jefe = new boss(30, 500, 6, 7, 8);

const pelea = setInterval(function atacking() {
  personaje.atacar(jefe);

  if (jefe.hp <= 0) {
    console.log(`Has ganado la batalla`);
    clearInterval(pelea);
    return;
  }
  jefe.atacar(personaje);

  if (personaje.hp <= 0) {
    console.log(`Has perdidola batalla`);
    clearInterval(pelea);
    return;
  }
}, 1000);
