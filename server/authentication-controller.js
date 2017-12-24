var express      =require("express"),
    mongoose     =require("mongoose"),
    bodyParser   =require("body-parser"),
    path         =require('path'),
    appRoot      = require('app-root-path'),
    User         =require("../models/user");


module.exports.signup=function(req,res){

  var user=new User();

  var hashPassword=user.generateHash(req.body.password);
  user.username=req.body.username;
  user.email=req.body.email;
  user.phone=req.body.phone;
  user.password=hashPassword;
  //console.log("new user: ",user);
  user.save();

  res.json(req.body);
};



module.exports.login=function(req,res,next){
  var email=req.body.email;
  var password=req.body.password;
  User.findOne({'email':email}, function(err,user){
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
