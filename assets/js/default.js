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

  if(localStorage.getItem('mode', 'normal') === 'simple') {
    return;
  }

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

  $('html').css('background-image', 'url("data:image/svg+xml,' + minimizeSvg(svg.outerHTML) + '")');

  lastBackgroundWidth = w;
  lastBackgroundHeight = h;
}

function minimizeSvg(svgString) {
  // Replace quotes with single quotes for use in element attribute
  svgString = svgString.replace(/"/g, "'");
  // Replace rgb to hex to for shortening
  svgString = svgString.replace(/rgb\(\d{3},\d{3},\d{3}\)/gi, function(snippet) {
    let r = parseInt(snippet.substr(4,3));
    let g = parseInt(snippet.substr(8,3));
    let b = parseInt(snippet.substr(12,3));
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  });
  // Undo some encoding for shortening
  svgString = encodeURIComponent(svgString).replace(/%(20|2F|3A|3D)/g, function(match) {
    switch (match) {
      case '%20': return ' ';
      case '%2F': return '/';
      case '%3A': return ':';
      case '%3D': return '=';
      default: throw new Error("Was not expecting " + match);
    }
  });
  return svgString;
}
