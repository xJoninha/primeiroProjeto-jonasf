const http = require('http');

http.createServer((req, res) => {
    console.log("Servidor está rodando...")
}).listen(2727);