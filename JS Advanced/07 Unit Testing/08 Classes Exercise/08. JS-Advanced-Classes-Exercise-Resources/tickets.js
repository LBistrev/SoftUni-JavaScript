function solve(tickets, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const ticketsArr = [];
    tickets.forEach((data) => {
        let [destination, price, status] = data.split("|");
        ticketsArr.push(new Ticket(destination, Number(price), status));
    })

    if (criteria == "destination") {
        ticketsArr.sort((a, b) => {
            return a.destination.localeCompare(b.destination)
        }) 
    } else if (criteria == "status") {
        ticketsArr.sort((a, b) => {
            return a.status.localeCompare(b.status)
        }) 
    } else {
        ticketsArr.sort((a, b) => {
            return a.price - b.price
        }) 
    } 

    return ticketsArr;
}


solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')


solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status')
