$(function () {
	$('.text-slider').slick({
		arrows: false,
		fade: true,
		draggable: false,
		swipe: false,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnFocus: false,
		pauseOnHover: false,
	});
	$('.header__slider').slick({
		arrows: false,
		fade: true,
		draggable: false,
		swipe: false,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnFocus: false,
		pauseOnHover: false,
	})
	$('.advantages__slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
  $('.team__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      infinity: false,
      arrows: true,
      prevArrow: $('.prev-arrow'),
      nextArrow: $('.next-arrow'),
  });
});
$('[data-fancybox="gallery"]').fancybox({
	loop: true,
});
$(document).ready(function (){
  $('.table__load-btn').click(function(){
    $('.mobile-hidden').removeClass('mobile-hidden');
    $('.table__load-btn').css({
      'display':'none'
    });
  });
  let teamTotal = $('.slick-track').children('.team-item').length;
  $(function(){
    $('.total-number').text(teamTotal);
    console.log(teamTotal);
  });
  $('.current-number--normal').each(function(i){
    $(this).text(++i);
  });
  $('.current-number--xsm').each(function(x){
    $(this).text(++x);
  });
});
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
$(window).scroll(function(){                              // отслеживаем событие
   let pageHeight = $(document).height();               //page height
   if ( $(window).scrollTop() >= (pageHeight*0.2)){                   // ставим условие
      $('.link-top').css('display','block');         // определяем действие
   } else {
    $('.link-top').css('display','none');
   };
});