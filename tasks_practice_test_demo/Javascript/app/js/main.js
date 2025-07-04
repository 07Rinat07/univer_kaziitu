const sam = {name: "Sam"};
const tom = { 
    name: "Tom", 
    company: { title: "Google"}
};
const bob = {
    name: "Bob", 
    company: {
        title: "Microsoft",
        print(){
            console.log(`Компания ${this.title}`)
        }
    }
};


//**С помощью оператора ?. можно создавать цепочки проверок,
//  последовательно проверяя, представляет ли значение null/undefined: */
sam?.company?.print?.();    // не вызывается - нет свойства company
tom?.company?.print?.();    // не вызывается - нет метода print
bob?.company?.print?.();    // Компания Microsoft