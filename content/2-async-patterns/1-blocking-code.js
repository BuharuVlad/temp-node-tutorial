//set up the server

const http = require('http');

const server = http.createServer((req, res) => {
    //req - that we send outside
    //res - that we reseive
    if (req.url === '/') {
        res.end('Home Page');
    }
    if (req.url === '/about') {
        res.end('About Page');
        //BLOCKING CODE!!!
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);
            }
        }
    }
    //if it don't enter in the if loops we send an error message
    res.end('Error Page');

});

server.listen(5000, () => {
    console.log('Server is ready on port: 5000');
});