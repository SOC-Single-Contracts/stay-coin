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
function changeLanguage() {
    var language = document.getElementById("language-dropdown").value;
    console.log("Selected Language:", language);
    // Add integration with a translation library or custom translation logic here
}


// Initialize i18next with backend and browser language detector
i18next
  .use(i18nextHttpBackend) // Loads translations from your server
  .use(i18nextBrowserLanguageDetector) // Detects user language
  .init({
    fallbackLng: 'en', // Default language
    debug: true, // Enable debug mode for console logs
    returnObjects: true, // Enable returning objects and arrays
    backend: {
      loadPath: '../locales/{{lng}}/translation.json' // Path to language files
    },
    load: 'languageOnly', // Only use base language (e.g., 'en' instead of 'en-GB')
  }, function (err, t) {
    if (err) {
      console.error("Error loading i18next resources", err);
      return;
    }
    console.log("Initialization completed, translating content.");
    translateContent(); // Translate initial content
  });

// Event listener for language change
document.getElementById('language-dropdown').addEventListener('change', function (e) {
  console.log("Language change detected:", e.target.value);
  changeLanguage(e.target.value); // Update language on change
});

// Change language and translate content
function changeLanguage(newLang) {
  i18next.changeLanguage(newLang, () => {
    console.log("Language changed to:", newLang);
    translateContent(); // Re-translate content when language changes
  });
}

// Translate HTML content based on the selected language
function translateContent() {
  document.querySelectorAll('[data-i18n]').forEach(function (elem) {
    console.log("Translating element:", elem.getAttribute('data-i18n'));
    elem.innerHTML = i18next.t(elem.getAttribute('data-i18n')); // Update text based on current language
  });
}
function calculateTimeLeft() {
    const difference = +new Date('2024-12-31T00:00:00') - +new Date();
    if (difference <= 0) {
        return null;
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
}

function updateTimer() {
    const timeLeft = calculateTimeLeft();
    const timerElement = document.getElementById('timer');
    if (timeLeft) {
        timerElement.innerHTML = Object.entries(timeLeft).map(([key, value]) => {
            return `<div>${value} <span>${key}</span></div>`;
        }).join('');
    } else {
        timerElement.innerHTML = "<span>Time's up!</span>";
    }
}

setInterval(updateTimer, 1000);

function updateProgress() {
    const solanaAmount = parseInt(document.getElementById('solanaInput').value || 0);
    const staycoinAmount = parseInt(document.getElementById('staycoinInput').value || 0);
    const newProgress = Math.min(100, 60 + solanaAmount + staycoinAmount);
    document.getElementById('progress').style.width = `${newProgress}%`;
    document.getElementById('progress-text').innerText = `${newProgress}%`;
}

document.getElementById('solanaInput').addEventListener('change', updateProgress);
document.getElementById('staycoinInput').addEventListener('change', updateProgress);

function buyNow() {
    alert('Purchase initiated!');
}



