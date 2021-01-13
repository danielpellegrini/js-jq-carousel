$(document).ready(function() {

  $('.fa-angle-right').click(function() {
    $('.active.first').removeClass('active').next().addClass('active first');
  })

  $('.fa-angle-left').click(function() {
    $('.active.first').removeClass('active').prev().addClass('active first');
  })

})
