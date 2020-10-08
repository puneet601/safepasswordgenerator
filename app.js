const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const generator = require("generate-password");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
 app.get("/",function(req,res){
         res.render("index");
 });
//  app.get("/generate",function(req,res){

//  });
 app.post("/generate",function(req,res){
    
     const value=req.body.len;
    // console.log(value);
    
        var passwordgenerated= generator.generate({
            length: value,
            numbers: true,symbols:false
        });
        console.log(passwordgenerated);
        res.render("password",{
            password: passwordgenerated
        });
    
    
 });
 
// 'uEyMTw32v9'

app.listen(3000,function(){
    console.log("started");
});