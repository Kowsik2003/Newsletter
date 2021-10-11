const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name : {
		type : String,
		required : [true,'The Form must contain the Name'],
		trim : true
	},
	mail : {
		type : String,
		required : [true,'The Form must contain the MailID'],
		unique : [true,'This MailId is already subscribed'],
		trim : true
	}
});  

const User = mongoose.model('User',userSchema);

module.exports = User;