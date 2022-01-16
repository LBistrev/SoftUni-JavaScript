class List {
    constructor() {
        this.size = 0;
        this.numbers = [];
    }

    add(number) {
        this.numbers.push(number);
        this.size++
        this.numbers.sort((a, b) => a - b);
    }

    get(index) {
        this.outofBoundcheck(index)
        return this.numbers[index];
    }

    remove(index) {
        this.outofBoundcheck(index)
        this.numbers.splice(index, 1);
        this.size--
    }

    outofBoundcheck(index) {
        if (index < 0 || index >= this.numbers.length) {
            throw new Error("no such index in list")
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);
