const tom = {
    name: "Tom",
    age: 24,
    phone: "+367438787",
    email: "tom@gmail.com"
};
const {name, age, ...contacts} = tom;
console.log(name);      // Tom
console.log(age);       // 24
console.log(contacts);  // {phone: "+367438787", email: "tom@gmail.com"}