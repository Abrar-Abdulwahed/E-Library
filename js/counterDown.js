function randomDate(start, end) {
    return new Date(+start + Math.random() * (end - start));
}

var randomDateVar, distance;
const second = 1000;
const minutes = second * 60;
const hours = minutes * 60;
const days = hours * 24;
const now = new Date().getTime();

const getDistance =(randDate)=>{
    return randDate - now;
}
const getRemainDays = (distance)=>{
    return Math.floor(distance / days);
}
const getRemainHours = (distance)=>{
    return Math.floor((distance % days) / hours);
}
const getRemainMinutes = (distance)=>{
    return Math.floor((distance % hours) / minutes);
}
const getRemainSeconds = (distance)=>{
    return Math.floor((distance % minutes) / second);
}
const countDownFunc = (distance)=> {
    var noOfChildren = document.querySelectorAll('.offer-section .card-item');
    for(let i=0; i < noOfChildren.length; i++){
        randomDateVar = randomDate(new Date().getTime(), new Date(2022, 11, 20));
        distance = getDistance(randomDateVar);
        document.getElementById(`day${i+1}`).innerHTML = getRemainDays(distance);
        document.getElementById(`hours${i+1}`).innerHTML = getRemainHours(distance);
        document.getElementById(`min${i+1}`).innerHTML = getRemainMinutes(distance);
        document.getElementById(`sec${i+1}`).innerHTML = getRemainSeconds(distance);
        document.getElementById(`day${i+1}`).parentNode.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.left-in-days span').innerHTML = getRemainDays(distance);
    }
}
countDownFunc();