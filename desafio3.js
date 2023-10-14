class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

    attack(type) {
      switch(type) {
        case "mago":
          console.log(`O ${this.type} atacou usando magia`);
          break;
        case "guerreiro":
          console.log(`O ${this.type} atacou usando espada`);
          break;
        case "monge":
          console.log(`O ${this.type} atacou usando artes marciais`);
          break;
        case "ninja":
          console.log(`O ${this.type} atacou usando shuriken`);
          break;
        default:
          console.log(`Este tipo de ataque ${this.type} não foi implementado`);
          break;        
      }
    }
}

let hero1 = new Hero("Homem-Aranha", 25, "ninja");
let hero2 = new Hero("Ryu", 19, "guerreiro");
let hero3 = new Hero("Seu Madruga", 78, "Preguiça");

hero1.attack(hero1.type);

hero2.attack(hero2.type);

hero3.attack(hero3.type);