"use strict"
function Passengers() {
    const checkFlightCapacity = (capacity, passengers) => {
        totalPassengers = passengers.reduce((a,c) => a + c, 0);
        if (capacity >= totalPassengers){
            return totalPassengers;
        }
        else {
            throw new Error()
        }
    }
    const distributeAllSeatsToAllPassengers = (vipPassengers, regurlarPassengers, flights, busSeats, ecoSeats) => {
        busSeats *= flights;
        ecoSeats *= flights;
        const a = {
            vipPassengersWithBusinessSeats: 0,
            vipPassengersWithEconomySeats: 0,
            regularPassengersWithBusinessSeats: 0,
            regularPassengersWithEconomySeats: 0,
        };
        if (busSeats - vipPassengers > 0){
            a.vipPassengersWithBusinessSeats = vipPassengers;
            if (regurlarPassengers > busSeats - vipPassengers) {
                a.regularPassengersWithBusinessSeats = busSeats - vipPassengers;
                regurlarPassengers>ecoSeats?a.regularPassengersWithEconomySeats = ecoSeats - a.regularPassengersWithBusinessSeats:a.regularPassengersWithEconomySeats = regurlarPassengers - a.regularPassengersWithBusinessSeats;
            } else {
                a.regularPassengersWithBusinessSeats = regurlarPassengers
                a.regularPassengersWithEconomySeats = 0;
            }
        } else if (busSeats - vipPassengers === 0) {
            a.vipPassengersWithBusinessSeats = vipPassengers;
            if (ecoSeats - regurlarPassengers > 0)
                a.regularPassengersWithEconomySeats = regurlarPassengers;
            else 
                a.regularPassengersWithEconomySeats = ecoSeats;
        } else {
            a.vipPassengersWithBusinessSeats =  busSeats;
            a.vipPassengersWithEconomySeats =  vipPassengers - busSeats;
            a.regularPassengersWithBusinessSeats = 0;
            a.regularPassengersWithEconomySeats = Math.min(ecoSeats - a.vipPassengersWithEconomySeats, regurlarPassengers)
        }
        return a
    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers}
}

module.exports = Passengers();

function distributeAllSeatsToAllPassengers () {

}

