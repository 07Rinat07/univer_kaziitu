// объект javascript
const user = {
    name: "Tom",
    married: false,
    age: 39
};
// объект json
const serializedUser = JSON.stringify(user);
console.log(serializedUser); // {"name":"Tom","married":false,"age":39}