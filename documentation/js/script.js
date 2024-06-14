"use strict";

(function ($) {
	// FAQ Accordion
	$(".section-faq__item-heading").on("click", function () {
		const heading = $(this);
		const content = heading.next();

		if (!heading.hasClass("opened")) {
			$(".section-faq__item-content").slideUp("slow");
			$(".section-faq__item-heading").removeClass("opened");
			heading.addClass("opened");
			heading.find(".section-faq__item-number").addClass("opened");
			heading.find(".section-faq__item-icon").addClass("opened");
			content.slideDown("slow");
		} else {
			$(".section-faq__item-content").slideUp("slow");
			$(".section-faq__item-heading").removeClass("opened");
			heading.removeClass("opened");
			heading.find(".section-faq__item-number").removeClass("opened");
			heading.find(".section-faq__item-icon").removeClass("opened");
			content.slideUp("slow");
		}
	});
})(jQuery);
