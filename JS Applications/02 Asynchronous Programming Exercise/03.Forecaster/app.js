function attachEvents() {
    const sendBtn = document.getElementById("submit")
    sendBtn.addEventListener("click", getForecast);
}

attachEvents();

async function getCurrentWeather() {
    const name =  document.getElementById("location").value;
    
    const forecastDiv = document.getElementById('forecast');
    forecastDiv.style.display = "block";

    let code = await getLocationCode(name)
    let [currentWeather, upcomingWeather] = await Promise.all([getTodayWeather(code), getNextWeather(code)]);
  
    const currentSymbol = getWeather(currentWeather.forecast.condition)
    const low = currentWeather.forecast.low;
   
    const high = currentWeather.forecast.high;

    const divElement = document.createElement("div");
    divElement.className = "forecasts";

    let spanElement = document.createElement("span");
    spanElement.className = "conditional symbol";
    spanElement.innerHTML = `${currentSymbol}`

    let nextSpanElement = document.createElement("span");
    nextSpanElement.className = "condition";

    let locationSpan = document.createElement('span')
    locationSpan.className = 'forecast-data'
    locationSpan.textContent = currentWeather.name

    let degreesSpan = document.createElement('span')
    degreesSpan.className = 'forecast-data'
    degreesSpan.textContent = `${low}\\${high}`

    let weatherSpan = document.createElement('span')
    weatherSpan.className = 'forecast-data'
    weatherSpan.textContent = `${currentWeather.forecast.condition}`

    nextSpanElement.appendChild(locationSpan);
    nextSpanElement.appendChild(degreesSpan);
    nextSpanElement.appendChild(weatherSpan);

    divElement.appendChild(spanElement);
    divElement.appendChild(nextSpanElement);

    forecastDiv.appendChild(divElement);

}

async function getNextThreeDays() {
    const name =  document.getElementById("location").value;
    
    const forecastDiv = document.getElementById('forecast-info');

    let code = await getLocationCode(name)
    let [currentWeather, upcomingWeather] = await Promise.all([getTodayWeather(code), getNextWeather(code)]);
  
    const currentSymbol = getWeather(upcomingWeather.forecast.condition)
    const low = currentWeather.forecast.low;
   
    const high = currentWeather.forecast.high;

    let forecastsDiv = document.createElement('div')
    forecastsDiv.className = 'forecast-info'

    let parentSpan = document.createElement('span')
    parentSpan.className = 'upcoming'

    let symbolSpan = document.createElement('span')
    symbolSpan.className = 'symbol'
    symbolSpan.innerHTML = getWeatherSymbol(currentCondition)

    let highLowSpan = document.createElement('span')
    highLowSpan.className = 'forecast-data'
    highLowSpan.innerHTML = low + '&#176' + '/' + high + '&#176'

    let conditionData = document.createElement('span')
    conditionData.className = 'forecast-data'
    conditionData.innerHTML = currentCondition

    parentSpan.appendChild(symbolSpan)
    parentSpan.appendChild(highLowSpan)
    parentSpan.appendChild(conditionData)

    // forecastsDiv.appendChild(parentSpan)

    upcomingForecastDiv.appendChild(parentSpan)

}

function getWeather(condition) {

    let weatherSymbol = {
        "Sunny": "&#x2600",
        "Partly sunny": "&#x26C5",
        "Overcast": "&#x2601",
        "Rain": "&#x2614",
        "Degrees": "&#176"
    }

    return weatherSymbol[condition]
}

async function getLocationCode(name) {
   
    try {
        const url = `http://localhost:3030/jsonstore/forecaster/locations`;
        const response = await fetch(url);
        const data = await response.json();
        
        const locationName = data.find(loc => loc.name == name);
        if (locationName == false) {
            throw new Error(response.status)
        }
        return locationName.code;
    } catch (error) {
        return error
    };
    
}

async function getTodayWeather(code) {
    // code
    const url = `http://localhost:3030/jsonstore/forecaster/today/` + code;
    const response = await fetch(url);
    
    const data = await response.json();
    return data;
}

async function getNextWeather(code) {

    const url = `http://localhost:3030/jsonstore/forecaster/upcoming/` + code;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
    
/*
    function attachEvents() {
        let submitButton = document.getElementById('submit')
        let forecastDiv = document.getElementById('forecast')
        let currentForecastDiv = document.getElementById('current')
        let upcomingForecastDiv = document.getElementById('upcoming')
    
        submitButton.addEventListener('click', () => {
            let location = document.getElementById('location').value
            
            getData(location)
            forecastDiv.style.display = 'block'
        })
        async function getData(location)
        {
            try{
                let url = `http://localhost:3030/jsonstore/forecaster/locations`
                let res = await fetch(url)
                let data = await res.json()
                let locationCodeIndex = data.map(targetObject => targetObject.name).indexOf(location)
                let locationCode = data[locationCodeIndex].code
                
                let currentConditionsRequest = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationCode}`)
                let currentConditionsData = await currentConditionsRequest.json()
        
                let currentCondition = currentConditionsData.forecast.condition
                let currentHigh = currentConditionsData.forecast.high
                let currentLow = currentConditionsData.forecast.low
    
                let fullLocationName = currentConditionsData.name
    
                createCurrentForecastDiv(fullLocationName, currentCondition, currentHigh, currentLow)
        
                let threeDaysForecastRequest = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`)
                let threeDaysForecastData = await threeDaysForecastRequest.json()
    
                for(let forecast in threeDaysForecastData.forecast)
                {
                    let condition = threeDaysForecastData.forecast[forecast].condition
                    let high = threeDaysForecastData.forecast[forecast].high
                    let low = threeDaysForecastData.forecast[forecast].low
                    createThreeDaysForecastDiv(condition, high, low)
                }
            }
            catch
            {
                console.log('Error')
            }
    
    
        }
        function createCurrentForecastDiv(location, currentCondition, currentHigh, currentLow)
        {
            let forecastsDiv = document.createElement('div')
            forecastsDiv.className = 'forecasts'
    
            let weatherSymbolSpan = document.createElement('span')
            weatherSymbolSpan.className = `condition symbol`
            weatherSymbolSpan.innerHTML = getWeatherSymbol(currentCondition)
    
            let parentSpan = document.createElement('span')
            parentSpan.className = 'condition'
    
            let locationSpan = document.createElement('span')
            locationSpan.className = 'forecast-data'
            locationSpan.textContent = location
    
            let highLowSpan = document.createElement('span')
            highLowSpan.className = 'forecast-data'
            highLowSpan.innerHTML = currentLow + '&#176' + '/' + currentHigh + '&#176'
    
            let weatherSpan = document.createElement('span')
            weatherSpan.className = 'forecast-data'
            weatherSpan.textContent = currentCondition
    
            parentSpan.appendChild(locationSpan)
            parentSpan.appendChild(highLowSpan)
            parentSpan.appendChild(weatherSpan)
    
            forecastsDiv.appendChild(weatherSymbolSpan)
            forecastsDiv.appendChild(parentSpan)
    
            currentForecastDiv.appendChild(forecastsDiv)
        }
    
        function createThreeDaysForecastDiv(currentCondition, high, low)
        {
            // parentSpan.innerHTML = ''
            let forecastsDiv = document.createElement('div')
            forecastsDiv.className = 'forecast-info'
    
            let parentSpan = document.createElement('span')
            parentSpan.className = 'upcoming'
    
            let symbolSpan = document.createElement('span')
            symbolSpan.className = 'symbol'
            symbolSpan.innerHTML = getWeatherSymbol(currentCondition)
    
            let highLowSpan = document.createElement('span')
            highLowSpan.className = 'forecast-data'
            highLowSpan.innerHTML = low + '&#176' + '/' + high + '&#176'
    
            let conditionData = document.createElement('span')
            conditionData.className = 'forecast-data'
            conditionData.innerHTML = currentCondition
    
            parentSpan.appendChild(symbolSpan)
            parentSpan.appendChild(highLowSpan)
            parentSpan.appendChild(conditionData)
    
            // forecastsDiv.appendChild(parentSpan)
    
            upcomingForecastDiv.appendChild(parentSpan)
            console.log(upcomingForecastDiv)
    
    
        }
    
        function getWeatherSymbol(currentCondition)
        {
            let weatherSymbol = ''
            switch(currentCondition)
            {
                case 'Sunny':{
                    weatherSymbol = '&#x2600';
                    break;
                }
                case 'Partly sunny':{
                    weatherSymbol = '&#x26C5';
                    break;
                }
                case 'Overcast':{
                    weatherSymbol = '&#x2601';
                    break;
                }
                case 'Rain':{
                    weatherSymbol = '&#x2614';
                    break;
                }
                case 'Degrees':{
                    weatherSymbol = '&#176';
                    break;
                }
            }
            return weatherSymbol
        }
    }
    
    attachEvents();
}


*/