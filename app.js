const express = require('express')
const app = express()

const https = require('https');
const PORT = process.env.PORT || 443;

const server = https.createServer(app);
const options = {
	key: fs.readFileSync(__dirname + '/home/ubuntu/SchoolMealInfo/server.key'),
    cert: fs.readFileSync(__dirname + '/home/ubuntu/SchoolMealInfo/server.crt'),
    ca: fs.readFileSync(__dirname + '/home/ubuntu/SchoolMealInfo/server.csr'),
};

https.createServer(options, app).listen(PORT);

app.use(express.static(__dirname + ''))

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/diet.html')
})

app.listen(80, function() {
    console.log('express server on 80')
})
