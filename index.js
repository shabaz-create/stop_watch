const buttonContainer=document.querySelector(".buttonContainer");
const time=document.querySelector(".time");
let min=0;
let sec=0;
let hour=0;
let timerId;

function handleClick(event){
let button=event.target.name;
    if(button=="start"){

     timerId=setInterval(()=>{
        sec++;
        if(sec>59){
            sec=0;
            min++;
            if(min>59){
                sec=0;
                min=0;
                hour++;
            }
        }
        time.innerText=`${hour<10 ?`0${hour}`:hour} : ${min<10 ?`0${min}`:min} : ${sec<10 ?`0${sec}`:sec}`
    }
    ,1)
    }

    if(button=="stop"){
    clearInterval(timerId);
    }
    if(button=="reset"){
    sec=0;
    min=0;
    hour=0;
    time.innerText=`${hour<10 ?`0${hour}`:hour} : ${min<10 ?`0${min}`:min} : ${sec<10 ?`0${sec}`:sec}`
    }
    console.log(event.target.name)
}



buttonContainer.addEventListener("click",handleClick);

