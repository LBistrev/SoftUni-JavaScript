function inventory(input) {
    let inventory_result = [];
    for (let data of input) {
        let [name, level, items] = data.split(" / ")
        level = Number(level)
        items = items ? items.split(", ") : []

        inventory_result.push({
            name, 
            level, 
            items
        })
    }

    console.log(JSON.stringify(inventory_result))
}

inventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)

inventory(['Jake / 1000 / Gauss, HolidayGrenade'])