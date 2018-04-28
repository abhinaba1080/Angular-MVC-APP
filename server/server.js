var express      =  require("express"),
    mongoose     =  require("mongoose"),
    bodyParser   =  require("body-parser"),
    path         =  require('path'),
    appRoot      =  require('app-root-path'),
    jwt          =  require('jsonwebtoken'),
    passport     =  require('passport'),
    userSocial   =  require("../models/user-social"),
    socialAuth   =  require('../server/auth-social-network.js');
//     User         =require("../models/user");

var app=express();


var jwtSecret = 'kjwdjs65$ikksop0982shj';

var authenticationController=require('../server/authentication-controller.js');

// mongodb Configure
mongoose.Promise = global.Promise
mongoose.connect("mongodb://127.0.0.1:27017/NewAppDb",{ useMongoClient: true})

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

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

// Serialize and deserialize
passport.serializeUser(function(user,done){
  console.log('SerializeUser: ',user._id);
});

passport.deserializeUser(function(id,done){
  userSocial.findByID(id,function(err,user){
    console.log(user);
    if(!err){
      done(null,user);
    }
    else{
      done(err,null);
    }
  });
});



app.get('/index.html',function(req,res){
  res.sendFile('index.html', { root: appRoot.path});
});

//authentication of user
app.post('/signup',authenticationController.signup);
app.post('/login',authenticationController.login,function(req,res){
    var token = jwt.sign({username: req.body.username}, jwtSecret);
    res.status(200).send({token: token,username: req.body.username});
});

//after login via social network , controls return to '/action'
app.get('/account',ensureAuthenticated, function(req,res){
  userSocial.findByID(req.session.passport.user,function(err,user){
    if(err){
      console.log(err); //handle error
    }
    else{
      res.render('account',{user:user});
    }
  });
});

// authentication of users login by Social-Networks
app.get('/auth/facebook',
  passport.authenticate('facebook'),
  function(req,res){
    console.log("auth/facebook: ");
  });
app.get('/auth/facebook/callback',
  passport.authenticate('facebook',{failureRedirect:'/index.html'}),
  function(req,res){
    console.log("account hit");
      res.redirect('/account');
  });


//test the social authentication
function ensureAuthenticated(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/index.html');
}

// logout routing
app.get('/logout',function(req, res){
  req.logout();
  res.redirect('/index.html');
});




//App Listen to this port
app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});
