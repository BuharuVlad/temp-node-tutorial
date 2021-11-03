const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => { //callback function
    if (err) {
        console.log(err);
        return;
    }
    //console.log(result); //<Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65> 
    //acest buffer il primim daca nu utilizam parametrul uft8
    //Hello this is first text file
    //cu parametrul uft8
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result:
            ${first},
            ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            });
    });
});
console.log('starting next task');
/**
 *
start
starting next task
done with this task
 */