const os = require('os') //don't need ./ since it is inbuilt

//info about current user
const user = os.userInfo();
console.log(user);

//method - system uptime in seconds
console.log(`system uptime : ${os.uptime} seconds`);

//os methods

const osCurrent = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(osCurrent);