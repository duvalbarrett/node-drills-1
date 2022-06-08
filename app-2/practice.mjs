//import module
import http from 'http'

// Save the result of the createServer() method in a variable named server.

const server = http.createServer((req,res) => {
    res.end('Practicing http using import module')
})

// Call the server's listen() method with the port number 3001.

server.listen(3001, () => {
    console.log('Server listening on port 3001')
})