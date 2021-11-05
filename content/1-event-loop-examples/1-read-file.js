//even loop is what allows node.js to perform non-blocking I/O (input and output) operations despide
//the fact that javascript is single threaded by offoading operations to the system kernel
//whenever possible 
//https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

const { readFile } = require('fs');

console.log("started a first task");

//check file path!!!
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log("complet first task");
});

//ca sa aratam ca merg in paralel
console.log("starting next task");
