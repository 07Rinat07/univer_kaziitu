function display({name:userName, age:userAge}){
    console.log(userName, userAge);
}
function sum([a, b, c]){
    const result = a + b + c;
    console.log(result);
}
const user = {name:"Alice", age:33, email: "alice@gmail.com"};
 
const numbers = [3, 5, 7, 8];


//**Если в функцию в качестве параметра передается массив или объект,
//  то его также можно подобным образом разложить на отдельные значения: */
 
display(user);  // Alice 33
sum(numbers);   // 15