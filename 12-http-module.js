/**
 * HTTP module
 *
 * brief intro
 *
 * cover in detail later
 */

const http = require('http');

//create server
const server = http.createServer((req, res) => { //callback function
    if (req.url == '/') {
        res.end('Welcome to our home page');
    };
    if (req.url == '/about') {
        res.end('Here is our short history')
    }
    res.end(`
     <h1>Oops!</h1>
     <p>We can't seem to find the page you are looking for</p>
     <a href="/">back home</a>`)
    //req = request (cerere) este un obiect
    //res = respons (raspuns) este un obiect
    // res.write('Welcome to our homepage');
    // res.end(); //end of the respons
});

//avem nevoie de un port
const port = 5000;
server.listen(port);


