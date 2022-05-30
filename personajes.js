class base {
  constructor(critico, hp, ataque, dex, def) {
    this.critico = critico;
    this.hp = hp;
    this.ataque = ataque;
    this.dex = dex;
    this.def = def;
  }
  atacar(atkk) {
    const misss = atkk.miss(atkk.dex);
    console.log(misss);
    if (misss >= 85) {
      console.log(`${this.nombre} ha fallado el golpe`);
    } else {
      const golpe = this.DañoCritico(this.critico);
      //console.log(`${this.nombre} ha sacado ${Dcritico} como prob de critico`);
      var conCritico = 0;
      var sinCritico = 0;
      if (golpe >= 85) {
        conCritico = this.ataque * 3;
        atkk.hp -= conCritico;
      } else {
        sinCritico = this.ataque;
        atkk.hp -= sinCritico;
      }
      //atkk.hp -= conCritico -sinCritico- atkk.def * 0.5;
      console.log(" _______________________________________________________");
      console.log(
        `    La vida del ${atkk.nombre} a bajado a: ${atkk.hp}            `
      );
      console.log("  ______________________________________________________");
    }
  }
  DañoCritico(critico) {
    return Math.round(Math.random() * (100 - critico) + critico);

    // ? this.ataque * 300
    //  : this.ataque;
    //console.log(`${this.nombre} ha sacado ${Dcritico} como prob de critico`);
    //atkk.hp -= Dcritico - atkk.def * 0.5;
  }
  miss(dex) {
    return Math.round(Math.random() * (100 - dex) + dex);
  }
}

export class asesino extends base {
  constructor(critico, hp, ataque, dex, def) {
    super(critico, hp, ataque, dex, def);
    this.nombre = "Asesino";
  }
}
export class tanque extends base {
  constructor(critico, hp, ataque, dex, def) {
    super(critico, hp, ataque, dex, def);
  }
}

export class mago extends base {
  constructor(critico, hp, ataque, dex, def) {
    super(critico, hp, ataque, dex, def);
  }
}

export class boss extends base {
  constructor(critico, hp, ataque, dex, def) {
    super(critico, hp, ataque, dex, def);
    this.nombre = "Boss";
  }
}

/*export const jefe = new boss(20, 600, 40, 20, 10);
const elf = new asesino(50, 300, 60, 45, 3.5);
const pelea = setInterval(function atacking() {
  elf.atacar(jefe);

  if (jefe.hp <= 0) {
    console.log(`Has ganado la batalla`);
    clearInterval(pelea);
    return;
  }
  jefe.atacar(elf);

  if (elf.hp <= 0) {
    console.log(`Has perdidola batalla`);
    clearInterval(pelea);
    return;
  }
}, 1000);*/

/*export let asesino = {
  tipo: "asesino",
  dex: 20,
  criticalrate: 50,
  vel: 9,
  atk: 10,
  atkm: 0,
  hp: 700,
  mp: 5,
  def: 3.5,
  atacar: function atacar(atkk) {
    atkk.miss(this.dex) >= 98
      ? console.log(`${this.nombre} Ha fallado el golpe`)
      : atkk.DañoCritico(this.critico);
  },
  criticalDamage: function DañoCritico(critico) {
    const Dcritico =
      Math.round(Math.round() * (100 - critico) + critico) >= 95
        ? this.ataque * 3 - this.def * 0.5
        : this.ataque - this.def * 0.5;
    this.hp -= Dcritico;
  },
  misss: function miss(dex) {
    Math.round(Math.round() * (100 - dex) + dex);
  },
};*/
/*export let tanque = {
  tipo: "tanque",
  dex: 5,
  vel: 4,
  criticalrate: 10,
  atk: 7,
  atkm: 0,
  hp: 1500,
  mp: 6,
  def: 10,
  atacar: function atacar(atkk) {
    atkk.miss(this.dex) >= 98
      ? console.log(`${this.nombre} Ha fallado el golpe`)
      : atkk.DañoCritico(this.critico);
  },
  criticalDamage: function DañoCritico(critico) {
    const Dcritico =
      Math.round(Math.round() * (100 - critico) + critico) >= 95
        ? this.ataque * 3 - this.def * 0.5
        : this.ataque - this.def * 0.5;
    this.hp -= Dcritico;
  },
  misss: function miss(dex) {
    Math.round(Math.round() * (100 - dex) + dex);
  },
};*/
/*export let mago = {
  tipo:"mago",
  dex: 15,
  vel: 6.5,
  criticalrate: 30,
  atk: 0,
  atkm: 15,
  hp: 850,
  mp: 10,
  def: 4.3,
  atacar: function atacar(atkk) {
    atkk.miss(this.dex) >= 98
      ? console.log(`${this.nombre} Ha fallado el golpe`)
      : atkk.DañoCritico(this.critico);
  },
  criticalDamage: function DañoCritico(critico) {
    const Dcritico =
      Math.round(Math.round() * (100 - critico) + critico) >= 95
        ? this.ataque * 3 - this.def * 0.5
        : this.ataque - this.def * 0.5;
    this.hp -= Dcritico;
  },
  misss: function miss(dex) {
    Math.round(Math.round() * (100 - dex) + dex);
  },
};*/

/*export let boss = {
  dex: 7,
  vel: 6,
  criticalrate: 30,
  atk: 8,
  atkm: 6,
  hp: 1500,
  mp: 10,
  def: 8,
  atacar: function atacar(atkk) {
    atkk.miss(this.dex) >= 98
      ? console.log(`${this.nombre} Ha fallado el golpe`)
      : atkk.DañoCritico(this.critico);
  },
  criticalDamage: function DañoCritico(critico) {
    const Dcritico =
      Math.round(Math.round() * (100 - critico) + critico) >= 95
        ? this.ataque * 3 - this.def * 0.5
        : this.ataque - this.def * 0.5;
    this.hp -= Dcritico;
  },
  misss: function miss(dex) {
    Math.round(Math.round() * (100 - dex) + dex);
  },
};*/
