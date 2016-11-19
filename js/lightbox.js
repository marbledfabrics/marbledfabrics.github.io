
(function() {

  $('.lightbox').click(function() {
    var imgSrc = $(this).attr('src');
    var fileName = imgSrc.split('/').pop();
    
    $('body').append('<div class="overlay"></div><div class="lightbox-content"><img src="img/full-size/' + fileName + '"></div>')
  })

})();

