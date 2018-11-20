$(document).ready(function() {
  main();
});

MathJax.Hub.Register.StartupHook("End", function() {
  generateBackground();
});

function main() {

  generateBackground();

  $(window).resize(function() {
    generateBackground();
  });

  // Set lightboxes for images in #post
  $("#post img").each(function() {
    $(this).attr("data-featherlight", $(this).attr("src"));
  });
}

function generateBackground(seed) {

  let pattern = Trianglify({
    width: $(document).width(),
    height: $(document).height(),
    cell_size: 192,
    variance: 0.75,
    stroke_width: 1.4,
    seed: seed || (new Date).toDateString() + document.title
  });

  let svg = pattern.svg();
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("version", "1.1");

  $("html").css( "background", "url('data:image/svg+xml;utf8," + encodeURIComponent(svg.outerHTML) + "')" );
}
