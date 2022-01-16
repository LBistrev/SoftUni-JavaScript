function cooking(start_num, second, third, forth, fifth, sixt) {
    let arr = [second, third, forth, fifth, sixt]
    let number = parseInt(start_num)
    let result = 0
    for (element of arr) {
        switch (element) {
            case "chop": result = number / 2; break;
            case "dice": result = Math.sqrt(number); break;
            case "spice": result = number + 1; break;
            case "bake": result = number * 3; break;
            case "fillet": result = number - number * 0.2
        }
        console.log(result)
        number = result
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
// cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
