const header = document.createElement("h1");        // создаем заголовок <h1>
const  headerText = document.createTextNode("Hello World"); // создаем текстовый узел
header.appendChild( headerText); // добавляем в элемент h1 текстовый узел
console.log(header);  // <h1>Hello World</h1>