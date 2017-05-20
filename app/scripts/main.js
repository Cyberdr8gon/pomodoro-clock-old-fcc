var currentTimeLeft = 0;
var clockIsTrue = false;

function updateClock() {
  if(currentTimeLeft >= 0) {
    $('#clock').html(Math.floor(currentTimeLeft / 60) + ':' + (currentTimeLeft % 60));
  }
    
  currentTimeLeft = currentTimeLeft ? currentTimeLeft - 1 : 0;
      
  if(currentTimeLeft == 0 && clockIsTrue) {
    alert('Time is Up!');
    clockIsTrue = false;
    return;

  } else if (currentTimeLeft == 0) {
    return; 
  } 
}

function setClock(mins) {
  clockIsTrue = true;
  currentTimeLeft = mins * 60;
}


setInterval(updateClock, 1000);
