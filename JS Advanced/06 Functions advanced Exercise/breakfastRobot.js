function solution() {
    const library = {
        apple: {carbohydrate : 1, flavour: 2},
        lemonade: {carbohydrate : 10, flavour: 20},
        burger : {carbohydrate : 5, fat: 7, flavour: 3},
        eggs: {protein: 5,fat: 1 ,flavour: 1},
        turkey: {protein: 10, carbohydrate : 10, fat: 10, flavour: 20},

    }

    const storage = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0
    }

    function restock(element, quantity) {
        storage[element] += Number(quantity)
        return "Success"
    }

    function prepare(recipe, quantity) {

        const remainingStorage = {};
        for (let element in library[recipe]) {
            const current = storage[element] - library[recipe][element] * quantity
            if (current < 0) {
                return `Error: not enough ${element} in stock`
            } else {
                remainingStorage[element] = Number(current)
            }
        }
        Object.assign(storage, remainingStorage)
        return "Success"
    }

    function report() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`
    }

    function inputControl(strInput) {
        const [command, element, quantity] = strInput.split(" ");
        if (command == "restock") {
            return restock(element, Number(quantity))
        } else if (command == "prepare") {
            return prepare(element, Number(quantity))
        } else if (command == "report") {
            return report()
        }
    }

    return inputControl

    
}
 
let manager = solution (); 
console.log(manager("restock flavour 50 "))
console.log(manager("prepare lemonade 4" ))
console.log(manager("restock carbohydrate 10"))
console.log(manager("restock flavour 10"))
console.log(manager("prepare apple 1"))
console.log(manager("restock fat 10"))
console.log(manager("prepare burger 1"))
console.log(manager("report"))

