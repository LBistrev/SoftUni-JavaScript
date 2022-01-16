function rectangle(width, height, color) {

    let first = color.slice(0, 1).toUpperCase()
    let end = color.slice(1,color.length)
    const result = {
        width,
        height,
        color: first + end
        }

    result.calcArea = function() {
        return result.width * result.height
    }

    return result

}

let rect = rectangle(4, 5, 'red');

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());


