// var a=$('input').val();
function show(){
    var a=$('input').val();
    switch (a) {
        case '1':
          console.log('a=1');
          $('div').html('a=1');
          break;
        case '2':
            console.log('a=2');
            $('div').html('a=2');
            break;
        case '3':
          console.log('a=3');
          $('div').html('a=3');
          break;
        default:
          console.log(`a>3`);
      }
}
$(window).scroll(function () {
  var scrollVal = $(this).scrollTop();
  // console.log('yuyu', scrollVal);

  if (scrollVal > ($(".s1").offset().top - 100)) {
      // console.log('ff', $(".sa").offset().top);
      // $('body,html').animate({scrollTop: $('.s1').offset().top}, 800);
  }

});
$('.menu p:nth-child(1)').on('click',function(){
  $('body,html').animate({scrollTop: $('.s1').offset().top}, 800);
})
$('.menu p:nth-child(2)').on('click',function(){
  $('body,html').animate({scrollTop: $('.s2').offset().top+130}, 800);
})
$('.menu p:nth-child(3)').on('click',function(){
  $('body,html').animate({scrollTop: $('.s3').offset().top}, 800);
})
$('.menu p:nth-child(4)').on('click',function(){
  $('body,html').animate({scrollTop: $('.s4').offset().top+100}, 800);
})