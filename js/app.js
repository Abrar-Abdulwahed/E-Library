// popup menu
function openForm() {
  document.getElementById("modal-dialog").style.display = "block";
}

function closeForm() {
  document.getElementById("modal-dialog").style.display = "none";
}


var countDownDate = new Date("Jan 29, 2022 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  const second = 1000;
  const minutes = second * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  var remain_days = Math.floor(distance / days);
  var remain_hours = Math.floor((distance % days) / hours);
  var remain_minutes = Math.floor((distance % hours) / minutes);
  var remain_seconds = Math.floor((distance % minutes) / second);

  document.getElementById("days").innerHTML = remain_days;
  document.getElementById("hours").innerHTML = remain_hours;
  document.getElementById("minutes").innerHTML = remain_minutes;
  document.getElementById("seconds").innerHTML = remain_seconds;
}, 1000);