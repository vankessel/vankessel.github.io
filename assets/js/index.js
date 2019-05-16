$(document).ready(function() {
  main();
});

MathJax.Hub.Register.StartupHook('End', function() {
  // Sometimes MathJax overflows if the svg is too long.
  // Fix this by setting the max-width to 100% for both the svg and its container.
  // Remove fixed height attribute so scaled image maintains aspect ratio.
  let svgContainer = $('.MathJax_SVG_Display > span').css('max-width', '100%');
  $('> svg', svgContainer).removeAttr('height').css('max-width', '100%')

  generateBackground();
});

function main() {

  if($('#comments').length !== 0) {
    loadComments();
  }

  // Set lightboxes for images in #post
  $('#post img').each(function() {
    if($(this).data('featherlight') !== '') {
      return;
    }
    // Default to a scheme where if featherlight is not explicitly set
    // use .png at same path for the high quality version of the image
    let lq = $(this).attr('src');
    let hq = lq.substr(0, lq.lastIndexOf('.')) + '.png'
    $(this).data('featherlight', hq);
  });

  $(window).resize(function() {
    generateBackground();
  });
}

function loadComments() {
  var url = 'https://www.reddit.com/' + $('#comments').data('reddit') + '.embed';
  $.ajax(url, {
    dataType: 'jsonp',
    jsonpCallback: 'insertComments'
  });
}

function insertComments(data) {
  let comments = $('#comments');
  let reddit = comments.data('reddit');

  // Empty the comments container and fill it with retrieved comments
  comments.empty().append(data);

  // Remove styling and logo
  $('*', comments).removeAttr('style');
  $('a:has(img)', comments).remove();

  // Replace default link with shortened version
  $('.reddit-title > a', comments)
    .text('reddit.com/' + reddit)
    .attr('href', 'https://www.reddit.com/' + reddit);

  // Fix user links
  $('.reddit-link a:first-child', comments).each(function() {
    let url = $(this).attr('href');
    let match = url.match(/^.+\/(.+)$/);
    // Fix link if username found, otherwise remove link
    if(match.length === 2) {
      let username = match[1];
      $(this).attr('href', 'https://www.reddit.com/u/' + username);
    } else {
      $(this).replaceWith($(this).html());
    }
  });

  // If there are no comments, fill with placeholder
  if($('.rembeddit-content > div').is(':empty')) {
    comments.empty();
    comments.append(
      $('<h2>Comment on this post at <a href=\'https://www.reddit.com/' + reddit + '\'>reddit.com/' + reddit + '</a></h2>')
    );
  }

  generateBackground();
}

function generateBackground(seed = null) {

  let w = $(document).width();
  let h = $(document).height();
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
}
