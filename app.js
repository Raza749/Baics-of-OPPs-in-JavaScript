// let arr = [1,2,3,4,5];

// arr.sayHello = ()=>{
//     console.log("Hello world from oop.")
// }

// console.log(arr);


// Factory Function
// function personMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         }
//     }
//     return person;
// };

// let ali = personMaker("ali", 20); //copy
// let doe = personMaker("doe",22);  //copy

// console.log(ali);
// console.log(doe);

// console.log(ali.talk === doe.talk); // false


// Constructor Fucntion => It doesn't return anything & start with Capital letter
// function Person(name,age){
//     this.name = name;
//     this.age = age
// };

// Person.prototype.talk = function(){
//     console.log(`Hi, my name is ${this.name}`);
// }

// const p1 = new Person("Raza",22);
// const p2 = new Person("Danish",20);

// console.log(p1);

// console.log(p1.talk === p2.talk); //true



// Classes
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// const p1 = new Person("ali",19);
// const p2 = new Person("sabir",37);

// console.log(p1);
// console.log(p1.talk === p2.talk); // true




// Inhertance

// class Parent {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// class Student extends Parent {
//     constructor(name, age, marks) {
//         // this.name = name;
//         // this.age = age;
//         super(name, age); //     Parent class constructor being called
//         this.marks = marks;
//     }
//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }


// class Teacher extends Parent {
//     constructor(name, age, subject) {
//         // this.name = name;
//         // this.age = age;
//         super(name, age); //     Parent class constructor being called
//         this.subject = subject;
//     }
//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }


// const stu1 = new Student("raza",23,90);
// const teacher1 = new Teacher("Safdar",50,"English");


// console.log(stu1);
// console.log(teacher1);



class Mammal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log("I can eat...");
    }
}


class Dog extends Mammal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("woof");
    }
}

class Cat extends Mammal{
    constructor(name){
        super(name);
    }
    meow(){
        console.log("Meow...");
    }
}

const peter = new Dog('Peter');
const mani = new Cat("Mani");


console.log(peter)
console.log(mani)