let handle
let minTimer = document.getElementById("timer-min")
let secondsTimer = document.getElementById("timer-sec")
let start = 0

function countDown(){
  start = secondsTimer.value
  counter()
}
function counter(){
  let seconds = totalSeconds()
  stopped = false
  if(seconds <= 0){
    console.log("stop")
    window.close();
  } else {
    handle = setTimeout(()=>{
      updateSeconds(totalSeconds() - 1)
      counter()
    },1000)
  }
}

function totalSeconds(){
  return parseInt(minTimer.value) * 60 + parseInt(secondsTimer.value)
}

function updateSeconds(newSeconds){
  let seconds = newSeconds % 60
  let minutes = Math.floor(newSeconds / 60)
  console.log(totalSeconds())
  secondsTimer.value = seconds
  minTimer.value = minutes 
}

function stop(){
  clearTimeout(handle);
}

function reset(){
  secondsTimer.value = start
}
