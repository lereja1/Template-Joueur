
let player;

function setup() {
    createCanvas(600, 600);
   
    player = new Player(300,300);
} 
function draw() {
    background(51);

    player.move();
    player.input();
    player.draw();

}

