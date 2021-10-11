const User = require('../userModel');
const AppError = require('../AppError');
const send = require('../nodemailer');
const fs = require('fs');

exports.entryPage = (req,res,next) => {
	res.status(200).render('form');
}

exports.storeMail = async (req,res,next) => {
	//console.log(req.body);
	try {
			const newUser = await  User.create({
		name : req.body.name,
		mail : req.body.mail
	});
	} catch(err) {
		return next(err);
	}
	//return next(new AppError(400,"test Error"));
	
	res.status(200).render('success');
}

exports.protect = (req,res,next) => {
	const authKey = req.headers.authentication;
//	console.log(authKey==process.env.KEY);
	if(!(authKey==process.env.KEY))
	{
		return res.status(401).json({
			status : 'fail',
			message : 'Not allowed to this'
		});
	}
	next();
}

exports.sendMail = async (req,res,next) => {

	const content = req.body.content;
	const Mails = await User.find().select('mail -_id');
	//console.log(Mails[0].mail);
	//console.log(html);
	try {
		Mails.forEach(el => send(el.mail));		
	} catch (err) {
		console.log(err);
	}

	res.status(200).json({
		status : 'success',
		message : 'Mail will be sended'
	});
}