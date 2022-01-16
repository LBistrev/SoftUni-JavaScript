function solve(fruit,weight, money) { // weight in grams
    let weight_kg = weight / 1000
    let money_needed = weight_kg * money
    
    console.log(`I need $${money_needed.toFixed(2)} to buy ${weight_kg.toFixed(2)} kilograms ${fruit}.`)
}

solve('apple', 1563, 2.35)