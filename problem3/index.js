const http=require('http')
const url = require('url');
const port=process.env.PORT||8080
const server=http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if(req.url=="/"){
         res.end('hello from the home side')
    }
  else if(req.url=="/metrics"){

        res.end('hello from the metrics side')
    }
    else if(req.url.match(/\/metrics\?radius=\d{1}/)){
        const queryObject = url.parse(req.url, true).query;
        console.log(queryObject);

        res.end(`volume of a sphere is ${(4/3)*Math.PI*Math.pow(queryObject.radius,3)}`)

    }
    // console.log(req.url);

})

server.listen(port,()=>{
    console.log(`listen to the port : ${port}`);
})
