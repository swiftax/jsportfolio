/* Portfolio */

var portfolioItems = [ { title: "Switfax Project", pic: "img/swiftax.png"},
{ title: "Karma Site", pic: "img/karma-site.png"},
{ title: "Portfolio Project", pic: "img/portfolio-screenshot.png"}, { title: 
"Fourth Project", pic: "img/grocery_app.png"}

];

for (var i = 0; i < portfolioItems.length; ++i) {
	$("#" + i).css("background-image", "url(" + portfolioItems[i].pic + ")");
};

$(".image").mouseenter( function () {
	console.log(portfolioItems[this.id].title);
	$(this).html("<p class='info'><span class='proj-title'>Title:</span> " + portfolioItems[this.id].title + "</p>");


}).mouseleave( function () {
	$("p.info").html("");
});



/* Contact Section */

$(document).ready(function(){

$("#submit-button").on("click" , function() {
	console.log("clicked");
	var comment = $(".message-box").val();
	console.log(comment);
	$("#visible-comment").html(comment);
	return false;
	})

	$(".message-box").css("background-color", "pink");

	$(".message-box").on("keyup", function() {
		console.log("keyup happened!");

		var charCount = $(".message-box").val().length;
		console.log(charCount);
		$("#charCount").html(charCount);

		if (charCount > 150) {
			$("#charCount").css("color", "red");
			$("#charCount").text("You exceeded the maximum character limit");
		} else {
			$("#charCount").css("color", "white");
		};
	})

	$("#email").on("keyup", function() {
		console.log("keyup with email!");
		var charCount = $("#email").val().length
		console.log(charCount);
		$("#charCount").html(charCount);
		if (charCount > 30) {
			$("#charCount").css("color", "red");
			$("#charCount").text("Invalid Email Address");
		} else {
			$("#charCount").css("color", "pink");
		};
	});

	/* FAQ Section */

	var rows = $(".my-row");

	for (var i=0; i< rows.length; ++i) {
		if (i%2===0) {
	$(rows[i]).css("background-color","#376a74");
	$(rows[i]).css("color", "white");

	} else {
	$(rows[0]).css("background-color","#000");
	$(rows[0]).css("color", "fff");
	$(rows[0]).css("text-decoration","underline");
	
	};
};
});


