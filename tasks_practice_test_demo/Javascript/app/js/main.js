// пустой WeakMap
const weakMap1 = new WeakMap();
 
// WeakMap с инициализацией данными
let key1 = {key:1};
let key2 = {key:2};
let value1 = {name: "Tom"};
let value2 = {name: "Sam"};
 
const weakMap2 = new WeakMap([[key1, value1], [key2, value2]]);
// или так
// const weakMap2 = new WeakMap([[{key:1}, {name: "Tom"}], [{key:2}, {name: "Sam"}]]);

//**WeakMap представляет развитие коллекции Map. Особенностью WeakMap является то, что все 
// ее элементы должны представлять объекты. При этом ключи должны представлять объекты. */