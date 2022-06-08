const http = require('http');
const adder = require('./addTwoFunction')
const numbersFunction = require('./functions')


const server = http.createServer((req,res) => {
    res.end('Adding Functions')
})




server.listen(4400, () => {
    console.log('server is always watching and listening 😈')
})


// console.log(adder(3))

console.log(numbersFunction.minusOne(5))
console.log(numbersFunction.timesThree(2))
console.log(numbersFunction.ageText(10))