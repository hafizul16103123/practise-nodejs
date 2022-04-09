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

// // Promise
// const done = false;
// //create promise
// const isWorkDone = () => {
//     return new Promise((resolve, reject) => {
//         if (done) {
//             const data = 'Work is done';
//             resolve(data)
//         }
//         const data = 'Not done yet'
//         reject(data)
//     })
// }

// // calling promise
// const checkIsWorkDone = () => {
//     isWorkDone()
//         .then(ok => { console.log(ok) })
//         .catch(err => { console.log(err) })
// }
// checkIsWorkDone()

// // async/await
const printName = async()=>{
    return 'pk'
}
printName().then((data)=>{console.log(data)})
