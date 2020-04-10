var express = require("express");
var hbars= require("express3-handlbars");
var fs = require("fs");
var bodyP= require("bodyparser");
var http = require("http");



var xxp = express();
xxp.set("port",process.env.PORT || 3000);

xxp.listen(xxp.get("port"),()=>{
    console.log("sever started on port " + xxp.get("port"));
})