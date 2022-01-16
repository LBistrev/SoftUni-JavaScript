function text_to_JSON(input) {

    const splitted_row = input[0].split("|");
    const town = splitted_row[1].trim();
    const latitude = splitted_row[2].trim();
    const longitude = splitted_row[3].trim();

    const result = [];

    for (let i = 1; i < input.length; i++){
        const obj = {};
        const splitted_entry = input[i].split("|");
        obj[town] = splitted_entry[1].trim();
        obj[latitude] = Number(Number(splitted_entry[2].trim()).toFixed(2));
        obj[longitude] = Number(Number(splitted_entry[3].trim()).toFixed(2));

        result.push(obj);
    }
    
    return JSON.stringify(result);
}

text_to_JSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)

text_to_JSON(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
)