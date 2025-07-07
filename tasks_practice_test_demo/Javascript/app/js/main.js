let js = {lang: "JavaScript"};
let ts = {lang: "TypeScript"};
const weakSet = new WeakSet([js, ts]);
 
js = null;
 
console.log(weakSet);   // {{lang: "JavaScript"}, {lang: "TypeScript"}}
console.log("Некоторая работа");
const timerId = setTimeout(function(){
    console.log(weakSet);   // {{lang: "TypeScript"}}
    clearTimeout(timerId);
}, 20000);


//**Объекты передаются в WeakSet по ссылке. И отличительной особенностью WeakSet является то, 
// что когда объект перестает существовать в силу различных причин, он удаляется из WeakSet. */