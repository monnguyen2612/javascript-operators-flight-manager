function Util() {
    const calculateTotalDistributedPassengers = (passengers) => {
        let sum = 0;
        Object.keys(passengers).forEach((key) => {
            sum += passengers[key];
        });
        return sum;
    }
    const calculateTotalNumberOfPassengers = (passengers) => {
        return passengers.reduce((acc,cur) => acc + cur, 0)
    }
    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers}
}
module.exports = Util();
