// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });

// const {firstName, lastName, age} = require("./user");

// console.log(`Hallo my name is ${firstName} ${lastName}, and I am ${age} years old`);

const Haerin = require("./modularitazion/haerin");
const Minji = require("./modularitazion/minji");

const fighting = (haerin, minji) => {
    if(haerin.cute > minji.cute){
        haerin.sound();
        return;
    }

    if(minji.cute > haerin.cute){
        minji.sound();
        return;
    }

    console.log("They are equally cute :3")
}

const haerin = new Haerin();
const minji = new Minji();

fighting(haerin, minji);