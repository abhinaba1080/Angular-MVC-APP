var passport         	=require("passport"),
		mongoose     			=require("mongoose"),
		express      			=require("express")
		FacebookStrategy 	=require('passport-facebook').Strategy,
		userSocial        =require("../models/user-social"),
		config						=require("../models/oauth.js");


module.exports=passport.use(new FacebookStrategy({

							clientID			:	config.facebook.clientID,
							clientSecret	:	config.facebook.clientSecret,
							callbackURL		:	config.facebook.callbackURL
						},
						function(accessToken, refreshToken, profile, done){
								userSocial.findOne({oauthID: profile.id},function(err,user){
									if(err){
										console.log(err); //watch the error
									}
									// if(!err && user != null){
									// 	console.log("hello!!");
									// 	done(null,user);
									// }
									else{
										user=new userSocial();
										user.oauthID= profile.id;
										user.username= profile.displayName;
										console.log("user1.username: ",user.username);
										console.log("user1.oauthID: ",user.oauthID);
										console.log("user-social: ",user);
										user.save(function(err){
											if(err){
												console.log(err);
											}
											else{
												console.log("user saved!");
											}
										});
									}
								});

}));
