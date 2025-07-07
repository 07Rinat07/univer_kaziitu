const target = {name: "Tom", age: 37};
const handler = {
  set: function(target, prop, value) {
        console.log(value);
        target[prop] = value;
  }
};
const proxy = new Proxy(target, handler);
proxy.name = "Tomas";
console.log(proxy.name);    // Tomas
proxy.age = 22;             
console.log(proxy.age);     // 22