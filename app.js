// 전역변수
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
// 이벤트 토글
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});
// 스크롤 내려올 때 색변경
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = 'rgb(0,0,.3)';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});
// 햄버거 토글
menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
// 스와이퍼 기능

		var swiper = new Swiper(".swiper01", {
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			  type: 'bullets',
			},
			breakpoints: {
				640: {
				  slidesPerView: 1,
				  spaceBetween: 20,
				},
				768: {
				  slidesPerView: 1,
				  spaceBetween: 20,
				},
				1200: {
				  slidesPerView: 3,
				  spaceBetween: 30,
				},
			},
		  });

		//   호버 이벤트
		$(function(){
			$('.project-info').on({
				'mouseenter':function(){
					$('.project-info h1').css('color','black')
				},
				'mouseleave':function(){
					$('.project-info h1').css('color','#ddd')
				}
			})
		})

		//   const infoBg = document.getElementsByClassName('.project-info')
		//   const infoTxt = document.getElementsByClassName('.project-info h1')
		  
		//   infoBg.addEventListener('mouseenter', () => {
		// 	hamburger.classList.toggle('active');
		// 	mobile_menu.classList.toggle('active');
		// });