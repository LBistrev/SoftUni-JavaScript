function gsd(first_num, second_num) {
    let result = 0
    for (let i = 1; i <= second_num; i++) {
        if (first_num % i == 0 && second_num % i == 0)
        result = i 
    }
    console.log(result)
}

greatest_divisor(15, 5)

function gcd(a, b) {
    while (b != 0) {
        const temp = b;
        b = a % b;
        a = temp
    }
    return a;
}

console.log(gcd(2154, 458))
