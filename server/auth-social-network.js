var passport         	=require("passport"),
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
									if(!err && user != null){
										done(null,user);
									}
									else{
										user=new userSocial({
											oauthID: profile.id,
											name: profile.displayName,
											created: Date.now()
										});
										user.save(function(err){
											if(err){
												console.log(err);
											}
											else{
												console.log("saving user...");
												done(null, user);
											}
										});
									}
								});

}));
