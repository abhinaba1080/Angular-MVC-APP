var express      =require("express"),
    mongoose     =require("mongoose"),
    bodyParser   =require("body-parser"),
    path         =require('path'),
    appRoot      = require('app-root-path'),
    User         =require("../models/user");

module.exports.signup=function(req,res){
  var user=new User(req.body);
  user.save();
  
  res.json(req.body);
};

module.exports.login=function(req,res){
  console.log("req.body at authen-controller: ",req.body);
  User.find(req.body,function(err,results){
            if(err){
             console.log("Error out");  
            }
            if(results && results.length==1){
              res.json(req.body.email);
              console.log(req.body);
            }
            })
};