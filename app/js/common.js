$(document).ready(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
	});

	$(".main-footer .toggle-mnu").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});

	$(".arrow-bottom").click(function() {
		$("html, body").animate({ scrollTop: $(".main-head").height()+120 }, "slow");
		return false;
	});

	$(".homesect .section-head p, .homesect .section-head h2").animated("fadeInRight");

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$(".section_4").waypoint(function() {

			$(".section_4 .card").each(function(index) {
				var ths = $(this);
				setInterval(function() {
					ths.removeClass("card-off").addClass("card-on");
				}, 200*index);
			});

		}, {
			offset : "20%"
	});

	$(".section_5").waypoint(function() {

			$(".section_5 .tc-item").each(function(index) {
				var ths = $(this);
				setTimeout(function() {
					var myAnimation = new DrawFillSVG({
						elementId: "tc-svg-" + index
					});
					ths.children(".tc-content").addClass(".tc-content-on");
				}, 500*index);
			});

			this.destroy();

		}, {
			offset : "20%"
	});

	$(".slider").owlCarousel({
		items : 1,
		nav : true, 
		navText : "",
		loop : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600 
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
