function solve() {
    // get fields
    const stationInfo = document.querySelector("#info span");
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive")

    // make obj for all stations
    let busStations = {
        next: "depot"
    }

    async function depart() {
        
        departBtn.disabled = true;
        // activate other button
        arriveBtn.disabled = false;

        // get information about next stop
        const url = `http://localhost:3030/jsonstore/bus/schedule/${busStations.next}`;

        const response = await fetch(url);
        busStations = await response.json();
        stationInfo.textContent = `Next stop ${busStations.name}`
    }

    function arrive() {

        // display name of current stop
        stationInfo.textContent = `Arriving at ${busStations.name}`

        // activate other button
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }
    return {
        depart,
        arrive
    };
}

let result = solve();
