function road_radar(speed_km, area) {
    let motorway_speed = 130
    let interstate_speed = 90
    let city_speed = 50
    let residential_speed = 20

    let diff = 0
    let speed_zone = 0
    let over_limit = ""

    switch (area) {
        case "motorway":
            speed_zone = motorway_speed
            break;
        case "interstate":
            speed_zone = interstate_speed
            break
        case "city":
            speed_zone = city_speed
            break
        case "residential":
            speed_zone = residential_speed
            break
    }
    if (speed_km > speed_zone) {
        diff = speed_km - speed_zone
    }
    if (diff != 0) {
        if (diff <= 20) {
            over_limit = "speeding";
        } else if (diff <= 40) {
            over_limit = "excessive speeding";
        } else {
            over_limit = "reckless driving"
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speed_zone} - ${over_limit}`)
    } else {
        console.log(`Driving ${speed_km} km/h in a ${speed_zone} zone`)
    }
}

road_radar(40, 'city')
road_radar(21, 'residential')
road_radar(120, 'interstate')
road_radar(200, 'motorway')


function radar(speed, area) {
    const motorway = 130
    const interstate = 90
    const city = 50
    const residential = 20
    let speed_area = ""
    let diff = 0

    switch (area) {
        case "motorway":
            speed_area = motorway
            break
        case "interstate":
            speed_area = interstate
            break
        case "city":
            speed_area = city
            break
        case "residential":
            speed_area = residential
            break
    }
        if (speed_area > speed) {
            diff = speed_area - speed
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speed_area} - ${area}`)
        }
    }

console.log("--------------")
radar(21, 'residential')