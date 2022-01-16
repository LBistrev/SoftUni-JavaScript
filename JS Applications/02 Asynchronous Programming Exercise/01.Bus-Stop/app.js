async function getInfo() {
    // read input value
    let input = document.getElementById("stopId").value;
    const stopNameDiv = document.getElementById("stopName");
    const ulBusInfo = document.getElementById("buses");

    // make request to server
    const url = `http://localhost:3030/jsonstore/bus/businfo/${input}`

    try {

        stopNameDiv.textContent = "Loading...";
        ulBusInfo.innerHTML = "";
        const response = await fetch(url);
        
        // check Error
        if (response.status != 200) {
            throw new Error(response.status)
        }
        document.getElementById("submit").disabled = true;
        const data = await response.json()
        stopNameDiv.textContent = data.name;
        
        Object.entries(data.buses).forEach(bus => {
            let liElement = document.createElement("li");
            let busNumber = bus[0];
            let nextBus = bus[1];
            liElement.textContent = `Bus ${busNumber} arrives in ${nextBus} minutes`
            ulBusInfo.appendChild(liElement);
        }); 

    } catch (error) {
        stopNameDiv.textContent = "Error";
    };
}
