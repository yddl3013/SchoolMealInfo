const express = require('express')
const http = require('http')
const https = require('https')
const fs = require('fs')
const app = express()

const HTTP_PORT = 80
const HTTPS_PORT = 443

const options = {
	key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt'),
    ca: fs.readFileSync('./server.csr'),
};



app.use(express.static(__dirname + ''))

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/diet.html')
})

app.listen(80, function() {
    console.log('express server on 80')
})

https.createServer(options, app).listen(HTTPS_PORT);

