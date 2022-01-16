function lowest_prices(arr_string) {
    let result = {}

    for (let data of arr_string) {
        let [town, product, price] = data.split(" | ")
        price = Number(price)
        if (!result[product]) {
            result[product] = {};
        }
        result[product][town] = price

    };

    for (const productName in result) {
        const sortedProducts = Object.entries(result[productName]).sort((a, b) => a[1] - b[1])
    
        console.log(`${productName} -> ${sortedProducts[0][1]} (${sortedProducts[0][0]})`)
    }
}
    


lowest_prices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)
