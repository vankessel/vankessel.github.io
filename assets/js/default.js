const wiki_regex = /wikipedia.org\/wiki\/([^\/]+)$/

let cached_wiki_data = {}

function get_wiki_data(topic, callback) {
  if (topic in cached_wiki_data) {
    callback(cached_wiki_data[topic])
  } else {
    $.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + topic, function(data) {
      cached_wiki_data[topic] = data;
      callback(data);
    })
  }

}

let jQueryReadyPromise = new Promise((resolve, reject) => {
  $(document).ready(function() {
    // resolve() will not return the function, which is okay.
    // Promise only needs to know jQuery is ready.
    resolve();

    generateBackground();
    $(window).resize(function() {
      generateBackground();
    });

    if(localStorage.getItem('mode') === 'simple') {
      $('#name').css({
        "-webkit-animation": "none",
        "animation": "none",
        "background-image": "none"
      });
    }

    let root = document.documentElement;
    root.addEventListener("mousemove", e => {
      root.style.setProperty('--mouse-x', e.pageX + "px");
      root.style.setProperty('--mouse-y', e.pageY + "px");
    });


    $('a').on( "mouseenter", function() {
      let match = $(this).attr("href").match(wiki_regex)
      if (match != null) {
        let root = document.documentElement;
        let offset = $(this).offset()
        offset['left'] += $(this).outerWidth() * 0.5
        offset['top'] += $(this).outerHeight()
        root.style.setProperty('--wiki-x', Math.round(offset['left']) + 'px');
        root.style.setProperty('--wiki-y', Math.round(offset['top']) + 'px');
        get_wiki_data(match[1], function (data) {
          $('#wiki-desc').html(data["extract_html"])
          if ("thumbnail" in data && "source" in data["thumbnail"]) {
            $('#wiki-image').attr("src", data["thumbnail"]["source"])
            $('#wiki-image').css("display", "block")
          } else {
            $('#wiki-image').attr("src", null)
            $('#wiki-image').css("display", "none")
          }
        });
        $('#wiki-preview').css("display", "block");
      }
    }).on( "mouseleave", function() {
      $('#wiki-preview').css("display", "none");
      $('#wiki-image').attr("src", null)
      $('#wiki-desc').html(null)
    });
  });
});

let mathJaxPromise = new Promise((resolve, reject) => {
  MathJax.Hub.Register.StartupHook('End', function() {
    resolve();
  });
});

Promise.all([jQueryReadyPromise, mathJaxPromise]).then(() => {
  // Sometimes MathJax overflows if the svg is too long.
  // Fix this by setting the max-width to 100% for both the svg and its container.
  // Remove fixed height attribute so scaled image maintains aspect ratio.
  let svgContainer = $('.MathJax_SVG_Display > span').css('max-width', '100%');
  $('> svg', svgContainer).removeAttr('height').css('max-width', '100%')
});

function generateBackground(seed = null) {

  if(localStorage.getItem('mode') === 'simple') {
    return;
  }

  let w = window.outerWidth;
  let h = window.outerHeight;

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
