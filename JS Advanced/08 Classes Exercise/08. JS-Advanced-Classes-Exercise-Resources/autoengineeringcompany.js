function solve(input) {

    const carBrands = new Map();

    input.forEach((el) => {
        let [brand, model, count] = el.split(" | ")
        count = Number(count);

        if (carBrands.has(brand)) {
            let carBrand = carBrands.get(brand);
            
            if (carBrand.has(model)) {
                let carModel = carBrand.get(model)
                carModel += count;
                carBrand.set(model, carModel)
                
            } else {
                carBrand.set(model, count);
            }
        } else {
            const modelMap = new Map()
            modelMap.set(model, )
        }
    })
    
    for (const key of carBrands.keys()) {
        console.log(key);
        const brandddd = carBrands.get(key);
        for (const [modelKey, counter] of brandddd) {
            console.log(`###${modelKey} -> ${counter}`)
        }
    }
}


solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])