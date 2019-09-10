var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl = new TimelineMax();
	var txt1 = document.getElementById('txt1');
	var txt2 = document.getElementById('txt2');
	var txt3 = document.getElementById('txt3');
	var txt4 = document.getElementById('txt4');
	var cta = document.getElementById('cta');
	// var txtBox = document.getElementById('txtBox');

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl.to(txt1, .5, {y:"+=90", ease: Sine.easeOut}, "-=.25")
		.to(txt1, .5, {y:"+=90", ease: Sine.easeIn}, "+=2")

		.to(txt2, .5, {y:"+=90", ease: Sine.easeOut}, "-=.25")
		.to(txt2, .5, {y:"+=90", ease: Sine.easeIn}, "+=2.5")

		.to(txt3, .5, {y:"+=90", ease: Sine.easeOut}, "-=.25")

		.to(txt4, .5, {y:"-=90", ease: Sine.easeOut}, "+=1")
		.to(txt3, .5, {y:"-=10", ease: Sine.easeOut}, "-=.25")


		.set(cta, {display: "block"}, "+=1")
		.from(cta, 1, {y:"-=90", ease: Elastic.easeOut});
		
		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
