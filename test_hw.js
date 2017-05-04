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
    t.deepEqual(m(2), 20);
    t.deepEqual(m(2), 40);
    t.deepEqual(m(3), 120);
    t.deepEqual(m2(5), 35);
});

test('amount', function (t) {
    let tot = hw.total(100);
    let tot2 = hw.total(48);
    t.deepEqual(tot.discount(0.5), 50);
    t.deepEqual(tot.discount(0.5), 50);
    t.deepEqual(tot2.discount(0.125), 6);
    t.deepEqual(tot2.discount(0.5), 24);
});

test('user', function (t) {
    let person = hw.user();
    t.deepEqual(person.setName('Mac Taylor'), true);
    t.deepEqual(person.setName('Mac123'), false);
    t.deepEqual(person.getName(), 'Mac Taylor');
    t.deepEqual(person.setName('what^'), false);
    t.deepEqual(person.setName('Ronald Macdonald'), true);
    t.deepEqual(person.getName(), 'Ronald Macdonald');
});






test('lives', function (t) {
    let number = hw.lives(6);
    t.deepEqual(number.died(), 5);
    t.deepEqual(number.died(), 4);
    t.deepEqual(number.died(), 3); // died() working right now
    t.deepEqual(number.restart(), 6);
})

