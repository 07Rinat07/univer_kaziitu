const user = {
    name: "Tom",
    married: false,
    age: 39
};
// сериализация
const serializedUser = JSON.stringify(user);
// десериализация
const tomUser = JSON.parse(serializedUser);
console.log(tomUser.name); // Tom