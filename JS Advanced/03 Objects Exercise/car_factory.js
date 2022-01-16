function factory(car_obj) {
    let carModel = {}

    function createEngine(power) {

        

        if (power <= 90) {
            return {power: 90, volume: 1800}
        } else if (power <= 120) {
            return {power: 120, volume: 2400}
        }
        return {power: power, volume: 3500}
    }

    let FindWheelSize = car_obj.wheelsize % 2 == 0 ? car_obj.wheelsize - 1 : car_obj.wheelsize
    carModel.model = car_obj.model
    carModel.engine = createEngine(car_obj.power)
    carModel.carriage = {type: car_obj.carriage, color: car_obj.color}
    carModel.wheels = new Array(4).fill(FindWheelSize, 0, 4)

    return carModel
}

console.log(factory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
))

console.log(factory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
) )