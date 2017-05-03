import test from 'ava';
let hw = require('./hw');

test('counter', function (t) {
    let c = hw.counter(4);
    t.deepEqual(c.next(), 5);
    t.deepEqual(c.next(), 6);
    t.deepEqual(c.next(), 7);
});