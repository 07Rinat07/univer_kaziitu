class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
class Employee extends Person{
     
    constructor(name, age, company){
        super(name, age);
        this.company = company;
    }
    work(){
        console.log(`${this.name} works in ${this.company}`);
    }
}
  
const tom = new Person("Tom", 34);
tom.print();    // Name: Tom  Age: 34
 

/**Производный класс также может определить свой конструктор. Если производный класс определяет конструктор, то в нем должен быть вызван конструктор базового класса. Для обращения производном классе к функциональности базового класса, 
 * в том числе для обращения к конструктору базового класса, применяется ключевое слово super */

const sam = new Employee("Sam", 25, "Google");
sam.print();    // Name: Sam  Age: 25
sam.work();     // Sam works in Google