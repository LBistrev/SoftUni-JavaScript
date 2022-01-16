function array_to_object(arr) {
    let products = {};
    for (let i = 0; i < arr.length; i+= 2) {
        products[arr[i]] = Number(arr[i+1])
    }
    console.log(products)

}

array_to_object(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])

array_to_object(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])
