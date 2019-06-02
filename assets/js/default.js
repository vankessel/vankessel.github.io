let jQueryPromise = new Promise((resolve, reject) => {
  $(document).ready(function() {
    resolve();

    generateBackground();
    $(window).resize(function() {
      generateBackground();
    });

    if(localStorage.getItem('mode', 'normal') === 'simple') {
      $('#name').css({
        "-webkit-animation": "none",
        "animation": "none",
        "background-image": "none"
      });
    }
  });
});

let mathJaxPromise = new Promise((resolve, reject) => {
  MathJax.Hub.Register.StartupHook('End', function() {
    resolve();
  });
});

Promise.all([jQueryPromise, mathJaxPromise]).then(() => {
  // Sometimes MathJax overflows if the svg is too long.
  // Fix this by setting the max-width to 100% for both the svg and its container.
  // Remove fixed height attribute so scaled image maintains aspect ratio.
  let svgContainer = $('.MathJax_SVG_Display > span').css('max-width', '100%');
  $('> svg', svgContainer).removeAttr('height').css('max-width', '100%')

  generateBackground();
});

// I shouldn't be using globals but hey this is JS
let lastBackgroundWidth = null;
let lastBackgroundHeight = null;
function generateBackground(seed = null) {

  console.log('Mode: ' + localStorage.getItem('mode', 'normal'))
  if(localStorage.getItem('mode', 'normal') === 'simple') {
    return;
  }

  let w = $(document).width();
  let h = $(document).height();
  console.log('width: ' + w);
  console.log('height: ' + h);
  console.log('lWidth: ' + lastBackgroundWidth);
  console.log('lHeight: ' + lastBackgroundHeight);

  if(w === lastBackgroundWidth && h === lastBackgroundHeight) {
    return;
  }

  let cell_size = Math.min(Math.max(192, w*h*0.000005722), 384);
  console.log('cell_size: ' + cell_size);

  let pattern = Trianglify({
    width: w,
    height: h,
    cell_size: cell_size,
    variance: 0.75,
    stroke_width: 1.4,
    seed: seed || (new Date).toDateString() + document.title
  });

  console.log('Creating SVG');
  let svg = pattern.svg();
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('version', '1.1');

  console.log('Setting background');
  console.log('Length: ' + svg.outerHTML.length);
  console.log('Encoded length: ' + window.btoa(svg.outerHTML).length);
  console.log('Full length: ' + ('url(\'data:image/svg+xml;base64,' + window.btoa(svg.outerHTML) + '\')').length);
  $('html').css('background', 'url(\'data:image/svg+xml;base64,' + window.btoa(svg.outerHTML) + '\')' );

  console.log('Setting last dimensions');
  lastBackgroundWidth = w;
  lastBackgroundHeight = h;
}
