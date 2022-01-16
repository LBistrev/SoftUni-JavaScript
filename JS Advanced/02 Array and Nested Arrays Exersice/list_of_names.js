function sort_names(sequence) {
    let result = sequence.sort();
    let counter = 1;
    result.forEach((el)=> {
        console.log(`${counter}.${el}`);
        counter++;
    })
    }

sort_names(["John", "Bob", "Christina", "Ema"])
