let swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
	  rotate: 20,
	  stretch: 0,
	  depth: 200,
	  modifier: 1,
	  slideShadows : true,
	},
	loop: true,
	autoplay: {
	  delay: 20000,
	  disableOnInteraction :false,
	},
	breakpoints: {
	  640: {
		 slidesPerView: 2,
		 spaceBetween: 10,
		 grabCursor: false,

	  },
	  768: {
		 slidesPerView: 2,
		 spaceBetween: 10,
		 grabCursor: false,
	  },
	  1024: {
		 slidesPerView: 3,
		 spaceBetween: 10,
		 grabCursor: false,
		},
	   1366: {
			slidesPerView: 4,
			spaceBetween: 10,
			grabCursor: false,
		 },
	}
});
 
let burger = document.querySelector(".navbar__burger");
let show = document.querySelector('.content__navbar--list')

function myFunc() {
	burger.addEventListener("click", function () {
		burger.classList.toggle('active')
		show.classList.toggle('showMenu')
		document.body.classList.toggle('disable__scroll')
	});
}
myFunc();

// let checkbox = document.querySelector('input[type="checkbox"]');
// let checks = document.querySelectorAll('input[type="checkbox"]')
// console.log(checks)

// checkbox.addEventListener('click', () => {
// 	console.log('checked')
// 	for (let i = 0; i < checks.length; i++)
// 		i[1].onclick;
// })
