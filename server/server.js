var express      =require("express"),
    mongoose     =require("mongoose"),
    bodyParser   =require("body-parser"),
    path         =require('path'),
    appRoot      = require('app-root-path'),
    jwt = require('jsonwebtoken');
//     User         =require("../models/user");

var app=express();

var jwtSecret = 'kjwdjs65$ikksop0982shj';

var authenticationController=require('../server/authentication-controller.js');

mongoose.connect("mongodb://127.0.0.1:27017/NewAppDb",{ useMongoClient: true });

app.use(bodyParser.json());

app.use('/app',express.static(appRoot.path+'/app'));
app.use('/lib',express.static(appRoot.path+'/lib'));
app.use('/styles',express.static(appRoot.path+'/styles'));
app.use('/styles',express.static(appRoot.path+'/styles'));
app.use('/views',express.static(appRoot.path+'/views'));
app.use('/navigation',express.static(appRoot.path+'/views/navigation'));
app.use('/signup',express.static(appRoot.path+'/views/signup'));
app.use('/timeline-page',express.static(appRoot.path+'/views/timeline-page'));
app.use('/explore',express.static(appRoot.path+'/views/explore'));
app.use('/images',express.static(appRoot.path+'/images'));
app.use('/js',express.static(appRoot.path+'/js'));
app.use('/db',express.static(appRoot.path+'/db'));
app.use('/server',express.static(appRoot.path+'/server'));
app.use('/node_modules',express.static(appRoot.path+'/node_modules'));





app.get('/index.html',function(req,res){
  res.sendFile('index.html', { root: appRoot.path});
});

//authentication of user
app.post('/signup',authenticationController.signup);
app.post('/login',authenticationController.login,function(req,res){
    var token = jwt.sign({username: req.body.username}, jwtSecret);
    res.status(200).send({token: token,username: req.body.username});
});


app.listen(3030, function () {
  console.log('Example app listening on port 3030!')
});
