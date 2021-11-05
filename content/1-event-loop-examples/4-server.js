const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('respons end');
});

server.listen(5000, () => {
    //listen stay alive because is astnchronous and the moment we set it up 
    //now the event loop is just wainting for those requests to come in
    //and then once they come in then of course we run our callback function
    console.log('Server listening on port: 5000 ....');
});