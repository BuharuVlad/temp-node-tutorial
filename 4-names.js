// local
const john = 'john';

// share
const peter = 'peter';
const secret = 'SUPER SECRET' //it is available in all file

// daca lasam ceva in plus o sa fie executat chiar daca in module.exports o sa fie specificat doar o parte din informatii
// console.log(module);

/**
 Module {
  id: '.',
  path: 'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\tutorial',
  exports: {}, 
  filename: 'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\tutorial\\4-names.js',
  loaded: false,
  children: [],
  paths: [
    'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\tutorial\\node_modules',
    'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\Node.Js and Express.JS - Full Course\\node_modules',
    'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\Youtube Java Script\\node_modules',
    'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\Tehnologie WEB\\node_modules',
    'F:\\Facultate\\Facultate\\Anul 3\\Sem I\\node_modules',
    'F:\\Facultate\\Facultate\\Anul 3\\node_modules',
    'F:\\Facultate\\Facultate\\node_modules',
    'F:\\Facultate\\node_modules',
    'F:\\node_modules'
  ]
}
 */



//pentru a stabili care variabile sunt private si care sunt publice ne folosim de exports from module

//exports is a object caruia ii atribuim 2 proprietati, john si peter.
//metoda 1
module.exports = { john, peter };

