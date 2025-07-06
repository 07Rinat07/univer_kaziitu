class PersonError extends Error {
  constructor(value, ...params) {
    // остальные параметры передаем в конструктор базового класса
    super(...params)
    this.name = "PersonError"
    this.argument = value;
  }
}
 
class Person{
  
    constructor(pName, pAge){
         
        const age = parseInt(pAge);
        if(isNaN(age))  throw new PersonError(pAge, "Возраст должен представлять число");
        if(age < 0 || age > 120) throw new PersonError(pAge, "Возраст должен быть больше 0 и меньше 120");
        this.name = pName;
        this.age = age;
    }
    print(){ console.log(`Name: ${this.name}  Age: ${this.age}`);}
}
     
try{
    //const tom = new Person("Tom", -45);
    const bob = new Person("Bob", "bla bla");
}
catch(error){   
    if (error instanceof PersonError) {
        console.log("Ошибка типа Person. Некорректное значение:", error.argument);
    }
    console.log(error.message);
}

//**Мы не ограничены встроенными только встроенными типами ошибок и при необходимости можем
//  создавать свои типы ошибок, предназначеные для каких-то конкретных ситуаций. */