var express=require ("express")
var dbconfig =require("./dbconfig")
var cors=require("cors")
var user  = require("./user")
let app = express()
app.use(express.json())
app.use(cors())
app.get("/",async(req,res)=>{
let data= await user.find()
   // let data = await user.
       res.send(data)
})
app.post("/",async(req,res)=>{
    let data=await user(req.body)
    let result=await data.save()
    res.send(result);
})
app.listen(5001,()=>
{
    console.log("Server is running!!")
});




/*var http=require("http")
var fs=require('fs')
http.createServer(function(req,res){
    fs.readFile("index.html",function(err,data)
    {
        res.writeHead("200",{"Content-Type":"react/jsx"});
        res.write(data);
        res.end();
    })
}
).listen(5000)*/