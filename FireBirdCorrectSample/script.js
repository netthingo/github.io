try{
	
var connected = false;


/*
	TITLE -----------------------------------------------------------------------------------------
*/

/* FROM
	<h2 class="form-signin-heading"><!--[TITLETEXT_START]-->Effettua il login<!--[TITLETEXT_END]--></h2>
*/

/* TO
	<div class="title blue"><span>Effettua il login</span></div>
*/

var textTitle = document.querySelectorAll("#TITLE h2")[0].innerHTML;
var textTitleAll = textTitle;
textTitleAll = textTitleAll.replace(/\<\!\-\-\[TITLETEXT_START\]\-\-\>/g, "<div class=\"title\"><span>");
textTitleAll = textTitleAll.replace(/\<\!\-\-\[TITLETEXT_END\]\-\-\>/g, "</span></div>");
textTitle = textTitle.replace(/\<\!\-\-\[TITLETEXT_START\]\-\-\>/g, "");
textTitle = textTitle.replace(/\<\!\-\-\[TITLETEXT_END\]\-\-\>/g, "");

$("#TITLE").html("");
$("#TITLE").append( $(textTitleAll) );
switch(textTitle){
	case "Effettua il login":
	$("#TITLE div").addClass("blue");
	$("#TITLE div span").text("Effettua il login");
	connected = false;
	break;
	case "Stato connessione":
	$("#TITLE div").addClass("green");
	$("#TITLE div span").text("Connesso");
	connected = true;
	break;
	case "ACCESSO NEGATO":
	$("#TITLE div").addClass("red");
	$("#TITLE div span").text("Accesso Negato");
	connected = true;
	break;
}

/*
	TABLE-INFO -----------------------------------------------------------------------------------------
*/

/* FROM
	a series of <p>
*/

/* TO
	a <table>
*/

var list = ["fas fa-signal",
 "far fa-envelope",
 "fas fa-user",
 "fas fa-network-wired",
 "fas fa-users",
 "fas fa-calendar-alt",
 "fas fa-file-download",
 "fas fa-file-upload",
 "fas fa-tachometer-alt",
 "fas fa-tachometer-alt"];

var div = document.getElementById("INFO");

var msg = div.innerHTML;

/*
	GENERALE 
*/

// turning "<!--[INFO_START]-->" into ""
// turning "<!--[INFO_END]-->" into ""
// turning "<div>" into ""
// turning "</div>" into ""
// turning "<strong>" into ""
// turning "</strong>" into ""
msg = msg.replace(/\<\!\-\-\[INFO_START\]\-\-\>/g, "");
msg = msg.replace(/\<\!\-\-\[INFO_END\]\-\-\>/g, "");
msg = msg.replace(/\<div\ class\=\"alert\ alert\-info\">/g, "");
msg = msg.replace(/\<\/div\>/g, "");
msg = msg.replace(/\<strong\>/g, "");
msg = msg.replace(/\<\/strong\>/g, "");

// turning "<!--[INFOTEXT_START]-->" into "<table>"
// turning "<!--[INFOTEXT_END]-->" into "</table>"
msg = msg.replace(/\<\!\-\-\[INFOTEXT_START\]\-\-\>/g, "<table>");
msg = msg.replace(/\<\!\-\-\[INFOTEXT_END\]\-\-\>/g, "</table>");

// turning "<p>" into "<tr><td>"
// turning "</p>" into "</td></tr>"
msg = msg.replace(/\<p\>/g, "<tr><td>");
msg = msg.replace(/\<\/p\>/g, "</td></tr>");

//turning ":" into ":</td><td>"
// cant use because time uses ":" too... must do it one by one.
// msg = msg.replace(/:/g, ":</td><td>");

for(var i = 0; i < 12; i++ ){
	if( i == 6 || i == 7) { msg = msg.replace(":", "[TEMP]"); }
	else { msg = msg.replace(":", "</td><td>"); }
}
msg = msg.replace(/\[TEMP\]/g, ":");

div.className = "tableInfo";

/*
	SPECIFICO (font-awesome)
*/

div.innerHTML = "";

var element = $(msg);

element.find("tr td:nth-child(1)").prepend("<i class=\"[TEMP]\"></i>");
$("#INFO").append(element);

var msg = div.innerHTML;
div.innerHTML = "";

for(var i = 0; i < 12; i++ ){
	msg = msg.replace("[TEMP]", list[i])
}

var element = $(msg);
$("#INFO").append(element);

/*
	Se c'è qualcosa dentro il tag <INFO>, allora ci metto il toggle [ ^ | v ]
*/

var info_start = document.getElementById("INFO").innerHTML;
info_start = info_start.replace(/\<\!\-\-\[INFO_START\]\-\-\>/g, "");
info_start = info_start.replace(/\<\!\-\-\[INFO_END\]\-\-\>/g, "");

var patt = new RegExp("[a-zA-Z]");

if( patt.test(info_start) ){
	$("#INFO").before( $("<hr class='evenSmallerHR'>") )
	$("#INFO").before( $("#TOGGLE-BTN") )
}

/*
	BUTTONS -----------------------------------------------------------------------------------------
*/

var text = document.getElementById("LOGINBTN").innerHTML;
text = text.replace(/\<\!\-\-\[LOGINBTN_START\]\-\-\>/g, "");
text = text.replace(/\<\!\-\-\[LOGINBTN_END\]\-\-\>/g, "");

var patt = new RegExp("[a-zA-Z]");

if( patt.test(text) ){
	$("#LOGINBTN").html("");
	$("#LOGINBTN").prepend( $("#EDITED-LOGIN-BTN") )
}

// --

var text = document.getElementById("LOGOUTBTN").innerHTML;
text = text.replace(/\<\!\-\-\[LOGOUTBTN_START\]\-\-\>/g, "");
text = text.replace(/\<\!\-\-\[LOGOUTBTN_END\]\-\-\>/g, "");

var patt = new RegExp("[a-zA-Z]");

if( patt.test(text) ){
	$("#LOGOUTBTN").html("");
	$("#LOGOUTBTN").prepend( $("#EDITED-LOGOUT-BTN") )
}



/*
	CERT -----------------------------------------------------------------------------------------
*/

if(!connected){
	$("#page").append( $("#CERT") )
}else{
	
}

}
catch(e){
	
}

/*
	DENIED -----------------------------------------------------------------------------------------
*/

try{
	
var div = document.getElementById("DENIED");

var msg = div.innerHTML;

div.className = "tableDenied";


// turning "<!--[FAIL_START]-->" into ""
// turning "<!--[FAIL_END]-->" into ""
// turning "<div>" into ""
// turning "</div>" into ""
// turning "<strong>" into ""
// turning "</strong>" into ""
msg = msg.replace(/\<\!\-\-\[FAIL_START\]\-\-\>/g, "");
msg = msg.replace(/\<\!\-\-\[FAIL_END\]\-\-\>/g, "");
msg = msg.replace(/\<div\ class\=\"alert\ alert\-danger centered\">/g, "");
msg = msg.replace(/\<\/div\>/g, "");
msg = msg.replace(/\<strong\>/g, "");
msg = msg.replace(/\<\/strong\>/g, "");

// turning "<!--[FAILTEXT_START]-->" into "<table><tr><td>"
// turning "<!--[FAILTEXT_END]-->" into "</td></tr></table>"
msg = msg.replace(/\<\!\-\-\[FAILTEXT_START\]\-\-\>/g, "<table><tr><th>");
msg = msg.replace(/\<\!\-\-\[FAILTEXT_END\]\-\-\>/g, "</td></tr></table>");

msg = msg.replace("Accesso negato all'", "");

msg = msg.replace("<br>", "</th><td>");
msg = msg.replace("<br>", "</td></tr><tr><th>");
msg = msg.replace(":", "[TEMP]");
msg = msg.replace(":", "</th><td>");
msg = msg.replace("[TEMP]", ":");

msg = msg.replace("URL", "URL:");
msg = msg.replace("Lista", "Categoria:");

var element = $(msg);
$("#DENIED").html("");
$("#DENIED").append(element);

}
catch(e){
	
}