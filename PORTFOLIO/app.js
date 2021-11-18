const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = 'rgb(0,0,.3)';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
	$(function(){
		var swiper = new Swiper(".swiper", {
			slidesPerView: 1,
			breakpoints: {
				// when window width is >= 320px
				320: {
				  slidesPerView: 2,
				  spaceBetween: 20
				},
				// when window width is >= 480px
				480: {
				  slidesPerView: 3,
				  spaceBetween: 30
				},
				// when window width is >= 640px
				640: {
				  slidesPerView: 2,
				  spaceBetween: 600
				}
			  },
			effect: 'creative',
				creativeEffect: {
					prev: {
					// will set `translateZ(-400px)` on previous slides
					translate: [0, 0, -400],
					},
					next: {
					// will set `translateX(100%)` on next slides
					translate: ['100%', 0, 0],
					},
					slidesPerView: 2, // 보여지는 슬라이드 수
					spaceBetween: 50, // 슬라이드 간의 거리(px 단위)
					loop: true, // 슬라이드 무한 반복
				},
			});
	})
