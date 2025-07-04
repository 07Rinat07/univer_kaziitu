const tom = { age:39 };
//  доопределяем свойства для объекта tom
Object.defineProperties(tom, {    
    name: {                 // определяем свойство name
        value: "Tom",       
        writable: false     // НЕ доступно для записи
    }, 
    print: {        // определяем метод print
        value: function() { console.log(`Name: ${this.name}  Age: ${this.age}`);},
        writable: false,        // НЕ доступно для записи
    }  
});
 
tom.name = "Tomas"; // свойство name не доступно для изменения
tom.print = function(){console.log("Hello Word");}  // метод print не доступен для изменения
 
tom.print();            // Name: Tom  Age: 39