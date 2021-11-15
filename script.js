const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

const ballSize = 15;
let ballx = cw/2 -ballSize/2;
let bally =  ch/2 -ballSize/2;

let ballSpeedx =17;
let ballSpeedy = 5;

const playerx = 70;
const aix = 910;

let playery = 70;
let aiy = 70;

//Punkty

let sp =0;   
let sa =0;

///Funkcje

function player() {
ctx.fillStyle = 'white';
ctx.fillRect(playerx, playery, 10, 100);

}


    
 

function ball (){
    ctx.beginPath();
    ctx.fillStyle = 'rgb(20,59,200)';
    ctx.arc(ballx, bally, ballSize, 0, 2 * Math.PI);
    ctx.fill();
    ballx += ballSpeedx
    bally += ballSpeedy
    
    if(bally-ballSize <=0 || bally+ballSize >= ch){
        ballSpeedy = -ballSpeedy;
        
    }


    if(ballx <=0 || ballx+ballSize >= cw){
            ballSpeedx = -ballSpeedx ;  

    }
    ////interakcja PLAYER
}

  function playerball(){  
    if (ballx <= playerx ) {
        if(bally <=playery+100 && bally>=playery)
          ballSpeedx =-ballSpeedx ;
          
    }
}

function AIXBALL (){
        ////interakcaja AIX
        if (ballx+20 >=aix) {
            if(bally <=aiy+100 && bally>=aiy){
               ballSpeedx =-ballSpeedx ;
            }

        }
}
function score () {
 
ctx.font = "italic bold 50px Arial";
ctx.fillText(sp +":"+ sa, (cw/2)-20, ch/2);

if(ballx<=0){
sp+=1;
}
if(ballx+ballSize>=cw){
    sa+=1;
}

}
function iQ (){
           if(bally+100<=500){   
            aiy=bally;
             }
            
         }

        
        
             
function table() {

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 1000, 500);

}
function AI() {
    ctx.fillStyle = 'white';
    ctx.fillRect(aix, aiy, 10, 100);
}
function playerPosition(e) {
    playery = e.clientY - topCanvas;
    if(playery >= ch-100 ) {
        playery=400} ;
    }

topCanvas = canvas.offsetTop;


canvas.addEventListener("mousemove",playerPosition)


function game(){
table();
player();
AI();
iQ();
ball();
playerball();
AIXBALL();
score();

}

setInterval(game,40);
