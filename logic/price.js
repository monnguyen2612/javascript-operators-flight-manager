function Prices() {
    function calculateFinalPrice(basePrice, varPassengerType, varFlightType) {
        return Number(basePrice) + fromPercentageToValue(basePrice, varPassengerType) + fromPercentageToValue(Number(basePrice) + fromPercentageToValue(basePrice, varPassengerType), varFlightType);
    }
    function fromPercentageToValue (base, percent) {
        return Number((base/100) * percent);
    }
    function calculateDefaultFinalPrice(basePrice, passengerType, flightType){
        const enumType = {
            REGULAR: -5,
            VIP: 5,
            ECONOMY: -3,
            BUSINESS: 10,
        };
        return calculateFinalPrice(basePrice, enumType[passengerType.toUpperCase()], enumType[flightType.toUpperCase()]);
    }

    function calculateTotalFinalPrice (seats, passengerType, flightType, basePrice) {
        return seats*calculateDefaultFinalPrice( basePrice, passengerType, flightType)
    }
    return {calculateFinalPrice, calculateTotalFinalPrice}
}

module.exports = Prices;

