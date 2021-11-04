/**
 * npm - global command, comes with node
 * npm --version : to find the version
 *
 *
 * local dependency - use it only in this particular project
 * npm i <packageName>
 *
 * global dependency - use it in any project
 *
 * npm install -g <packageName>
 * sudo install -g <packageName> (mac)
 *
 *
 * package.json - manifest file (stores inportant info about project/package)
 * manual approach (create package.json in the root, create properties etc)
 * npm init (step by step, press enter to skip)
 * npm init -y (everything default)
 *
 *
 * npm i bootstrapt - install the bootstrapt package
 * npm i lodash     - install lodash package
 */

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
//in lodash avem functia flattenDeep care din mai multi vectori ne face unul singur
//items care are un vector cu 2 elemente: un numar = 1, un vector care contine la randul sau alte 2 elemente: un numar si un alt vector
//din toti acesti vectori face unul singur cu cele 4 elemente
const newItems = _.flattenDeep(items);
console.log(newItems);
// result in console
// [ 1, 2, 3, 4 ]

console.log("test for nodeman!");
/**
 *
[nodemon] 2.0.14
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
[ 1, 2, 3, 4 ]
[nodemon] clean exit - waiting for changes before restart

[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
[ 1, 2, 3, 4 ]
test for nodeman!
[nodemon] clean exit - waiting for changes before restart
 */

//npm i nodemon -D sau npm i nodemon --save-D
//instaleaza devdependencies
//in devdependecies putem sa punem dependintele care ne ajuta 

//ca sa functioneze npm start
//trebuie sa mergem in fisierul JSON (package.json) la script iar acolo mergem si scriem 
// "start": "node app.js"
//iar acum cand scriem in consola npm start
//se apeleaza automat fisierul nostru main

//npm run dev
//tot in fisierul JSON la script avem scris:
// "div": "nodeman app.js"
//la apelare o sa ne arate versiunea de nodemon pe care o utilizam in dezvoltarea aplicatiei
//rezultatul din fisierul nostru main
//si mentine server-ul deschis
//pentru inchidere ctrl + C apoi suntem intrebati daca dorim sa inchidem 

// nodemon daca-l mentine pornit o sa ne dea restart la server la fiecare modificare facuta in server

//o alta setare este sa ingoram cele 2 seteri de sus:
// "start": "node app.js",
// "dev": "nodemon app.js"
//si le combinam
// "start": "nodemon app.js"
//restarturile o sa aiba loc la orice modificare asupra fisierelor implicate in proiect

//pentru uninstall pentru cazul nostru este:
// npm uninstall bootstrap

//pentru a instal global nodeman ca sa fie folosit pentru orice project
// npm install -g nodeman



//even loop is what allows node.js to perform non-blocking I/O (input and output) operations despide
//the fact that javascript is single threaded by offoading operations to the system kernel
//whenever possible 
//https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/


