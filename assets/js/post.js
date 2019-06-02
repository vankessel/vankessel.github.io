$(document).ready(function() {
  initPost();
});

function initPost() {
  // Load comments if the element exists
  if($('#comments').length !== 0) {
    loadComments();
  }
}

function loadComments() {
  // Load comments from reddit using jsonp
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
