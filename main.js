$(document).ready(function() {

  // next image
  $('.fa-angle-right').click(function() {

    var activeImg = $('.active');
    activeImg.removeClass('active').next().addClass('active');
    if (activeImg.hasClass('last')) {
      var firstImg = $('.first');
      firstImg.addClass('active');
    } else {
      activeImg.removeClass('active').next().addClass('active');
    }


  });

  // previous image
  $('.fa-angle-left').click(function() {

    var activeImg = $('.active');
    activeImg.removeClass('active').prev().addClass('active');
    if (activeImg.hasClass('first')) {
      var lastImg = $('.last');
      lastImg.addClass('active');
    } else {
      activeImg.removeClass('active').prev().addClass('active');
    }

  })

  // keydown function
  $(document).keydown(function() {

    if (event.which === 39) {
      console.log('right');
    } else if (event.which === 37) {
      console.log('left');
    }

  });
});
