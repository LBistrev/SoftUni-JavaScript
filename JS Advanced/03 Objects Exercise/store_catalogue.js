function store(arr) {
    const productCatalogue = {};

    arr.forEach((el) => {
        let [productName, price] = el.split(" : ");
        price = Number(price);
        const index = productName[0];
        if (!productCatalogue[index]) {
            productCatalogue[index] = {}
        }
        productCatalogue[index][productName] = price;

    })

    let initialSort = Object.keys(productCatalogue).sort((a, b) => a.localeCompare(b));

    for (const key of initialSort) {
        let products = Object.entries(productCatalogue[key]).sort((a, b) => a[0].localeCompare(b[0]));
        
        console.log(key);
        products.forEach((el) => {
            console.log(`  ${el[0]}: ${el[1]}`)
        })
    }
}

store(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)
 /*
function store_catalogue(input) {
    let result = {}

    for (let data of input) {
        let [item, price] = data.split(" : ")
        price = Number(price)
        let first_letter_index = item[0]
        if (!result[first_letter_index]) {
            result[first_letter_index] = {}
        }

        result[first_letter_index][item] = price
        
    }
    
    let sortedItems = Object.keys(result).sort()

    for (let key of sortedItems) {
        console.log(key)

        let sortedValues = Object.entries(result[key]).sort()
        for (let data of sortedValues) {
            console.log(`  ${data[0]}: ${data[1]}`)
        }
    }

}

store_catalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)

console.log("--------")

store_catalogue(['Banana : 2',
'Rubics Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
)
*/