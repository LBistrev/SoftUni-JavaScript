class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(value) {
        this.innerLength += value;
    }

    decrease(value) {
        if (this.innerLength - value < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= value;
        }
    }

    toString() {
        let newStr = this.innerString.length;
        if (this.innerLength == 0) {
            return `...`;
        } else if (newStr > this.innerLength) {
            let strAsNum = newStr - this.innerLength;
            return `${this.innerString.slice(0, strAsNum)}...`
        }
        return `${this.innerString}`
    }
}


let test = new Stringer("Test", 5);
//console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
