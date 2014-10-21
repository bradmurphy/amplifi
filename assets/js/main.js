var amplifiAPI = (function () {

	var public = {};
	var pageHolder = $('.page-holder');
  var page = pageHolder.find('.page');
  var controls = $('.circle');
	var pageWidth = page.outerWidth(true);
	var slide;
	var slidePos;
	var scrollPos;
	var artistLoginStatus;
	var fanLoginStatus;

	// DEV CLICK LOGIC
	// function carouselLogic(e) {

	// 	var self = $(this);
	// 	var selfPos = self.index();
	// 	var pageWidth = page.outerWidth(true);
	// 	var scrollPos = selfPos * pageWidth;

	// 	console.log(self, selfPos, scrollPos);

	// 	e.preventDefault();

	// 	TweenMax.to(".pages-wrap", 0.5, {
	// 		scrollTo:{x: scrollPos},
	// 		ease: Power4.easeInOut
	// 	});

	// 	$(".circle").removeClass("orange");
	// 	$(this).addClass("orange");

	// }

	// CLICK EVENTS
	function clickEvents() {

		// FAN ANIMATION OPEN
		function fanAnimationOpen() {

				// FAN POPUP ANIMATION
				TweenMax.to(".pop-up", 1, { 
					top: "25%",
					ease: Power4.easeInOut
				});
				TweenMax.to([".arrow-up"], 1, {
					css:{autoAlpha: 1},
					ease: Power4.easeInOut
				});
				TweenMax.to(["#artistLogin", ".arrow-one", ".arrow-two"], 0.35, {
					css:{autoAlpha: 0},
					ease: Power4.easeInOut
				});
				TweenMax.to(["#fanLogin"], 1, {
					y: "-10%",
					ease: Power4.easeInOut
				});

				// CHANGE "CHOOSE" TEXT TO "LOGIN"
				$("#crazyButton").hide().html("login").css("cursor", "pointer").fadeIn("slow");

				// ADD ICON TO POPUP
				$("#fanDown").show();

				// FAN STATUS
				fanLoginStatus = true;

		}

		// ARTIST ANIMATION OPEN
		function artistAnimationOpen() {

			// ARTIST POPUP ANIMATION
			TweenMax.to(".pop-up", 1, { 
				top: "25%",
				ease: Power4.easeInOut
			});
			TweenMax.to([".arrow-one", ".arrow-two"], 0.35, {
				css:{autoAlpha: 0},
				ease: Power4.easeInOut
			});
			TweenMax.to(".arrow-up", 1, {
				css:{autoAlpha: 1},
				ease: Power4.easeInOut
			});
			TweenMax.to(["#artistLogin", "#fanLogin"], 1, {
				y: "-110%",
				ease: Power4.easeInOut
			});

			// CHANGE "CHOOSE" TEXT TO "LOGIN"
			$("#crazyButton").hide().html("login").css("cursor", "pointer").fadeIn("slow");

			// ADD ICON TO POPUP
			$("#artistDown").show();

			// ARTIST STATUS
			artistLoginStatus = true;

		}

		// FAN ANIMATION CLOSE
		function fanAnimationClose() {

			// FAN POPUP ANIMATION
			TweenMax.to(".pop-up", 1, { 
				top: "100%",
				ease: Power4.easeInOut
			});
			TweenMax.to([".arrow-up"], 1, {
				css:{autoAlpha: 0},
				ease: Power4.easeInOut
			});
			TweenMax.to(["#artistLogin", ".arrow-one", ".arrow-two"], 0.35, {
				css:{autoAlpha: 1},
				ease: Power4.easeInOut
			});
			TweenMax.to(["#fanLogin"], 1, {
				y: "0%",
				ease: Power4.easeInOut
			});

			// CHANGE TEXT
			$("#crazyButton").hide().html("choose").css("cursor", "initial").fadeIn("slow");

			// REMOVE ICON FROM POPUP
			$("#fanDown").hide().fadeOut("slow");

			// FAN STATUS
			fanLoginStatus = false;

		}

		// ARTIST ANIMATION CLOSE
		function artistAnimationClose() {

			// ARTIST POPUP ANIMATION
			TweenMax.to(".pop-up", 1, { 
				top: "100%",
				ease: Power4.easeInOut
			});
			TweenMax.to([".arrow-one", ".arrow-two"], 0.35, {
				css:{autoAlpha: 1},
				ease: Power4.easeInOut
			});
			TweenMax.to(".arrow-up", 1, {
				css:{autoAlpha: 0},
				ease: Power4.easeInOut
			});
			TweenMax.to(["#artistLogin", "#fanLogin"], 1, {
				y: "0%",
				ease: Power4.easeInOut
			});

			// CHANGE TEXT
			$("#crazyButton").hide().html("choose").css("cursor", "intitial").fadeIn("slow");

			// REMOVE ICON FROM POPUP
			$("#artistDown").hide().fadeOut("slow");

			// ARTIST STATUS
			artistLoginStatus = false;

		}

		// SOCIAL LOGIN ANIMATION
		function login() {

			var loginButton = $("#crazyButton").html();

			if(loginButton === "login") {

				slide = $("#two");
				slidePos = slide.index();
				scrollPos = slidePos * pageWidth;

				console.log(slide, slidePos, scrollPos);

				TweenMax.to(".pages-wrap", 0.5, {
					scrollTo:{x: scrollPos},
					ease: Power4.easeInOut
				});

				$(".circle").removeClass("orange");
				$(".circle:nth-child(2)").addClass("orange");

				$("#crazyButton").hide().html("find an artist").css("cursor", "initial").fadeIn("slow");

				if (fanLoginStatus) {
					setTimeout(function(){

						// FAN POPUP ANIMATION
						TweenMax.to(".pop-up", 1, { 
							top: "100%",
							ease: Power4.easeInOut
						});
						TweenMax.to([".arrow-up"], 1, {
							css:{autoAlpha: 0},
							ease: Power4.easeInOut
						});
						TweenMax.to(["#artistLogin", ".arrow-one", ".arrow-two"], 0.35, {
							css:{autoAlpha: 1},
							ease: Power4.easeInOut
						});
						TweenMax.to(["#fanLogin"], 1, {
							y: "0%",
							ease: Power4.easeInOut
						});

						// REMOVE ICON FROM POPUP
						$("#fanDown").hide().fadeOut("slow");

						// FAN STATUS
						fanLoginStatus = false;

					}, 250);
				}

				if (artistLoginStatus) {
					setTimeout(function() {

						// ARTIST POPUP ANIMATION
						TweenMax.to(".pop-up", 1, { 
							top: "100%",
							ease: Power4.easeInOut
						});
						TweenMax.to([".arrow-one", ".arrow-two"], 0.35, {
							css:{autoAlpha: 1},
							ease: Power4.easeInOut
						});
						TweenMax.to(".arrow-up", 1, {
							css:{autoAlpha: 0},
							ease: Power4.easeInOut
						});
						TweenMax.to(["#artistLogin", "#fanLogin"], 1, {
							y: "0%",
							ease: Power4.easeInOut
						});

						// REMOVE ICON FROM POPUP
						$("#artistDown").hide().fadeOut("slow");

						// ARTIST STATUS
						artistLoginStatus = false;

					}, 250);
				}

			}

		}

		// ARTIST ANIMATION
		function artist() {

			var loginButton = $("#crazyButton").html();

			if(loginButton === "find an artist") {

				// ANIMATE SLIDE
				slide = $("#three");
				slidePos = slide.index();
				scrollPos = slidePos * pageWidth;

				TweenMax.to(".pages-wrap", 0.5, {
					scrollTo:{x: scrollPos},
					ease: Power4.easeInOut
				});

				// CHANGE PAGER
				$(".circle").removeClass("orange");
				$(".circle:nth-child(3)").addClass("orange");

				// CHANGE TEXT
				$("#crazyButton").hide().html("venues").fadeIn("slow");

			}

		}

		// VENUE ANIMATION
		function venue() {

			var loginButton = $("#crazyButton").html();

			if(loginButton === "venues") {

				// ANIMATE SLIDE
				slide = $("#four");
				slidePos = slide.index();
				scrollPos = slidePos * pageWidth;

				TweenMax.to(".pages-wrap", 0.5, {
					scrollTo:{x: scrollPos},
					ease: Power4.easeInOut
				});

				// CHANGE PAGER
				$(".circle").removeClass("orange");
				$(".circle:nth-child(4)").addClass("orange");

				// CHANGE TEXT
				$("#crazyButton").hide().html("petition").fadeIn("slow");

			}

		}

		// PETITION ANIMATION
		function petition() {

			var loginButton = $("#crazyButton").html();

			if(loginButton === "petition") {

				// ANIMATE SLIDE
				slide = $("#five");
				slidePos = slide.index();
				scrollPos = slidePos * pageWidth;

				TweenMax.to(".pages-wrap", 0.5, {
					scrollTo:{x: scrollPos},
					ease: Power4.easeInOut
				});

				// CHANGE PAGER
				$(".circle").removeClass("orange");
				$(".circle:nth-child(5)").addClass("orange");

				// CHANGE TEXT
				$("#crazyButton").hide().html("petition <span>(signature)</span>").fadeIn("slow");

			}

		}

		// SUBMIT ANIMATION
		function submit() {

			var loginButton = $("#crazyButton").html();

			if(loginButton === "petition <span>(signature)</span>") {

				// ANIMATE SLIDE
				slide = $("#six");
				slidePos = slide.index();
				scrollPos = slidePos * pageWidth;

				TweenMax.to(".pages-wrap", 0.5, {
					scrollTo:{x: scrollPos},
					ease: Power4.easeInOut
				});

				// CHANGE PAGER
				$(".circle").removeClass("orange");
				$(".circle:nth-child(6)").addClass("orange");

				// CHANGE TEXT
				$("#crazyButton").hide().html("share").fadeIn("slow");

			}

		}

		// FAN POPUP CLICK EVENT
		$("#fanLogin").on("click", fanAnimationOpen);
		$("#fanDown").on("click", fanAnimationClose);

		// ARTIST POPUP CLICK EVENT
		$("#artistLogin").on("click", artistAnimationOpen);
		$("#artistDown").on("click", artistAnimationClose);

		// SOCIAL LOGIN EVENT
		$(".login").on("click", login);

		// ON FOCUS SEARCH EVENT
		$("#search").focus(function() {
		    $(this).attr('placeholder', 'i.e. ARTIST, GENRE');
		}).blur(function() {
		    $(this).attr('placeholder', 'SEARCH');
		});

		// ARTIST CLICK EVENT
		$(".artist").on("click", artist);

		// VENUE CLICK EVENT
		$(".venue").on("click", venue);

		// VENUE CLICK EVENT
		$(".sign-this").on("click", petition);

		// SUBMIT CLICK EVENT
		$(".submit").on("click", submit);
		
	}

	// SWIPE EVENTS
	function swipeEvents() {

		// PAGE TWO
		var page2 = document.getElementById("two");
		var page2Swipe = new Hammer(page2);

		page2Swipe.on("swipe swipeleft", function(ev) {

			if (ev.direction == 4) {
				console.log("from right to left");
				// ANIMATE SLIDE
				slide = $("#one");
				slidePos = slide.index();
				scrollPos = slidePos * pageWidth;

		    TweenMax.to(".pages-wrap", 0.5, {
		    	scrollTo:{x: scrollPos},
		    	ease: Power4.easeInOut
		    });

		    // CHANGE PAGER
		    $(".circle").removeClass("orange");
		    $(".circle:nth-child(1)").addClass("orange");

		    // CHANGE TEXT
		    $("#crazyButton").hide().html("choose").fadeIn("slow");

			}

		});

		// PAGE THREE
		var page3 = document.getElementById("three");
		var page3Swipe = new Hammer(page3);

		page3Swipe.on("swipe swipeleft", function(ev) {

			if (ev.direction == 4) {

				// ANIMATE SLIDE
				slide = $("#two");
				slidePos = slide.index();
				scrollPos = slidePos * pageWidth;

		    TweenMax.to(".pages-wrap", 0.5, {
		    	scrollTo:{x: scrollPos},
		    	ease: Power4.easeInOut
		    });

		    // CHANGE PAGER
		    $(".circle").removeClass("orange");
		    $(".circle:nth-child(2)").addClass("orange");

		    // CHANGE TEXT
		    $("#crazyButton").hide().html("find an artist").fadeIn("slow");

		   }

		});

		// PAGE FOUR
		var page4 = document.getElementById("four");
		var page4Swipe = new Hammer(page4);

		page4Swipe.on("swipe swipeleft", function(ev) {

			if (ev.direction == 4) {

				// ANIMATE SLIDE
				slide = $("#three");
				slidePos = slide.index();
				scrollPos = slidePos * pageWidth;

		    TweenMax.to(".pages-wrap", 0.5, {
		    	scrollTo:{x: scrollPos},
		    	ease: Power4.easeInOut
		    });

		    // CHANGE PAGER
		    $(".circle").removeClass("orange");
		    $(".circle:nth-child(3)").addClass("orange");

		    // CHANGE TEXT
		    $("#crazyButton").hide().html("venues").fadeIn("slow");

		   }

		});

		// PAGE FIVE
		var page5 = document.getElementById("five");
		var page5Swipe = new Hammer(page5);

		page5Swipe.on("swipe swipeleft", function(ev) {

			if (ev.direction == 4) {

				// ANIMATE SLIDE
				slide = $("#four");
				slidePos = slide.index();
				scrollPos = slidePos * pageWidth;

		    TweenMax.to(".pages-wrap", 0.5, {
		    	scrollTo:{x: scrollPos},
		    	ease: Power4.easeInOut
		    });

		    // CHANGE PAGER
		    $(".circle").removeClass("orange");
		    $(".circle:nth-child(4)").addClass("orange");

		    // CHANGE TEXT
		    $("#crazyButton").hide().html("petition").fadeIn("slow");

		  }

		});

		// PAGE SIX
		var page6 = document.getElementById("six");
		var page6Swipe = new Hammer(page6);

		page6Swipe.on("swipe swipeleft", function(ev) {

			if (ev.direction == 4) {

				// ANIMATE SLIDE
				slide = $("#five");
				slidePos = slide.index();
				scrollPos = slidePos * pageWidth;

		    TweenMax.to(".pages-wrap", 0.5, {
		    	scrollTo:{x: scrollPos},
		    	ease: Power4.easeInOut
		    });

		    // CHANGE PAGER
		    $(".circle").removeClass("orange");
		    $(".circle:nth-child(5)").addClass("orange");

		    // CHANGE TEXT
		    $("#crazyButton").hide().html("petition <span>(signature)</span>").fadeIn("slow");

		  }

		});

	}

	// INIT FUNCTION
	function init() {

		// DEV CLICK EVENT
		// $(".circle").on('click', carouselLogic);

		// CALL EVENT ANIMATIONS
		clickEvents();
		swipeEvents();

	}

	// PUBLIC FUNCTIONS
	public.init = init;


	// RETURN PUBLIC
	return public;

}());

$(document).on("ready", amplifiAPI.init);

// PRELOADER WINDOW LOADING EVENT

$(window).load(function() {

	TweenMax.to(".overlay img", 1, {
		css:{autoAlpha: 1},
		ease: Power1.easeInOut
	});

	$(".overlay").delay(2500).fadeOut(500);

});