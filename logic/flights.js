function Flights() {
    const calculateNumberOfFlights = (passengers, capacity) => {
        if(!Number.isInteger(passengers) || passengers < 0)
           throw new Error('The number of passengers must be a positive integer value');
        if(!Number.isInteger(capacity) || capacity < 0)
           throw new Error('The capacity of the flight must be a positive integer value');
        return Math.ceil(passengers/capacity);
    }
    const checkAircraftRevision = (limit, distances) => {
        const totalDistance =  distances.reduce((acc,cur) => acc + cur, 0);
        if (totalDistance <= limit/2){
            return "The revision needs to be done within the next 3 months";
        } else if (totalDistance >= limit/2 && totalDistance <= limit*3/4) {
            return  "The revision needs to be done within the next 2 months";
        } else if (totalDistance >=  limit*3/4 && totalDistance < limit) {
            return "The revision needs to be done within the next month";
        } else {
            throw new Error()
        }
    }
    return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();