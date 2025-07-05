class Person{
    #name = "undefined";
    #age = 1;
    constructor(name, age){
        this.#name = this.#checkName(name);
        this.setAge(age);
    }
    #checkName(name){
        if(name!=="admin") return name;
    }
    setAge(age){
        if (age > 0 && age < 110) this.#age = age;
    }
    print(){
        console.log(`Name: ${this.#name}  Age: ${this.#age}`);
    }
}
const tom = new Person("Tom", 37);
tom.print();    // Name: Tom  Age: 37
const bob = new Person("admin", 41);
bob.print();    // Name: Undefined  Age 41
//let personName = bob.#checkName("admin"); // ! Ошибка - нельзя обратится к приватному методу