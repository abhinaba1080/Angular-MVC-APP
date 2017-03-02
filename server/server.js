var express      =require("express"),
    mongoose     =require("mongoose"),
    bodyParser   =require("body-parser"),
    path         =require('path'),
    appRoot      = require('app-root-path'),
    User         =require("../models/user");

var app=express();

//mongoose.connect("mongodb://127.0.0.1:27017/NewApp");

app.use('/app',express.static(appRoot.path+'/app'));
app.use('/lib',express.static(appRoot.path+'/lib'));
app.use('/styles',express.static(appRoot.path+'/styles'));
app.use('/views',express.static(appRoot.path+'/views'));
app.use('/signup',express.static(appRoot.path+'/views/signup'));
app.use('/images',express.static(appRoot.path+'/images'));
app.use('/js',express.static(appRoot.path+'/js'));
app.use('/node_modules',express.static(appRoot.path+'/node_modules'));





app.get('/index.html',function(req,res){
  res.sendFile('index.html', { root: appRoot.path});
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
