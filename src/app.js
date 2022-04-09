const express = require('express');
const os = require('os')
const app = express();

const eol = os.EOL;
console.log({eol})

const constantsSignals = os.constants.signals;
console.log({constantsSignals})

const arch = os.arch();
console.log({arch})

const cpus = os.cpus();
console.log({cpus})

const endianness = os.endianness();
console.log({endianness})

const homedir = os.homedir();
console.log({homedir})

const hostname = os.hostname();
console.log({hostname})

const networkInterfaces = os.networkInterfaces();
console.log({networkInterfaces})
 
const totalmem = os.totalmem();
console.log({totalmem:totalmem})
console.log({totalmem:totalmem/(1024*1024*1024)})

const freemem = os.freemem();
console.log({freemem:freemem})
console.log({freemem:freemem/(1024*1024*1024)})

const platform = os.platform();
console.log({platform})

const release = os.release();
console.log({release})

const tmpdir = os.tmpdir();
console.log({tmpdir})

const type = os.type();
console.log({type})

const uptime = os.uptime();
console.log({uptime})

const userInfo = os.userInfo();
console.log({userInfo})

 
app.listen(3000)