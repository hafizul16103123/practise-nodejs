const  express = require('express');
const middleware = require('./middlewares/filter')
const app = express();
const route = express.Router()
// app lavel global middleware
app.use(middleware.consoleLogMiddleware)

// route lavel group middleware must write app.use('/',route)  in end of file
route.use(middleware.ageCheck)

//route lavel middleware
app.get('',middleware.homeMiddleware,(req,res)=>{
    res.send('Hello from Home')
})
// group middleware start through route ,start
route.get('/contact',(req,res)=>{
    res.send('Hello from Contact')
})
route.get('/help',(req,res)=>{
    res.send('Hello from help')
})
// group middleware start through route ,end
app.use('/',route)
app.listen(3000)
