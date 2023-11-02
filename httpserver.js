const http = require('http');


const {createfun,readfun,updatefun,deletefun} = require('./newmodule');

//Create an HTTP server

const server = http.createServer((req,res)=>{
   console.log(req.method,req.url);

   if(req.url == "/"){

       res.write("Requet looks good.");
}   
    else if(req.url == "/pizza"){
       res.write("Pizza is my favorite food.");
}
    else {
       res.write("request is not supported");
}


res.end("\nHello World!");
});

server.listen(5000,function(){
    console.log("Listening on port 5000")
});

