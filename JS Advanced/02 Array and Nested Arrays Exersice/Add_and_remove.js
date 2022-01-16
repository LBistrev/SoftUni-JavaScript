function add_or_remove(sequence) {
    let number = 1;
    let result = []
    sequence.forEach((el) => {
        if (el == "add") {
            result.push(number);
        } else {
            result.pop()
        }
        number++;
    })
    if (result.length == 0) {
        console.log("Empty")
    }
    console.log(result.join("\n"))
}

console.log(add_or_remove(['add', 'add', 'add', 'add']))
console.log(add_or_remove(['remove', 
'remove', 
'remove']

))