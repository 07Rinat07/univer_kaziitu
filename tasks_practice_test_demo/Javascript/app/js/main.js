const person = {
    name: "",
    print: ()=>console.log("Name:", this.name)
};
const user = {
    name: "",
    print: ()=>console.log("Name:", this.name)
};
 
// объект employee наследует прототип объекта person
const employee = Object.create(person);
 
console.log(person.isPrototypeOf(employee));    // true
console.log(user.isPrototypeOf(employee));      // falses

//**Проверка наследования прототипов и Object.isPrototypeOf() */