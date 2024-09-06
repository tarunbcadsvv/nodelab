const eventemitter = require("node:events");
const logger = new eventemitter();

logger.on("login",(req) => {
    if(req.username == 'admin' && req.password == 'queen@123')
    console.log('login successful');
    else 
    console.log('try again!!!!!');
});
logger.emit('login',{username:'admin',password:'queen@123'});