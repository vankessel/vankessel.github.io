$(document).ready(function() {
  
  //Initialize background
  generateBackground();
  applyBlur();
  
  //Update on window resize
  $(window).resize(function() {
    //200ms before it can be applied again
    setTimeout(function() {
      generateBackground();
      applyBlur();
    }, 200);
  });
  
});

function generateBackground() {
  var canvas = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight,
    cell_size: 256,
    variance: 0.75,
    stroke_width: 2.01,
    seed: document.title
  }).canvas();
    
  $("html").css("background", "url(" + canvas.toDataURL() + ")");
}

function applyBlur() {
  $('.blur, .highlight').blurjs({
    source: 'html',
    radius: 16,
    overlay: 'rgba(255,255,255,0.10)'
  });
}