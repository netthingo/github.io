var RowAmmountClosed = 2;
var sleepTime = 10;

var toggle = document.getElementById("toggle");
var table = document.getElementById("tableInfo");
var trs = table.getElementsByTagName("tr");
var toggler = document.getElementsByClassName("fa-chevron-down");
toggler[0].style.transition = "0.5s";

for(var i = 2; i < trs.length; i++){
		trs[i].style.display = "none";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var deg = 180;

async function close() {
	
	
	deg -= 180;
	
	toggler[0].style.transform = "rotate("+ deg +"deg)";
	for(var i = trs.length-(RowAmmountClosed-1); i > RowAmmountClosed-1; i--){
		trs[i].style.display = "none";
		
  await sleep(sleepTime);
	}
	
	toggle.onclick = open;
	
}

async function open() {
	
	deg -= 180;
	
	toggler[0].style.transform = "rotate("+ deg +"deg)";
	for(var i = RowAmmountClosed; i < trs.length-1; i++){
		trs[i].style.display = "table-row";
  await sleep(sleepTime);
	}
	
	toggle.onclick = close;
	
}

toggle.onclick =  close;
close();
	
div.style.display = "block";