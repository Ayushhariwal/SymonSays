let gameseq = []
let userseq = []
let btns = ["red" , "yellow" , "green" , "blue"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");


document.addEventListener("keypress" , function(){
    if(started == false){
       
        console.log("Game started");
        started = true;

        levelUp();
    }
})


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    } , 300)
}

function levelUp(){

    userseq = [];
    level ++;
    h3.innerText = `level ${level}`;

    let rndmIdx = Math.floor(Math.random() * 3);
    let rndColor = btns[rndmIdx];
    let randBtn = document.querySelector(`.${rndColor}`)
    gameseq.push(rndColor);
    console.log(gameseq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(gameseq[idx] === userseq[idx]){
        if(gameseq.length == userseq.length){
            setTimeout( levelUp, 1000);
        }
    }else{
        h3.innerHTML = `Game Over !!! your score is <b> ${level} </b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}
    

function btnpress(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

    for (btn of allBtns){
        btn.addEventListener("click", btnpress)
    }


    function reset(){
        started = false;
        gameseq = [];
        userseq = [];
        level = 0;
    }