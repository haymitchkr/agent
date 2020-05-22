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
});
$('[data-fancybox="gallery"]').fancybox({
	loop: true,
});