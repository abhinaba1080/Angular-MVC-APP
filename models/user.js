var mongoose=require("mongoose");
var  bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
var passportLocalMongoose=require("passport-local-mongoose");



var UserSchema=new mongoose.Schema({


    username: String,
    password: String,
    password2: String,
    phone:String,
    email:String


});

UserSchema.methods.generateHash=function(password){
  return  bcrypt.hashSync(password,bcrypt.genSaltSync(9));
};


UserSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000)
  }, process.env.JWT_SECRET);
};

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


UserSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("User",UserSchema);
