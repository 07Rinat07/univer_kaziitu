function User(uName, uAge) {
    this.name = uName;
    let _age = uAge;
    // геттер - возвращаем значение переменной
    this.getAge = function() { return _age; }
    // устанавливаем значение переменной
    this.setAge = function(age) {
        if(age >0 && age<110){      // если возраст больше 0 и меньше 110
            _age = age;
        } else {
            console.log("Недопустимое значение");
        }
    }
 
    this.print = function(){
        console.log(`Name: ${this.name}  Age: ${_age}`);
    };
}
 
const tom = new User("Tom", 39);
// получаем значение
console.log(tom.getAge())   // 39
// устанавливаем новое значение
tom.setAge(22);
console.log(tom.getAge())   // 22
tom.setAge(11500);     // Недопустимое значение
console.log(tom.getAge())   // 22