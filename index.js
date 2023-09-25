const returnFirstTwoDrivers = function () {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0, 2);
};
console.log(returnFirstTwoDrivers());

const returnLastTwoDrivers = function () {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(-2);
};

const selectingDrivers = (function () {
    return [returnFirstTwoDrivers, returnLastTwoDrivers];
})();

console.log(selectingDrivers[0]());





function createFareMultiplier(fare) {
    return function () {
        return fare*5;
    }
}
console.log(createFareMultiplier(5));


function fareDoubler(fare) {
    const doubles = function (fare) {
        return fare*2;
    }
    return doubles(10);
}
console.log(fareDoubler());



function fareTripler(fare) {
    const triples = function (fare) {
       return fare*3;
    }
    return triples(12);
}
console.log(fareTripler());



function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers();
};








