var mongoose=require("mongoose");

//declearing the mongoose model
var userSocialSchema=new mongoose.Schema({
  oauthID:Number,
  name:String,
  created:Date
});

module.exports=mongoose.model("userSocial",userSocialSchema);
