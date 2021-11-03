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



