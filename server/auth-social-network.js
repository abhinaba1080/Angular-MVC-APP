

module.exports = {

	'facebookAuth' : {
		'clientID' 		: process.env.FACEBOOK_ID ||'423557898001367', // your App ID
		'clientSecret' 	: process.env.FACEBOOK_SECRET || 'b01157da515a02d901807551b18afb75', // your App Secret
		'callbackURL' 	: 'http://localhost:3000/auth/facebook/callback'
	},

// 	'twitterAuth' : {
// 		'consumerKey' 		: 'your-consumer-key-here',
// 		'consumerSecret' 	: 'your-client-secret-here',
// 		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
// 	},

// 	'googleAuth' : {
// 		'clientID' 		: 'your-secret-clientID-here',
// 		'clientSecret' 	: 'your-client-secret-here',
// 		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
// 	}

};
