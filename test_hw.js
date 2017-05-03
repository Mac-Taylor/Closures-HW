import test from 'ava';
let hw = require('./hw');

test('counter', function (t) {
    let c = hw.counter(4);
    t.deepEqual(c.next(), 5);
    t.deepEqual(c.next(), 6);
    t.deepEqual(c.next(), 7);
});

test('multiply', function (t){
    let m = hw.multiply(10);
    let m2 = hw.multiply(7);
    t.deepEqual(m.times(2), 20);
    t.deepEqual(m.times(2), 40);
    t.deepEqual(m.times(3), 120);
    t.deepEqual(m2.times(5), 35);
});

test('amount', function (t) {
    let tot = hw.total(100);
    t.deepEqual(tot.discount(0.5), 50);
});