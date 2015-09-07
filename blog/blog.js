$(document).ready(function() {
  $('blog-nav-tech').click(function()
  {
    $('cult').fadeOut();
    $('misc').fadeOut();
    $('tech').fadeIn();
  });

  $('blog-nav-cult').click(function()
  {
    $('cult').fadeIn();
    $('misc').fadeOut();
    $('tech').fadeOut();
  });

  $('blog-nav-misc').click(function()
  {
    $('cult').fadeOut();
    $('misc').fadeIn();
    $('tech').fadeOut();
  });

  $('blog-nav-all').click(function()
  {
    $('cult').fadeIn();
    $('misc').fadeIn();
    $('tech').fadeIn();
  });

});