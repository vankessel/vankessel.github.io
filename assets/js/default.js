$(document).ready(function() {
  generateBackground();
  $(window).resize(function() {
    generateBackground();
  });
});

// I shouldn't be using globals but hey this is JS
let lastBackgroundWidth = null;
let lastBackgroundHeight = null;
function generateBackground(seed = null) {

  let w = $(document).width();
  let h = $(document).height();

  if(w === lastBackgroundWidth && h === lastBackgroundHeight) {
    return;
  }

  let cell_size = Math.min(Math.max(192, w*h*0.000005722), 384);

  let pattern = Trianglify({
    width: w,
    height: h,
    cell_size: cell_size,
    variance: 0.75,
    stroke_width: 1.4,
    seed: seed || (new Date).toDateString() + document.title
  });

  let svg = pattern.svg();
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('version', '1.1');

  $('html').css('background', 'url(\'data:image/svg+xml;base64,' + window.btoa(svg.outerHTML) + '\')' );

  lastBackgroundWidth = w;
  lastBackgroundHeight = h;
}
