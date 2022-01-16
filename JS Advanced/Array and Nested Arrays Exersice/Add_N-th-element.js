function print_n_element(sequence, number) {
    let result = []
    for (i = 0; i < sequence.length; i+= number) {
        result.push(sequence[i])
    }
    return result
}

console.log(print_n_element(['5', '20', '31', '4', '20'], 2))
console.log(print_n_element(['dsa',
'asd', 
'test', 
'tset'], 
2
))