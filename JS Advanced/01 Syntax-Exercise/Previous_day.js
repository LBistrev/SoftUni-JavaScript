function calc_previous_day(year, month, day) {
    let date = new Date(year, month, day)
    console.log(date.getFullYear(), date.getMonth(), date.getDate())
    
}

calc_previous_day(2016, 9, 30)
calc_previous_day(2016, 10, 1)
