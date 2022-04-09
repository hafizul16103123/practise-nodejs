const express = require('express');
const fs = require('fs')
const path = require('path')
const app = express();
try {
    const file = './data/data.txt';
    console.log(path.dirname(file))
    console.log(path.basename(file))
    console.log(path.extname(file))

} catch (error) {
    console.log(error)
}

// join path
const name = 'joe'
const filePath = path.join('/', 'users', name, 'notes.txt')
console.log(filePath)

//You can get the absolute path calculation of a relative path using path.resolve():
const relativeToAbsolutePath = path.resolve('data/data.txt')
console.log({relativeToAbsolutePath})
const normalizePath = path.normalize('/users/joe/..//test.txt')
console.log({normalizePath})
 
app.listen(3000)