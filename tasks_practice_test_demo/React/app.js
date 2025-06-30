const http = require("http");
const fs = require("fs");
    
http.createServer(function(request, response){
        
    // если запрос по адресу "/api/user", отдаем объект в формате json
    if(request.url === "/api/user"){
        response.setHeader("Content-Type", "application/json; charset=utf-8");
        response.end(JSON.stringify({name: "Tom", age: 40}));
    }
    else{
        // иначе отправляем страницу index.html
        fs.readFile("index.html", (error, data) =>response.end(data));
    }
}).listen(3000, function(){
    console.log("Server started at 3000");
});