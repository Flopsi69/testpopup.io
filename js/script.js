$(document).ready(function(){

	window.open('/', 'example', 'width=600,height=400');
  // $('.open-popup-link').click(function(e){
  //   e.preventDefault();
  //   $('.shadow-popup').fadeIn();
  // })

  $('.open-popup-link').click(function(e){
  	e.preventDefault();
  	window.open('form.html', 'example', 'width=600,height=400');
  })

  // $('.form-wrapper .close-popup').click(function(e){
  //   e.preventDefault();
  //   $('.shadow-popup').fadeOut();
  // })
})