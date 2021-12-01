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

    const checkInput = (input) => {
        if(typeof input === 'Number') {
            throw new Error()
        }
    }

    const calculateTotalDistance = (distances) => {
        return distances.reduce((cur, acc) => cur + acc, 0)
    }

    const calculateBonusPoints = (distancesB, distancesE, busBonus, ecoBonus) => {
        busPoints = calculateTotalDistance(distancesB)*busBonus;
        ecoPoints = calculateTotalDistance(distancesE)*ecoBonus;
        return busPoints + ecoPoints;
    }
    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints}
}
module.exports = Util();
