const ageCheck = (req,res,next)=>{
    if(!req.query.age) res.send('Please provide age');
    else{
        next();
    }
    
}
const consoleLogMiddleware=(req,res,next)=>{
   console.log('conaoleLog middleware called');
    next();
}
const homeMiddleware=(req,res,next)=>{
   console.log('home middleware called');
    next();
}
module.exports={ageCheck,consoleLogMiddleware,homeMiddleware}