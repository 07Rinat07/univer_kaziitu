const http = require("http");
const fs = require("fs");
   
http.createServer(function(request, response){
       
    let filePath = "index.html";
    if(request.url !== "/"){
        // получаем путь после слеша
        filePath = request.url.substring(1);
    }
    fs.readFile(filePath, function(error, data){
               
        if(error){
                   
            response.statusCode = 404;
            response.end("Resourse not found!");
        }   
        else{
            // устанавливаем mime-тип для отправляемых модулей javascript
            if(filePath.endsWith("js")||filePath.endsWith("jsx")){
                response.setHeader("Content-Type", "text/javascript; charset=utf-8");
            }
            response.end(data);
        }
    });
     
}).listen(3000, function(){
    console.log("Server started at 3000");
});