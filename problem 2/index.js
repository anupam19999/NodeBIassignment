const http =require('http')
const fs=require('fs')

const port=process.env.PORT||7000;
const server=http.createServer((req,res)=>{
if(req.url=='/'){
    (fs.readFile('data.json','utf8',function(err,data){
        console.log(data);
        res.end(data)
    }))
}
})

server.listen(port,()=>{
    console.log(`${port}`);
})