// MAC, BE MINDFUL OF WHICH FUNCTIONS STORE THE DATA FOR THIS ASSIGNMENT
// OR ELSE YOU ARE GONNA HAVE A BAD TIME!

module.exports = {
    /**
     * Return an object with a next() property. Each time the next function
     * is called the value returned is one higher than the time before.
     *
     *  var c = hw.counter(2);
     *  c.next(); // return 3
     */

    counter: function (start) { // start is your input, which is a NUMBER

        return {
            next: function () {
                start++;
                return start;
            }
        };
    }, // WALKED THROUGH THIS ONE WITH LUKE, DEFINITELY DO NOT MESS WITH IT.


    /**
     * Return a function that accepts the value to multiply `val` by.
     *
     *  multiply(3)(5); // return 15
     */
    multiply: function (val) {

        return function (a) {
            val = val * a;
            return val;

        }
    }, // RIGHT NOW THIS ONE SEEMS TO WORK. DO NOT MESS WITH IT FOR NOW.

    /**
     * Return an object with a discount() property. The discount property should
     * accept an amount that the original price should be discounted by. This
     * should not affect the original amount!
     *
     *  var tot = hw.total(20);
     *  tot.discount(0.50); // return 10
     *  tot.discount(0.20); // return 16
     */
    total: function (amount) {

        /* This seems to work, I think defining 'amt' within the scope of 
        discount() keeps discount() from affecting the amount every 
        time it's called, but ask Luke. */

        return {
            discount: function (nmbr) {
                /*let amnt = amount;
                amnt = amnt * nmbr;
                return amnt; */ // don't even need to do all this, can just return the
                // new number, and it won't affect the amount because
                // not calling a function.

                return amount * nmbr;
            },
        }
    },

    /**
     * Set the name of a user. Only valid names can be provided. A `valid` name is
     * one that matches the regex ^[A-Za-z ]+$.
     *
     *  var user = hw.user();
     *  user.setName('Francis Bacon'); // return true
     *  user.getName(); // return 'Francis Bacon'
     *  user.setName('123 hi'); // return false
     *  user.getName(); // return 'Francis Bacon'
     */
    user: function () {

        return {
            setName: function (prsn) {
                let regex = /^[A-Za-z ]+$/;
                if (regex.test(prsn) === true) {
                    return true;
                } else {
                    false;
                }
            },
            getName: function () {
                    
                }
            };
        },
    

    /**
     * Create a color object that's got six different properties: incrRed(amount), 
     * incrGreen(amount), and incrBlue(amount) - all of which change the R, G, or B
     * value by the specified quantity (could be negative).
     *
     * There should also be a red(), green(), and blue() function that return the current
     * value for that color channel.
     *
     * You can't have a color value less than zero or greater than 255.
     *
     *  var color = hw.color(150, 200, 18);
     *  color.incrRed(12);
     *  color.incrGreen(30);
     *  color.incrBlue(-9);
     *  console.log(color.red(), color.green(), color.blue()); // 162, 230, 9
     */
    color: function (r, g, b) { },

    /**
     * Track the number of lives remaining in a game.
     *
     *  var lives = hw.lives(5);
     *  lives.died();
     *  console.log(lives.left()); // 4
     *  lives.died();
     *  console.log(lives.left()); // 3
     *  lives.restart();
     *  console.log(lives.left()); // 5
     */
    lives: function (start) { },

    /**
     * Return a string that contains the 'message id' before the message text.
     * The message ID starts at one and increments with each record.
     *
     *  var logger = hw.messages();
     *  var msg = logger.record('first message');
     *  console.log(msg); // '[1] first message'
     *  msg = logger.record('second message');
     *  console.log(msg); // '[2] second message'
     */
    messages: function () { },

    /**
     * Create a pocket object that can contain COINS and TRINKETS. The pocket
     * allows users to buy() trinkets for 10 coins, or sell() trinkets for 5
     * coins. You can also return the number of coins() or trinkets().
     *
     * You can't have a negative number of coins or trinkets.
     *
     *  var pocket = hw.pocket(50);
     *  pocket.buy(); // buy for 10 coins
     *  console.log(pocket.coins()); // 40
     *  console.log(pocket.trinkets()); // 1
     *
     *  pocket.buy();
     *  console.log(pocket.coins()); // 30
     *  console.log(pocket.trinkets()); // 2
     *
     *  pocket.sell();
     *  console.log(pocket.coins()); // 35
     *  console.log(pocket.trinkets()); // 1
     */
    pocket: function (start) { },
};

