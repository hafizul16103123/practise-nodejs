const  express = require('express');
const app = express();

const {persion} = require('./utils/module.exports')
const {persion1} = require('./utils/exports')
console.log(persion);
// console.log(users.patient);
// console.log(users.getPersion());

console.log(persion1);
// console.log(users2.patient1);
// console.log(users2.getPersion());

app.listen(3000)
