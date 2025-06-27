const http = require("http");
const fs = require("fs");
   
http.createServer(function(_, response){
       
    fs.readFile("index.html", function(_, data){   
        response.end(data);
    });
     
}).listen(3000, function(){
    console.log("Server started at 3000");
});