var body = document.getElementById("tutorial-link");
var body = document.querySelectorAll("BODY")[0];
var html = document.querySelectorAll("HTML")[0];
var windows_tutorial = document.getElementById("windows-tutorial-obj");
var android_tutorial = document.getElementById("android-tutorial-obj");
var ios_tutorial = document.getElementById("ios-tutorial-obj");
var screen_dark = document.getElementById("dark-screen-obj");

switch(getOS()){
    case "Windows":
    tutorial_link.onclick = windows_appear;
    break;
    case "Android":
    tutorial_link.onclick = android_appear;
    break;
	case "IOS":
    tutorial_link.onclick = ios_appear;
    break;
    default:
    break;
}


function windows_appear(){
	modal.style.filter = "blur(5px)";
    body.style.filter = "blur(5px)";
	screen_dark.style.display = "block";
    $(windows_tutorial).addClass("up");
	html.append(screen_dark);
    html.append(windows_tutorial);
}

function android_appear(){
	modal.style.filter = "blur(5px)";
    body.style.filter = "blur(5px)";
	screen_dark.style.display = "block";
    $(android_tutorial).addClass("up");
	html.append(screen_dark);
    html.append(android_tutorial);
}

function ios_appear(){
	modal.style.filter = "blur(5px)";
    body.style.filter = "blur(5px)";
	screen_dark.style.display = "block";
    $(ios_tutorial).addClass("up");
	html.append(screen_dark);
    html.append(ios_tutorial);
}

$(document).on("click","#dark-screen-obj", function(){
	close_tutorial();
});

$(document).on("click",".TUTORIAL_CLOSE", function(){
	close_tutorial();
});

function close_tutorial(){
	modal.style.filter = "blur(0px)";
	if(!isModalOpen){
    body.style.filter = "blur(0px)";
	}
	$(".tutorial").remove();
	$("#dark-screen-obj").remove();
}