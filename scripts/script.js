$(document).ready(function() {
    $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
});
});

$(function(){
  $('.activity-slider').slick({
          infinite: true,
          arrows:true,
          slidesToShow: 3,
          slidesToScroll: 3,
      centerMode: true,
      centerPadding: '60px',
      prevArrow: ' <img class="arrow arrow-left" style="transform:rotate(-90deg)" src="images/arrow2.png" alt="">',
      nextArrow: ' <img class="arrow arrow-right" style="transform:rotate(90deg)" src="images/arrow2.png" alt="">',
      

  responsive:[
  {
    breakpoint:1000,
    settings:{
    slidesToScroll:1,
    slidesToShow:2,
    centerPadding: '40px',
    centerMode:false
    }},

 {
    breakpoint:550,
    settings:{
    slidesToScroll:1,
    slidesToShow:1,
    centerPadding:'20px',
    
    }
}

],
    });
});