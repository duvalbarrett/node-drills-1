const fs = require('fs');
const path = require('path');

fs.appendFile('./text.txt', 'Hello World', (err) => {
    if (err === true){
        console.log(err)
    } else {
        console.log('success!')
    }
})

fs.readFile('./hello.txt', 'utf-8', (err,data) => {
    if (err === true){
        console.log(err)
    } else{
        console.log(data)
    }
})

fs.unlink('./newhello.txt', (err) => {
    if (err === true){
    console.log(err)
    } else {
        console.log('successfully deleted')
    }
})

fs.rename('./hello.txt', 'newhello.txt', (err) => {
    if (err === true){
        console.log(err)
    } else {
        console.log('success')
    }
})

fs.writeFile('./hello.txt', 'This is a new world', (err,data) => {
    if (err === true){
        console.log(err)
    } else {
        console.log('This is a new world')
    }
})



// example with path.join()
fs.writeFile(path.join(".", "text.txt"), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Success!");
    }
  });