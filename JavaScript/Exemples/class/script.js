/* class Hello {
    constructor(word) {
        this.word = word;
    }

    sayHello() {
        console.log("Hello " + this.word);
    }
}

const hi = new Hello('World');

const _hi = {
    word: 'World',
    sayHello: function() {
        console.log("Hello " + this.word);
    }
}

console.log(hi);
console.log(_hi.sayHello());

// hi.sayHello(); */

class Counter {
    count = 0;
    incrementCount = function() {
        this.count++;
    }
    getCount() {
        console.log(this.count);
    }
}


const c = new Counter();

c.incrementCount();
c.incrementCount();

c.getCount();