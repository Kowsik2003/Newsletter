const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const ctrl = require('./controller/webCtrl');
const errCtrl = require('./controller/errorCtrl');

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); 

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

dotenv.config({path : path.join(__dirname,'config.env')});

app.use(express.json());

// Default Route the 

app.route('/').get(ctrl.entryPage).post(ctrl.storeMail);

app.post('/sendMail',ctrl.protect,ctrl.sendMail); 

app.use(errCtrl);

//Connet to Local Mongodb

mongoose.connect(process.env.MONGODB_CLOUD).then(() => console.log('Database Connected ...'));

app.listen(process.env.PORT || 3000 , () => {
	console.log('Running . . . . ');
});

