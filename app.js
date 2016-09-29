$(document).ready(function() {

	var score=0;
	$("#increase-5").on("click", function() {
		score+=5;
		$("#score").html(score);
	});

	$("#decrease-5").on("click", function() {
		score-=5;
		$("#score").html(score);
	});

	$("#submit-custom-score").on("click", function() {
		var customscore=parseInt($("#custom-score").val());
		score=customscore;
		$("#score").html(customscore);
	});

});