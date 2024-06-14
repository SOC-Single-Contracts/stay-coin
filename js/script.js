"use strict";

(function ($) {
	// Navbar classes.
	$(".navbar-toggler").on("click", function () {
		$(".header").toggleClass("opened");
		$("body").toggleClass("menu-opened");
	});

	// FAQ Accordion
	$(".section-faq__item-heading").on("click", function () {
		const heading = $(this);
		const content = heading.next();

		if (!heading.hasClass("opened")) {
			$(".section-faq__item-content").slideUp("slow");
			$(".section-faq__item-heading").removeClass("opened");
			$(".section-faq__item-icon").removeClass("opened");
			heading.addClass("opened");
			heading.find(".section-faq__item-icon").addClass("opened");
			content.slideDown("slow");
		} else {
			$(".section-faq__item-content").slideUp("slow");
			$(".section-faq__item-heading").removeClass("opened");
			$(".section-faq__item-icon").removeClass("opened");
			heading.removeClass("opened");
			heading.find(".section-faq__item-number").removeClass("opened");
			heading.find(".section-faq__item-icon").removeClass("opened");
			content.slideUp("slow");
		}
	});

	// Roadmap Accordion.
	$(".section-roadmap__item-heading").on("click", function () {
		const heading = $(this);
		const content = heading.next();

		if (!heading.hasClass("opened")) {
			$(".section-roadmap__item-number").removeClass("opened");
			$(".section-roadmap__item-heading").removeClass("opened");
			$(".section-roadmap__item-content").slideUp("slow");
			heading.addClass("opened");
			heading.find(".section-roadmap__item-number").addClass("opened");
			content.slideDown("slow");
		} else {
			$(".section-roadmap__item-number").removeClass("opened");
			$(".section-roadmap__item-heading").removeClass("opened");
			$(".section-roadmap__item-content").slideUp("slow");
			heading.removeClass("opened");
			heading.find(".section-roadmap__item-number").removeClass("opened");
			content.slideUp("slow");
		}
	});

	// Scroll-to-top button.
	$(window).on("load", function () {
		showScrollToTop();
	});

	$(".scroll-to-top").on("click", function () {
		$("html, body").stop().animate(
			{
				scrollTop: 0,
			},
			200,
			"linear"
		);
		return false;
	});

	function showScrollToTop() {
		const button = $(".scroll-to-top"),
			view = $(window);

		$(document).on("scroll", function () {
			if (view.scrollTop() < 400) {
				button.removeClass("scrolled");
			} else {
				button.addClass("scrolled");
			}
		});
	}

	// Search field.
	const searchFormOpen = $("#header_search_open"),
		searchFormClose = $("#header_search_close"),
		searchForm = $("#header_search_form");

	searchFormOpen.on("click", function (e) {
		searchForm.slideDown();
	});

	searchFormClose.on("click", function (e) {
		searchForm.slideUp();
	});

	// Swiper initialisation.
	const swiperHero = new Swiper(".section-hero__swiper", {
		autoplay: {
			delay: 2000,
		},
		autoplay: false,
		loop: true,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		speed: 1500,
		draggable: true,
		pagination: {
			el: ".section-hero .swiper-pagination",
			clickable: true,
		},
	});

	const swiperPartners = new Swiper(".section-partners__swiper", {
		slidesPerView: 3,
		freeMode: true,
		mousewheel: {
			releaseOnEdges: true,
		},
		spaceBetween: 20,
		breakpoints: {
			320: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			992: {
				slidesPerView: 6,
				spaceBetween: 30,
			},
			1201: {
				slidesPerView: 7,
				spaceBetween: 20,
			},
		},
		pagination: {
			el: ".section-partners .swiper-pagination",
			clickable: true,
		},
	});

	const swiperTeam = new Swiper(".section-gallery__swiper", {
		slidesPerView: 1,
		spaceBetween: 8,
		loop: true,
		draggable: true,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 8,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 16,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 16,
			},
			1200: {
				slidesPerView: 6,
				spaceBetween: 20,
			},
		},
		pagination: {
			el: ".section-gallery .swiper-pagination",
			clickable: true,
		},
	});

	const swiperTestimonials = new Swiper(".section-testimonials__swiper", {
		slidesPerView: 1,
		loop: true,
		draggable: true,
		autoHeight: true,
		pagination: {
			el: ".section-testimonials .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".section-testimonials__next",
			prevEl: ".section-testimonials__prev",
		},
	});
})(jQuery);
