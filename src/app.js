const express = require('express');
const fs = require('fs')
const path = require('path')
const app = express();
try {
    // console.log(path.dirname('./data/data.txt'))
    // console.log(path.basename('./data/data.txt'))
    const file = fs.statSync('data.txt','r')
    console.log(file.isFile())
    console.log(file.isDirectory())
    console.log(file.isSymbolicLink())
    console.log(file.size)
    
} catch (error) {
    console.log(error)
}


 
app.listen(3000)