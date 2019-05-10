function showPopUpDownloader(){
	
	document.querySelectorAll("body")[0].style.filter = "blur(5px)";
	
	var hideAll = document.createElement("div");
	hideAll.id = "hideAll";
	
	/*
	position:fixed;
    padding:0;
    margin:0;

    top:0;
    left:0;

    width: 100%;
    height: 100%;
    background:rgba(255,255,255,0);
	*/
	
	hideAll.style.position = "fixed";
    hideAll.style.padding = "0";
    hideAll.style.margin = "0";

    hideAll.style.top = "0";
    hideAll.style.left = "0";

    hideAll.style.width =  "100%";
    hideAll.style.height =  "100%";
    hideAll.style.background = "rgba(255,255,255,0)";
	
	document.querySelectorAll("body")[0].appendChild(hideAll);
	
	var Modal = document.createElement("div");
	Modal.id = "Modal";
	
	//img
	var logo = document.createElement("img");
	logo.src = "resources/logo.png";
	logo.width = "100";
	logo.height = "100";
	
	//text
	var p = document.createElement("p");
	p.appendChild(document.createTextNode("Scegli file da scaricare:"));
	
	//table
	var table = document.createElement("table");
	
	//head row
	var trHead = document.createElement("tr");
	
		// cert.der
		var th = document.createElement("th");
		var i = document.createElement("i");
		i.className = "fas fa-file-download";
		th.appendChild(i);
		th.onclick = certDer;
		th.title = "cert.der";
		trHead.appendChild(th);
		
		// cert.pem
		var th = document.createElement("th");
		var i = document.createElement("i");
		i.className = "fas fa-file-download";
		th.appendChild(i);
		th.onclick = certPem;
		th.title = "cert.pem";
		trHead.appendChild(th);
	
	//body row
	var trBody = document.createElement("tr");
	
		// cert.der
		var td = document.createElement("td");
		var text = document.createTextNode("Windows");
		td.appendChild(text);
		trBody.appendChild(td);
		
		// cert.pem
		var td = document.createElement("td");
		var text = document.createTextNode("Android");
		td.appendChild(text);
		trBody.appendChild(td);
	
	//
	//appends
	//
	
	table.appendChild(trHead);
	table.appendChild(trBody);
	
	Modal.appendChild(logo);
	Modal.appendChild(p);
	Modal.appendChild(table);
	
	document.querySelectorAll("html")[0].appendChild(Modal);
	addClosePopUp();
	
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function addClosePopUp(){
	await sleep(100);
	document.querySelectorAll("body")[0].onclick = closePopUpDownloader;
}

function closePopUpDownloader(){
	
	document.querySelectorAll("body")[0].style.filter = "";
	document.getElementById("hideAll").remove();
	document.getElementById("Modal").remove();
	document.querySelectorAll("body")[0].onclick = "";
	
}

function certDer(){
        window.location='cert.der';
}

function certPem(){
        window.location='cert.pem';
}