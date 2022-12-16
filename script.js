const nameOnPass = "Joe";
console.log(`Passenger Name: ${nameOnPass}`);

const nameOnId = "Joe";
const nameMatch = nameOnPass === nameOnId;
console.log(`ID confirmed? ${nameMatch}`);

const length = 27;
const isLengthExcess = length < 30;
const height = 54;
const isHeightExcess = height < 55;
const isHandBaggageEligible = isLengthExcess && isHeightExcess;
console.log(`Is Hand Baggage Eligible? ${isHandBaggageEligible}`);

const flightDes = "Lima";
const returnFrom = "London";
const isRoundTrip = flightDes === returnFrom;
console.log(`Round Trip Check? ${isRoundTrip}`);

const bookings = 73;
const totalCapacity = 200;
const isFlightAvailable = totalCapacity > bookings;
console.log(`Are seats available? ${isFlightAvailable}`);

document.querySelector("#name").innerHTML = nameOnPass;
document.querySelector("#id").innerHTML = nameMatch;
document.querySelector("#bag").innerHTML = isHandBaggageEligible;
document.querySelector("#des").innerHTML = isRoundTrip;
document.querySelector("#seat").innerHTML = isFlightAvailable;
