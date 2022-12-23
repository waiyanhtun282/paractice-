const stopWatch = document.getElementsByClassName('stopwatch')[0];
const startButtonTag = document.getElementsByClassName('startButton')[0];
const pausetButtonTag = document.getElementsByClassName('pauseButton')[0];
const continueButtonTag = document.getElementsByClassName('cotinueButton')[0];
const restartButtonTag = document.getElementsByClassName('restartButton')[0];


let seconds=0
     minutes=0;
     hours=0;
     milliseconds=0;
const startTime = () =>{
milliseconds +=1;
  if(milliseconds===1000){
    milliseconds=0;
    seconds +=1;
  }
  if(seconds===60){
    seconds=0;
    minutes +=1;
  }

  if(minutes===60){
    minutes=0;
    hours +=1;
  }
let millisecondsText =milliseconds < 1000 ? '0'+milliseconds.toString() : milliseconds;
let secondsText=seconds <10 ? '0'+seconds.toString() : seconds;
let minutesText=minutes < 10 ? '0'+minutes.toString() :minutes;
let hoursText=hours < 10 ? '0'+hours.toString() :hours;
// console.log(hours,minutes,seconds)
  stopWatch.textContent=`${hoursText}  : ${minutesText} : ${secondsText}  : ${millisecondsText}`
}

let intevalId;
startButtonTag.addEventListener('click', ()=>{
  intevalId=setInterval(startTime,1000);
})

pausetButtonTag.addEventListener('click', ()=>{
  clearInterval(intevalId);
})

continueButtonTag.addEventListener('click', ()=>{
  clearInterval(intevalId);

  intevalId=setInterval(startTime,1000);
  
});

restartButtonTag.addEventListener('click', ()=>{
  clearInterval(intevalId);
  (minutes=0),(seconds=0),(hours=0); 
  intevalId=setInterval(startTime,1000);

});

let intevalId2;
startButtonTag.addEventListener('click', ()=>{
  intevalId2=setInterval(startTime,1);
})

pausetButtonTag.addEventListener('click', ()=>{
  clearInterval(intevalId2);
})

continueButtonTag.addEventListener('click', ()=>{
  clearInterval(intevalId2);

  intevalId=setInterval(startTime,1);
  
});

restartButtonTag.addEventListener('click', ()=>{
  clearInterval(intevalId2);
  (minutes=0),(seconds=0),(hours=0),(milliseconds=0); 
  intevalId=setInterval(startTime,1);

});