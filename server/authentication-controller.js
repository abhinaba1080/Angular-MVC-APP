var express      =require("express"),
    mongoose     =require("mongoose"),
    bodyParser   =require("body-parser"),
    path         =require('path'),
    appRoot      = require('app-root-path'),
    User         =require("../models/user");

module.exports.signup=function(req,res){
  
   var user=new User();
  
  var hashPassword=user.generateHash(req.body.password);
  user.local.username=req.body.username;
  user.local.email=req.body.email;
  user.local.phone=req.body.phone;
  user.local.password=hashPassword;
  
  console.log("email: ",user);
  
  user.save();
  
  res.json(req.body);
};



module.exports.login=function(req,res,next){
  var email=req.body.email;
  var password=req.body.password;
  
  User.findOne({'local.email':email}, function(err,user){
      if(user==null){
        res.status(400).end('No account with this email');
      }
     else{
      req.body.username=user.username;
      user.comparePassword(password,function(err,isMatch){
       if(isMatch && isMatch === true){
         next();
       }else{
         res.status(400).end('Invalid email or password');
       }
     });
     }
    });
  
};
