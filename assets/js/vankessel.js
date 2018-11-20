$(document).ready(function() {
  generateBackground();
});

MathJax.Hub.Register.StartupHook("End", function() {
  main();
});

function main() {

  resetVisuals();

  //Perform actions and allow event to fire again after timeout so
  //these expensive functions don't get called many times during a resize
  var resizable = true;
  $(window).resize(function() {
    if(resizable) {
      resizable = false;
      resetVisuals();
      setTimeout(function() {
        resizable = true;
      }, 500)
    }
  });

  //Automatically set lightboxes for images in #post
  $("#post img").each(function() {
    $(this).attr("data-featherlight", $(this).attr("src"));
  });
}

function resetVisuals() {
  generateBackground();
  setTimeout(function() {
    applyBlur();
  }, 1000);
}

function applyBlur() {

  $('.blur').blurjs({
    source: 'html',
    radius: 16,
    overlay: 'rgba(255,255,255,0.20)'
  });
}

function generateBackground(seed) {

  let w = $(window).width();
  let h = $(document).height();

  let pattern = Trianglify({
    width: w,
    height: h,
    cell_size: 192,
    variance: 0.75,
    stroke_width: 1.4,
    seed: seed || (new Date).toDateString() + document.title
  });

  // document.body.appendChild(pattern.canvas());

  let svg = pattern.svg();
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("version", "1.1");

  $("html").css( "background", "url('data:image/svg+xml;utf8," + encodeURIComponent(svg.outerHTML) + "')" );
}
