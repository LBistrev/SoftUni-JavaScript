function solve(...args) {


    const obj = {
        "string": [],
        "number": [],
        "function": [],
    };
    let result = []

    for (let el of args) {
        if (typeof el == "string") {
            obj.string.push(el);

        } else if (typeof el == "number") {
            obj.number.push(el);
        } else if (typeof el == "function") {
            obj.function.push(el);
        }
    }

    for (let [key, value] of Object.entries(obj)) {
        result.push([key, value.length]);
        console.log(`${key}: ${value}`)
    }
    
    result.sort(function(a, b) {
        return b[1] - a[1];
    })
    for (let item of result) {
        console.log(`${item[0]} = ${item[1]}`)
    }
}

solve('cat', 42, function () { console.log('Hello world!'); })
solve({ name: 'bob'}, 3.333, 9.999)
