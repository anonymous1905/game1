function Pipe () {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 30;
  this.speed = 2;

this.highlight = false;

this.hits = function(bird) {
  if (bird.y < this.top || bird.y > height -this.bottom){
      if (bird.x > this.x && bird.x < this.x + this.w){
         this.highlight = true;
         score = score - 35;
      console.log(score);
        return true;
      }
  }

  else if (bird.y > this.top || bird.y < height -this.bottom){
    score = score + 0.15;
    console.log(score);
    $("#scoreBox").html("<p>" + 'Your bitcoin is worth' + "</p>" + "<br>" + score + "<p>" + "You are a Bitcoinaire !" + "</p>");
    return false;
  }
  this.highlight = false;

return false;

};


  this.show = function () {
    fill (255);
    if (this.highlight) {
      fill (255, 0, 0);
    }
    image(img2,this.x, 0, this.w, this.top);
    image(img2,this.x,height-this.bottom ,this.w, this.bottom);
  };

  this.update = function(){
    this.x -= this.speed;



};





}
