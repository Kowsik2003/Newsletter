1) run this command to install npm packages : npm i
2) to host this use : node app.js 

Routes : 
basic page :
  GET http://127.0.0.1:8000/
submit page : 
  POST http://127.0.0.1:8000/
 with name and mail id as a json file
 
 to sendmail to the subscribers you have to use a header : 
  authentication = process.env.KEY 
 the key is there is config file
and do
  POST http://127.0.0.1:8000/sendmail


