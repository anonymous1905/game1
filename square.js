window.onload = function() {
  $("#theGame").hide();
  $("#landingPage").show();
  $('#Swagger').hide();
  $(canvas).hide();
};

document.getElementById('startGame').onclick = function(){

  $("#theGame").show ();
  $("#landingPage").hide();
  $('#Swagger').show();
  $(canvas).show();
  // setup();
  // setInterval(function(){
  //   draw();
  // }, 20);
};
