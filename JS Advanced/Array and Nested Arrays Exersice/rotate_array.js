function rotate(arr, number) {
    for (let i = 0; i < number; i++) {
        let last = arr.pop()
        arr.splice(0, 0, last)
    }
    console.log(arr.join(" "))

}

rotate(['1', 
'2', 
'3', 
'4'], 
2
)
