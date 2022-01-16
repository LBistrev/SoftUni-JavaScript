function arr_of_names(arr) {
    let counter = 1
    arr.sort()
    for (current_name of arr) {
        console.log(`${counter}.${current_name}`)
        counter++
    }
    
}

// arr_of_names(["John", "Bob", "Christina", "Ema"])

let a = ['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

console.log(a.sort((el) => {
    return a.localeCompare(b)
}))