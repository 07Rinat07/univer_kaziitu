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
    print(){
        super.print();
        console.log(`Works in ${this.company}`);
    }
}
class Manager extends Person{
 
    constructor(name, age, company){
        super(name, age);
        this.company = company;
    }
    print(){
        super.print();
        console.log(`Manager in ${this.company}`);
    }
}

/**класс-наследник унаследован от некоторого базового класса говорит о том, что объект класса-наследника также является объектом базового класса. 
 * Объектом какого класса является объект, можно проверить с помощью оператора instanceof: */
const sam = new Employee("Sam", 25, "Google");
console.log(sam instanceof Person); // true
console.log(sam instanceof Employee); // true
console.log(sam instanceof Manager); // false