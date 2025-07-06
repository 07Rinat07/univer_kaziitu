class Person{
  
    constructor(pName, pAge){
         
        const age = parseInt(pAge);
        if(isNaN(age))  throw new TypeError("Возраст должен представлять число");
        if(age < 0 || age > 120) throw new RangeError("Возраст должен быть больше 0 и меньше 120");
        this.name = pName;
        this.age = age;
    }
    print(){ console.log(`Name: ${this.name}  Age: ${this.age}`);}
}
     
try{
    const tom = new Person("Tom", -45);
    const bob = new Person("Bob", "bla bla");
}
catch(error){   
    if (error instanceof TypeError) {
        console.log("Некорректный тип данных.");
    } else if (error instanceof RangeError) {
        console.log("Недопустимое значение");
    }
    console.log(error.message);
}

//**При выполнении одного и то же кода могут генерироваться ошибки разных типов. 
// И иногда бывает необходимо разграничить обработку разных типов. В этом случае мы можем 
// проверять тип возникшей ошибки. */