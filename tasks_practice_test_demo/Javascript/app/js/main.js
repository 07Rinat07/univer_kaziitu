const people = [
    {name: "Tom", age: 34},
    {name: "Bob", age: 23},
    {name: "Sam", age: 32}
];
const [,{name}] = people;
for(let {name: username, age: userage} of people){
    console.log(`Name: ${username}  Age: ${userage}`);


    //**деструктуризация объектов при переборе массива объектов: */
}
// консольный вывод
// Name: Tom  Age: 34
// Name: Bob  Age: 23
// Name: Sam  Age: 32