const moment = require('moment');

const coffee = { 
    name: 'Americano', 
    price: 2000,
    exp: '2021-01-01',
};
 
const date = moment(coffee.exp).format("MMM Do YY");
console.log(coffee, "exp tanggal :", date);