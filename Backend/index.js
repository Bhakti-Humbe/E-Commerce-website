var http=require("http")
http.createServer(function(req,res){
    res.end()
}
).listen(5001,()=> {
    console.log("Server is running")
})