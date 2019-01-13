$(document).ready(function() {
  main();
});

MathJax.Hub.Register.StartupHook("End", function() {
  generateBackground();
});

function main() {

  // Set lightboxes for images in #post
  $("#post img").each(function() {
    if($(this).attr("data-featherlight") !== '') {
      return;
    }
    // Default to a scheme where if featherlight is not explicitly set
    // use .png at same path for the high quality version of the image
    let lq = $(this).attr("src");
    let hq = lq.substr(0, lq.lastIndexOf(".")) + ".png"
    $(this).attr("data-featherlight", hq);
  });

  $(window).resize(function() {
    generateBackground();
  });
}

function generateBackground(seed = null) {
  if (!window.matchMedia("(orientation: landscape)").matches) {
    $("html").css("background", "darkslategray");
    return;
  }

  let w = $(document).width();
  let h = $(document).height();
  let cell_size = Math.min(Math.max(192, w*h*0.000005722), 384);

  console.log("Generating background: " + w + 'x' + h);
  console.log("Cell size: " + cell_size);

  let pattern = Trianglify({
    width: w,
    height: h,
    cell_size: cell_size,
    variance: 0.75,
    stroke_width: 1.4,
    seed: seed || (new Date).toDateString() + document.title
  });

  let svg = pattern.svg();
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("version", "1.1");

  $("html").css("background", "url('data:image/svg+xml;base64," + window.btoa(svg.outerHTML) + "')" );
}
