class Person{
    name;
    age;
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
class Employee extends Person{
    company;
    work(){
        console.log(`${this.name} works in ${this.company}`);
    }
}
  
//** После названия класса-наследника ставится ключевое слово extends, после которого идет имя класса, 
// от которого мы хотим унаследовать функционал.*/

/*Так, изменим классы Person и Employee, применив наследование: */

const tom = new Person();
tom.name = "Tom"; 
tom.age= 34;
const bob = new Employee();
bob.name = "Bob"; 
bob.age = 36; 
bob.company = "Google";
tom.print();    // Name: Tom  Age: 34
bob.print();    // Name: Bob  Age: 36
bob.work();     // Bob works in Google