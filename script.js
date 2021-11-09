const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

const ballSize = 20;
let ballx = cw/2 -ballSize/2;
let bally =  ch/2 -ballSize/2;

let ballSpeedx =17;
let ballSpeedy = 5;

const playerx = 70;
const aix = 910;

let playery = 70;
let aiy = 70;

///Funkcje

function player() {
ctx.fillStyle = 'white';
ctx.fillRect(playerx, playery, 10, 100);

}


    
 

function ball (){
    ctx.fillStyle = 'white';
    ctx.fillRect(ballx, bally, ballSize, ballSize);
    ballx += ballSpeedx
    bally += ballSpeedy
    
    if(bally <=0 || bally + ballSize >= ch){
        ballSpeedy = -ballSpeedy;
    }

    if(ballx <=0 || ballx+ballSize >= cw){
            ballSpeedx = -ballSpeedx ;  

    }
    ////interakcja AI
    if (ballx <= playerx) {
        ballx =-ballx;
        }
        ////interakcaja player
        if (ballx+20 >=aix) {
            ballx =-ballx;
            console.log(ballx)

        }
}

function iQ (){
           if(bally<=400){
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

}

setInterval(game,50);
