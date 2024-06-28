// oop Abstraction, Encapsulation, Inheritance, Polymorphism



// Abstraction
// abstract class Character {
//     public name: string;
//     public damage: number;
//     public attackSpeed: number;
  
//     constructor(name: string, damage: number, speed: number) {
//       this.name = name;
//       this.damage = damage;
//       this.attackSpeed = speed;
//     }
  
//     public abstract damagePerSecond(): number;
//   }
  
//   class Goblin extends Character {
//     constructor(name: string, damage: number, speed: number) {
//       super(name, damage, speed);
//     }
  
//     public damagePerSecond(): number {
//       return this.damage * this.attackSpeed;
//     }
//   }


// abstract class Shape {
//     abstract getArea(): number; // Abstract method
//     constructor(color: string) {} // Constructor with a parameter
//   }
  
//   class Circle extends Shape {
//     radius: number;
  
//     constructor(radius: number, color: string) {
//       super(color); // Call the constructor of the parent class
//       this.radius = radius;
//     }
  
//     getArea(): number { // Implementation of the abstract method
//       return Math.PI * this.radius ** 2;
//     }
//   }
  



// Encapsulation
// class Character {
//     private _name: string;
  
//     constructor(name: string) {
//       this._name = name;
//     }
  
//     public get name(): string {
//       return this._name;
//     }
  
//     public set name(value: string) {
//       this._name = value;
//     }
//   }
  



// Inheritance
// class Character {
//     public name: string;
//     public damage: number;
  
//     constructor(name: string, damage: number) {
//       this.name = name;
//       this.damage = damage;
//     }
  
//     public talk(): void {
//       console.log('Says something ...');
//     }
//   }
  
//   class Orc extends Character {
//     public weapon: string;
  
//     constructor(name: string, damage: number, weapon: string) {
//       super(name, damage);
  
//       this.weapon = weapon;
//     }
  
//     public attack(): void {
//       console.log(`Attacks his target with his ${this.weapon}.`);
//     }
//   }
  


// // Polymorphism (overriding properties & methods)
// class Character {
//     public name: string;
//     public damage: number;
//     more: string = "More"

//     constructor(name: string, damage: number) {
//         this.name = name;
//         this.damage = damage;
//     }

//     public talk(): void {
//         console.log('Says something ...');
//     }

//     public attack(): void {
//         console.log(`Attacks his target with his fists.`);
//     }
// }

// class Orc extends Character {
//     public weapon: string;
//     more :string = "Once More"

//     constructor(name: string, damage: number, weapon: string) {
//         super(name, damage);

//         this.weapon = weapon;
//     }

//     public talk(): void {
//         console.log('Says something but in orcish ...');
//     }

//     public attack(): void {
//         console.log(`Attacks his target with his ${this.weapon}.`);
//     }
// }

// const f = new Character("Orc",1000)
// const p = new Orc("Orc",1000,"Gun")
// p.talk()
// console.log(p.more);
// f.talk()
// console.log(f.more);


// generics & class expression
const someClass = class<Type> {
    content: Type;
    constructor(value: Type) {
      this.content = value;
      console.log(this)
    }
  };
   
  const m = new someClass<string>("Hello, world");
//   console.log(m.content);

class MyClass<Type>{
    content:Type
    constructor(value: Type){
        this.content = value
    }
}
let c = new MyClass<boolean>(true)
console.log(c);
