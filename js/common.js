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
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  centerMode: false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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