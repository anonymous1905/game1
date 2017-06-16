var bird;
var pipes = [];
var score = 0;
var bg;
var img;
var img2;

function setup () {
  bg = loadImage("bitcoinfuture.jpg");
  img = loadImage('bitcoin-pixelated.png');
  img2 = loadImage('coins.png');
  createCanvas (1000, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  createCanvas (1000, 600);
  background(bg);

  bird.update();
  bird.show();


  if (frameCount % 100 === 0){
    pipes.push(new Pipe());
  }



  for (var i = 0; i < pipes.length; i++) {
     pipes[i].show();
     pipes[i].update();

  if (pipes[i].hits(bird)) {
    console.log("HIT");
  }


   }

document.addEventListener('touchstart', keyPressed);
}
function keyPressed() {
  if (key == ' ') {
    bird.up();
    console.log('SPACE');

  }

}
