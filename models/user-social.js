var mongoose = require('mongoose');

// create a user model
var userSocial = mongoose.model('userSocial', {
  oauthID: String,
  username: String
});


module.exports = userSocial;



// var mongoose=require("mongoose");
// var passportLocalMongoose=require("passport-local-mongoose");
//
// //declearing the mongoose model
// var userSocialSchema=new mongoose.Schema({
//   oauthID:String,
//   username:String
// });
//
// userSocialSchema.plugin(passportLocalMongoose);
// module.exports=mongoose.model("userSocial",userSocialSchema);
