$(document).ready(function() {

// next image
  $('.fa-angle-right').click(function() {

    var activeImg = $('.active');
    activeImg.removeClass('active').next().addClass('active');
    if (activeImg.hasClass('last')) {
      var firstImg = $('.first');
      firstImg.addClass('active');
    }else {
      activeImg.removeClass('active').next().addClass('active');
    }

  })

// previous image
  $('.fa-angle-left').click(function() {

    $('.active').removeClass('active').prev().addClass('active');

  })

})
