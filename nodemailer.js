const nodemailer = require('nodemailer');
const Html = "<!DOCTYPE html><html><head>	<title>Newsletter</title></head><body>	<h1>Hello hi :) </h1></body></html>"
const pug = require('pug');

const send = async (mail) => {
	const transpotor = nodemailer.createTransport({
host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e35243581ca264",
    pass: "b19a56be00bd78"
  }

	});

	const html = pug.renderFile(`./views/email.pug`);

	const mailOptions = {
		from : 'ewsletter@botspotai.io',
		to : mail,
		subject : 'Offer at Botspot At',
		html : html
	}
	try {
		await transpotor.sendMail(mailOptions);
	} catch(err) {
		console.log(err);
	}
}

module.exports = send;