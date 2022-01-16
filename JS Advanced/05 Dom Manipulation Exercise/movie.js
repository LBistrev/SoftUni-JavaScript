class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = new Array();
        this.revenue = 0;
        this._ticketsSold = 0;
    }

    newScreening(date, hall, description) {
        console.log(date)
        
        for (let item of this.screenings) {
            console.log(item)
            if (!item == date && !item == hall) {
                this.screenings.push(date);
                return `New screening of ${this.movieName} is added.`
            } else {
                throw new Error(`Sorry, ${hall} hall is not available on ${date}`)
            }
        }
           
    }

    endScreening(date, hall, soldTickets) {

    }

    toString() {

    }
}


let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
