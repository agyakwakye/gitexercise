var express = require("express");
var hbars= require("express3-handlebars");
var fs = require("fs");
var bodyP= require("body-parser");
var http = require("http");





var xxp = express();
xxp.set("port",process.env.PORT || 3000);
xxp.get("/",(req,res)=>{
    
    res.send("hello world");
})


xxp.listen(xxp.get("port"),()=>{
    console.log("sever started on port " + xxp.get("port"));
})