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