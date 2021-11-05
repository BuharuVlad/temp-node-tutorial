const { readFile, writeFile } = require('fs').promises;
//we used when would want to use util module
// const util = require('util'); // util module
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

//method 1
// readFile('./content/first.txt', 'utf-8', (err, data)=>{
//     if(err){
//         return;
//     } else {
//         console.log(data); //take the text from the file and display it in console
//     }
// });

//method 2 a better one than method 1
//we comment when we use util module
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(`Promise: ${data}`); //take the text from the file and display it in console
//             }
//         });
//     });
// }

const firstPath = './content/first.txt';
const secondPath = './content/second.txt';

//we use for method2 
// getText(firstPath)
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

// const start = async () => {
//     try {
//         const first = await getText(firstPath);
//         const second = await getText(secondPath);
//         console.log(`Start function: ${first}`);
//         console.log(`Start function: ${second}`);
//     } catch (error) {
//         console.log(error);
//     }
// }

//we use for util module
const utf8 = 'utf-8';

// const start = async () => {
//     try {
//         const first = await readFilePromise(firstPath, utf8);
//         const second = await readFilePromise(secondPath, utf8);
//         await writeFilePromise('./content/result-mid-grenade.txt',
//             `This is awesome: ${first} ${second}`);
//         console.log(`Start function: ${first}`);
//         console.log(`Start function: ${second}`);
//     } catch (error) {
//         console.log(error);
//     }
// }

//another method without util module but we need to put require{'fs'}.promises
const start = async () => {
    try {
        const first = await readFile(firstPath, utf8);
        const second = await readFile(secondPath, utf8);
        await writeFile('./content/result-mid-grenade.txt',
            `This is awesome: ${first} ${second}`),
            { flag: 'a' }; //flag: a let us to write without delete previous text from the file
        console.log(`Start function: ${first}`);
        console.log(`Start function: ${second}`);
    } catch (error) {
        console.log(error);
    }
}
start();