var requiredScriptsFinished = {
  jquery: false,
  mathjax: false
};

$(document).ready(function() {
  if(checkReady('jquery')) {
    main();
  }
});

MathJax.Hub.Register.StartupHook("End", function() {
  if(checkReady('mathjax')) {
    main();
  }
});

function checkReady(scriptName) {
  requiredScriptsFinished[scriptName] = true;
  return Object.values(requiredScriptsFinished).every(identity)
}

function main() {

  resetVisuals();

  var resizable = true;
  $(window).resize(function() {
    if(resizable) {
      resizable = false;
      //Perform actions and allow event to fire again after timeout so
      //these expensive functions don't get called many times during a resize
      setTimeout(function() {
        resetVisuals();
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
  setCenterContainerWidth();
  generateBackground();
  applyBlur();
}

function applyBlur() {

  $('.blur').blurjs({
    source: 'html',
    radius: 16,
    overlay: 'rgba(255,255,255,0.20)'
  });
}

function setCenterContainerWidth() {

  var w = $(window).width();
  var h = $(window).height();

  //If landscape
  if(w > h) {
    $('#center-container').css('width', '40em'); //Magic beauty-constant
  }
  //If portrait
  else {
    $('#center-container').css('width', '90%');
  }
}

function generateBackground(seed) {

  var w = $(document).width();
  var h = $(document).height();
  var seed = seed == null ? "" : seed;

  var svg = Trianglify({
    width: w,
    height: h,
    cell_size: 192,
    variance: 0.75,
    stroke_width: 1.4,
    seed: (new Date).toDateString() + document.title + seed //"Tue Mar 22 2016"
  }).svg();

  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("version", "1.1");

  $("html").css( "background", "url('data:image/svg+xml;utf8," + encodeURIComponent(svg.outerHTML) + "')" );
}

function identity(x) {
  return x;
}
