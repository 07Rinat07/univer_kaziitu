// определение конструктора объектов типа Person
function Person(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.print = function(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    };
}
// определение конструктора объектов типа Employee
function Employee(eName, eCompany) {
    this.name = eName;
    this.company = eCompany;
    this.print = function(){
        console.log(`Name: ${this.name}  Company: ${this.company}`);
    };
}
const tom = new Person("Tom", 39); 
const bob = new Employee("Bob", "Google");
 
console.log(tom instanceof Person);       // true - tom является объектом типа Person
console.log(bob instanceof Employee);   // true - bob является объектом типа Employee
console.log(tom instanceof Employee);   // false - tom НЕ является объектом типа Employee