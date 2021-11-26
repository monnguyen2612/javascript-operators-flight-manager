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
        const a = {
            vipPassengersWithBusinessSeats: 0,
            vipPassengersWithEconomySeats: 0,
            regularPassengersWithBusinessSeats: 0,
            regularPassengersWithEconomySeats: 0,
        };
        if (busSeats - vipPassengers > 0){
            vip_with_bus_seats = vipPassengers
            if (busSeats - vipPassengers - regurlarPassengers > 0)
                regular_with_bus_seats = regurlarPassengers
            else {
                regular_with_bus_seats = regurlarPassengers - busSeats - vipPassengers;
                vip_with_eco_seats = 0
            }
        }
        else {
            a.vipPassengersWithBusinessSeats =  busSeats;
            a.vipPassengersWithEconomySeats =  vipPassengers - busSeats;
            a.regularPassengersWithBusinessSeats = 0;
            a.regularPassengersWithEconomySeats = regurlarPassengers;
        }
        return a
    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers}
}

module.exports = Passengers();

function distributeAllSeatsToAllPassengers () {

}

