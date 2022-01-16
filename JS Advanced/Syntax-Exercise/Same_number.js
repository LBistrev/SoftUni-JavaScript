function same_numbers(number) {
    let nums_as_string = number.toString()
    let total_sum = 0
    let is_same_digit = true

    for (let i = 0; i < nums_as_string.length; i++) {
        total_sum += parseInt(nums_as_string[i])

        if (i+1 >= nums_as_string.length) {
            break
        }
        else if (nums_as_string[i] != nums_as_string[i+1]) {
                
            is_same_digit = false
        }
    }
    console.log(is_same_digit)
    console.log(total_sum)
}

same_numbers(2222222)
same_numbers(1234)
