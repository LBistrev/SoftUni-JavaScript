function sort_numbers(numbers) {
    let result = []
    numbers.sort((a, b) => {
        return a - b;
    });
    while (numbers.length > 0) {
    let smallest_num = numbers.shift()
    let biggest_num = numbers.pop()
    result.push(smallest_num)
    result.push(biggest_num)
    
    }
    return result
}
      

console.log(sort_numbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
