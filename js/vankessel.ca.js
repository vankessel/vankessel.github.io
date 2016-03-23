$(window).load(function() {
  generateBackground();
  applyBlur();
});

$(document).ready(function() {
  
  setCenterContainerWidth();
  
  var resizable = true;
  //Update on window resize
  $(window).resize(function() {
    if(resizable) {
      resizable = false;
      //Perform actions and allow event to fire again after timeout
      setTimeout(function() {
        //Reset .center-container width
        setCenterContainerWidth();
        generateBackground();
        applyBlur();
        resizable = true;
      }, 500)
    }
  });
  
});

function setCenterContainerWidth() {
  
  var w = $(window).width();
  var h = $(window).height();
  
  //If landscape
  if(w > h) {
    $('.center-container').css('width', h * 32 / 45); //Magic beauty-constant
  }
  //If portrait
  else {
    $('.center-container').css('width', '100%');
  }
}

function generateBackground(seed) {
  
  var w = $(document).width();
  var h = $(document).height();
  var seed = seed == null ? "" : seed;
  
  var svg = Trianglify({
    width: w,
    height: h,
    cell_size: 256,
    variance: 0.75,
    stroke_width: 1.4,
    seed: "Tue Mar 22 2016" + document.title + seed //(new Date).toDateString()
  }).svg();
  
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("version", "1.1");
  
  $("html").css( "background", "url('data:image/svg+xml;utf8," + encodeURIComponent(svg.outerHTML) + "')" );
}

function applyBlur() {
  
  $('.blur').blurjs({
    source: 'html',
    radius: 16,
    overlay: 'rgba(255,255,255,0.20)'
  });
}

/*
I need to document my struggle for those who come after me. This shit took me days.
I was trying to generate an svg image and then set the css background to it.
I read that you can simply put your svg code right after data:image/svg+xml;utf8,
and that it will be read correctly. Nope, didn't work. So I learned that one can
encode the string as a uri with safe characters (e.g. # -> %23) and that would likely
fix it. Nope. Then I learned there are different uri encodings, encodeURIComponent() being
more strict than encodeURI(), so I tried that. Nope. After many hours sulking stackoverflow, 
comparing code on jsfiddle, and generally looking in the wrong direction I found my answer.
svg.outerHTML doesn't return the element's code with the fucking xmlns attribute. (xmlns
defines the namespace for the xml, in this case, svg). I also added the version number
attribute just to be safe, but it works without it.
*/