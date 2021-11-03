/**
 * Modules
 * 
 * Modules - encapsulated code (only share minium)
 * CommonJS - every file is module (by default)
 */

/**
 * avem o functie care primeste ca parametru un nume
 * il afiseaza prin metoda template
 */

//trebuie sa creem legatura intre fisiere (module) 
//facem legatura cu 4-names.js cu require
const names = require('./4-names');
console.log(names);

//importam 5-utils
const sayHi = require('./5-utils');

const data = require('./6-alternative-flavor');



sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

console.log(data); //all the data
console.log(data.items); //only the items
console.log(data.items[0]); //only first item from items
console.log(data.singlePerson); //only object
console.log(data.singlePerson.name); //only name of the object

//daca avem o functie care se apeleaza in fisierul pe care il importam aceasta se va executa la fel cum am executa fisierul importat
require('./7-mind-grenade');


/**
 * Built-in Modules
 *
 *  OS = operation system module
 *  PATH
 *  FS = file system module
 *  HTTP
 */