

let num = 222222
let num_as_string = num.toString()
let is_same = true
let result = 0

for (let i = 0; i < num_as_string.length; i++) {
    if (num_as_string[i] != num_as_string[i+1]) {
        is_same = false
          
    }
    result += Number(num_as_string[i]) 
}


console.log(is_same)
console.log(result)


