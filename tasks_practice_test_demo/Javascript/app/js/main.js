class Person{
    name;
    age;
    constructor(){
        console.log("Вызов конструктора");
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
const tom = new Person();   // Вызов конструктора
const bob = new Person();   // Вызов конструктора