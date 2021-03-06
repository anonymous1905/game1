function Bird() {
  this.y = height/2;
  this.x = 64;

this.gravity = 0.6;
this.lift = -15;
this.velocity = 0;

  this.show = function() {
    image(img, this.x-11, this.y-11, 50, 50);
  };

this.up = function() {
  this.velocity += this.lift;
};

this.update = function () {
  this.velocity += this.gravity;
  this.y += this.velocity;
  this.velocity *= 0.9;



if (this.y > height){
  this.y = height;
  this.velocity = 0;

  if (this.y < 0) {
    this.y = 0 ;
    this.velocity = 0;
  }
}

};


}
