class base {
  constructor(critico, hp, ataque, dex, def) {
    this.critico = critico;
    this.hp = hp;
    this.ataque = ataque;
    this.dex = dex;
    this.def = def;
  }
  atacar(atkk) {
    atkk.miss(this.dex) >= 98
      ? console.log(`${this.nombre} Ha fallado el golpe`)
      : atkk.DañoCritico(this.critico);
  }
  DañoCritico(critico) {
    const Dcritico =
      Math.round(Math.round() * (100 - critico) + critico) >= 95
        ? this.ataque * 3 - this.def * 0.5
        : this.ataque - this.def * 0.5;
    this.hp -= Dcritico;
  }
  miss(dex) {
    Math.round(Math.round() * (100 - dex) + dex);
  }
}
class asesino extends base {
  constructor(critico, hp, ataque, dex, def) {
    super(critico, hp, ataque, dex, def);
  }
}
/*let asesino = {
  dex: 20,
  criticalrate: 50,
  vel: 9,
  atk: 10,
  atkm: 0,
  hp: 700,
  mp: 5,
  def: 3.5,
};*/
class tanque extends base {
  constructor(critico, hp, ataque, dex, def) {
    super(critico, hp, ataque, dex, def);
  }
}
/*let tanque = {
  dex: 5,
  vel: 4,
  criticalrate: 10,
  atk: 7,
  atkm: 0,
  hp: 1500,
  mp: 6,
  def: 10,
};*/
class mago extends base {
  constructor(critico, hp, ataque, dex, def) {
    super(critico, hp, ataque, dex, def);
  }
}
/*let mago = {
  dex: 15,
  vel: 6.5,
  criticalrate: 30,
  atk: 0,
  atkm: 15,
  hp: 850,
  mp: 10,
  def: 4.3,
};*/
class boss extends base {
  constructor(critico, hp, ataque, dex, def) {
    super(critico, hp, ataque, dex, def);
  }
}
/*let boss = {
  dex: 7,
  vel: 6,
  criticalrate: 30,
  atk: 8,
  atkm: 6,
  hp: 1500,
  mp: 10,
  def: 8,
};*/

/*----------------crear el usuario-----------------*/
let salida = true;
while (salida) {
  var nombre = prompt("Ingrese su nombre: ");
  let confirmar = prompt(
    `${nombre} es el nombre ingresado, es correcto? Y / N`
  ).toLocaleLowerCase();
  if (confirmar === "y") {
    alert(`Bienvenido ${nombre}`);
    salida = false;
    break;
  } else if (confirm === "n") {
    alert("Ingrese nuevamente el su nombre de usuario");
  } else alert("El valor ingresado no es valido");
}
/*----------------seleccionar pj-----------------*/
let salir = true;
while (salir) {
  var personaje = prompt(`Seleccione el pj para la batalla:
    1 - Asesisno
    2 - Tanque
    3 - Mago
    `).toLocaleLowerCase();
  if (personaje === "1" || personaje === "asesino") {
    personaje = "asesino";

    break;
  } else if (personaje === "2" || personaje === "tanque") {
    personaje = "tanque";
    break;
  } else if (personaje === "3" || personaje === "mago") {
    personaje = "mago";
    break;
  } else alert("el valor ingresado es incorrecto, Intente nuevamente.");
}
alert(
  `${nombre} la pelea contra el Boss esta por comenzar abre tu consola y disfruta.`
);
let elfo;
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
}

const jefe = new boss(30, 1500, 6, 7, 8);
