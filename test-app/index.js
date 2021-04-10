const {Person, double} = require('./myModule');

// ES6 Modern JS import
// import {Person, double} from './myModule';

function sayHello() {
    console.log('Hello World');
}


sayHello();

double(8);

const jake = new Person('jake');

jake.greetings();
