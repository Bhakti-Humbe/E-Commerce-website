var mongoose =require("mongoose");
let userSchema=new mongoose.Schema({
    name:String,
    contact:Number,
    email:String,
    description:String
})
let user =mongoose.model("user",userSchema,"user")
module.exports=user;
