// //************* syncrinous code */
// const a = 10;
// let b = 0;
// console.log('program start')

// setTimeout(() => {
//     console.log('logic execute');
//     b = 20;
// }, 2000)

// console.log(a+b) //give wrong answer
// console.log('program complete')



//************* syncrinous to asyncronous */
const a = 10;
let b = 0;
console.log('program start')


const waitedData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20)
        console.log('logic execute')
    }, 2000)
}).then((data)=>{
    console.log(a+data)
    console.log('program complete')
})
