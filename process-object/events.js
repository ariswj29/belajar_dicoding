const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name, harga }) => {
    console.log(`Kopi ${name} telah dibuat dengan harga Rp.${harga}`);
};
const makediscount = ( discount ) => {
    console.log(`Anda telah mendapatkan potongan harga Rp.${discount}`);
};
const makeBill = ({ discount, harga }) => {
    console.log(`Total yang harus anda bayar Rp.${harga-discount}`);
};
 
// // mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
// myEventEmitter.on('coffee-order', makeCoffee);
// myEventEmitter.on('coffee-order', makediscount);

const onCoffeeOrderedListener = ({ name, harga, discount }) => {
    makeCoffee({name, harga});
    makediscount(discount);
    makeBill({harga, discount});
}

myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit('coffee-order', { name: 'Tubruk', harga: 5000, discount: 1000 });
