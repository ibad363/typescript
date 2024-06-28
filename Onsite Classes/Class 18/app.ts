// class 18 (27/6/24), oop revision, interface tih classes(implements), inheritance, readonly, private protected (encapsulation), static

interface StudentProps {
  name: string;
  rollNo: number;
  timing: string;
}

class Student implements StudentProps {
  name: string;
  rollNo: number;
  readonly timing: string;
  protected marks: number;
  constructor(n: string, r: number, t: string, m: number) {
    this.name = n;
    this.rollNo = r;
    this.timing = t;
    this.marks = m;
  }
  getDetails() {
    return this.marks;
  }
}

// let student1 = new Student ("Ibad",324330,"7 to 10",85)
// console.log(student1.timing);
// // console.log(student1.timing = "12 to 1"); //shows error of readonly


// let student2 = new Student("Usama", 918, "9 to 5", 90);
// console.log(student2.name, student2.rollNo);
// console.log(student2.getDetails());

class Bank{
    private _balance :number
    static myPin:number = 1234
    static chequeNo: number = 1
    constructor(b:number){
        this._balance = b
    }

    get myBalance(){
        return this._balance
    }
    
    set deposit(cash:number){
        this._balance += cash
    }

    set withdraw(cash:number){
        this._balance -= cash
    }
}

let myBank = new Bank(5000)


// if (Bank.myPin == 1234){
//     console.log(`Your Balance is ${myBank.myBalance}`);
//     myBank.deposit = 1000
//     myBank.withdraw = 2000
//     myBank.withdraw = 1500
//     console.log(`Current Balance is ${myBank.myBalance}`);
// }else {
//     console.log(`Invalid Credentials`);
// }

// //updating value
// console.log(Bank.chequeNo++);
// console.log(Bank.chequeNo++);
// console.log(Bank.chequeNo);


// // inheritance
// class Animal {
//     move() {
//       console.log("Moving along!");
//     }
//   }
  
//   class Dog extends Animal {
//     woof(times: number) {
//       for (let i = 0; i < times; i++) {
//         console.log("woof!");
//       }
//     }
//   }
  
//   const d = new Dog();

//   // Base class method
//   d.move();

//   // Derived class method
//   d.woof(3);