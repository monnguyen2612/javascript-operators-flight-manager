"use strict"
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
        if(typeof input !== 'number') {
            throw new Error('The input should be a number')
        }
        else if(input == "") {
            throw new Error('The input should not be empty')
        }
    }

    const calculateTotalDistance = (distances) => {
        distances = distances.filter(x => x > 0);
        return distances.reduce((cur, acc) => cur + acc, 0);
    }

    const calculateBonusPoints  = (distancesB, distancesE, busBonus, ecoBonus) => {
        let busPoints = calculateTotalDistance(distancesB)*busBonus/100;
        let ecoPoints = calculateTotalDistance(distancesE)*ecoBonus/100;
        return busPoints + ecoPoints;
    }
    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints}
}
module.exports = Util();
