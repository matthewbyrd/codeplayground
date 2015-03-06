

// Make the area div fill the window vertically
var windowHeight = $(window).height();
var topBarHeight = $("#topBar").height();
var freeHeight = windowHeight - topBarHeight;
$(".area").height((0.97*freeHeight)+"px");


// logic for the buttons making the text areas show

var htmlClicked = true;
var cssClicked = false;
var jsClicked = false;
var resultClicked = true;
var numberClicked = 2;
var areaWidth = Math.round(90/numberClicked);

$(".area").css("width",areaWidth+"%");

$("#htmlButton").click(function(){
	if (!htmlClicked) {
		$(this).css("background-color","#A3A4A4");
		//show js
		numberClicked++
		areaWidth = Math.round(93/numberClicked);
		$(".area").css("width",areaWidth+"%");
		$("#htmlArea").show();
		htmlClicked = true;
	} else {
		$(this).css("background-color","#E0E0E0");
		//hide js
		numberClicked--
		if (numberClicked < 1){
			$("#htmlArea").hide();
			htmlClicked = false;
		} else { 
			areaWidth = Math.round(93/numberClicked);
			$(".area").css("width",areaWidth+"%");
			$("#htmlArea").hide();
			htmlClicked = false;
		};
	};
});


$("#cssButton").click(function(){
	if (!cssClicked) {
		$(this).css("background-color","#A3A4A4");
		//show js
		numberClicked++
		areaWidth = Math.round(93/numberClicked);
		$(".area").css("width",areaWidth+"%");
		$("#cssArea").show();
		cssClicked = true;
	} else {
		$(this).css("background-color","#E0E0E0");
		//hide js
		numberClicked--
		if (numberClicked < 1){
			$("#cssArea").hide();
			cssClicked = false;
		} else { 
			areaWidth = Math.round(93/numberClicked);
			$(".area").css("width",areaWidth+"%");
			$("#cssArea").hide();
			cssClicked = false;
		};
	};
});

$("#jsButton").click(function(){
	if (!jsClicked) {
		$(this).css("background-color","#A3A4A4");
		//show js
		numberClicked++
		areaWidth = Math.round(93/numberClicked);
		$(".area").css("width",areaWidth+"%");
		$("#jsArea").show();
		jsClicked = true;
	} else {
		$(this).css("background-color","#E0E0E0");
		//hide js
		numberClicked--
		if (numberClicked < 1){
			$("#jsArea").hide();
			jsClicked = false;
		} else { 
			areaWidth = Math.round(93/numberClicked);
			$(".area").css("width",areaWidth+"%");
			$("#jsArea").hide();
			jsClicked = false;
		};
	};
});

$("#resultButton").click(function(){
	if (!resultClicked) {
		$(this).css("background-color","#A3A4A4");
		//show js
		numberClicked++
		areaWidth = Math.round(93/numberClicked);
		$(".area").css("width",areaWidth+"%");
		$("#resultArea").show();
		resultClicked = true;
	} else {
		$(this).css("background-color","#E0E0E0");
		//hide js
		numberClicked--
		if (numberClicked < 1){
			$("#resultArea").hide();
			resultClicked = false;
		} else { 
			areaWidth = Math.round(93/numberClicked);
			$(".area").css("width",areaWidth+"%");
			$("#resultArea").hide();
			resultClicked = false;
		};
	};
});


// run functionality

$("#run").click(function() {
	$("#resultFrame").contents().find("html").html('<style type="text/css">'+$("#cssCode").val()+'</style>'+$("#htmlCode").val());
});