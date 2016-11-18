
(function () {

  var testArray = [];

  $('.lightbox').each(function() {
  var imgSrc = $(this).attr('src');
  var fileName = imgSrc.split('/').pop();
  testArray.push(fileName);
})

console.log(testArray);



})();

