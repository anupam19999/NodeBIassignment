const http=require('http')
const url = require('url');
const port=process.env.PORT||8080
const server=http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if(req.url=="/"){
         res.end('hello from the home side')
    }
  else if(req.url=="/age"){

        res.end('hello from the age side')
    }
    else if(req.url.match(/\/age\?year=\d{4}/)){
        const queryObject = url.parse(req.url, true).query;
        console.log(queryObject);
        res.end(`the age of the person is ${new Date(). getFullYear() - parseInt(queryObject.year)}`)

    }
    // console.log(req.url);

})

server.listen(port,()=>{
    console.log(`listen to the port : ${port}`);
})
