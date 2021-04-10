class Person {
    constructor(name) {
        this.name = name;
    }

    greetings() {
        console.log(`HELLO I AM ${this.name}`);
    }
}

function double(x) {
    console.log(x * 2);
}


module.exports = {
    Person,
    double
}


// ES6 Modern JS exports
// export default {
//     Person,
//     double
// }
