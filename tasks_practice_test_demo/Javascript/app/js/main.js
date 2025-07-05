class Person{
    #ageValue = 1;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    set age(value){
        console.log(`Передано ${value}`);
        if(value>0 && value < 110) this.#ageValue = value;
    }
    get age(){
        return this.#ageValue;
    }
}
const tom = new Person("Tom", 37);
console.log(tom.age);
tom.age = -15;
console.log(tom.age);