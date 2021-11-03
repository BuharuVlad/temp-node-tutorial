//file system module
//we can do:
// asynchronously
// non-blocking
// synchronously
// blocking

const { readFileSync, writeFileSync } = require('fs');
console.log('start');
// the same thing
// const fs = require('fs');
// fs.read

//cum citim dintr-un fisier txt
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(first, second);

//crearea unui fisier txt din node
writeFileSync('./content/result-sync.txt', `Here is the result:\n ${first}\n, ${second}`,
    { flag: 'a' });
console.log('done with this task');
console.log('starting the next one');


/**
 *
start
done with this task
starting the next one
 */