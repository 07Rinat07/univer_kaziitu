// конструктор пользователя
function Person (name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log(`Person ${this.name} says "Hello"`);
    };
}
// добавляем прототип в функцию
Person.prototype.print = function(){
    console.log(`Name: ${this.name}  Age: ${this.age}`);
};
 
 
// конструктор работника
function Employee(name, age, comp){
    Person.call(this, name, age);         // применяем конструктор Person
    this.company = comp;
    this.work = function(){
        console.log(`${this.name}  works in ${this.company}`);
    };
}
// наследуем прототип от Person
Employee.prototype = Object.create(Person.prototype);
// устанавливаем конструктор 
Employee.prototype.constructor = Employee;