function extract_num(sequence) {
    let biggest = Number.MIN_SAFE_INTEGER
    const result = sequence.filter((el) => {
        if (el >= biggest) {
            biggest = el;
            return true
        } 
        return false;
    })
    return result
}

console.log(extract_num([1, 3, 8, 4, 10, 12, 3, 2, 24]))
extract_num([1, 2, 3,4])
extract_num([20, 3, 2, 15,6, 1])
console.log("-------------")

let seq = [1, 3, 8, 4, 10, 12, 3, 2, 24]
let max_num = Number.MIN_SAFE_INTEGER
let result = []
for (let i = 0; i < seq.length; i++) {
    if (seq[i] > max_num) {
        max_num = seq[i]
        result.push(max_num)
    }
}
console.log(result)