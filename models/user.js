var mongoose=require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");


var UserSchema=new mongoose.Schema({
  username: String,
  password1: String,
  password2: String,
  phone:String,
  email:String
});

UserSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("User",UserSchema);
