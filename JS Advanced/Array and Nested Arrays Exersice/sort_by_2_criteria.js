function sort_by_2_criteria(arr) {
    let sorted_arr = arr.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        } else if (a.length == b.length) {
            return a.localeCompare(b);
        } else {
            return -1;
        }
    })
    console.log(sorted_arr.join("\n"));
}

sort_by_2_criteria(['alpha', 
'beta', 
'gamma']
)

console.log("--------------")

sort_by_2_criteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
)


console.log("--------------")

sort_by_2_criteria(['test', 
'Deny', 
'omen', 
'Default']
)
