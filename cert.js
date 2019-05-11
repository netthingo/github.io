var link = document.getElementById("Download");
var body = document.querySelectorAll("BODY")[0];
var html = document.querySelectorAll("HTML")[0];
var text = document.getElementById("OS");

text.append( document.createTextNode("[" + getOS() + "]") );

switch(getOS()){
    case "Windows":
    link.onclick = certDotDer;
    break;
    case "Android":
    link.onclick = certDotPem;
    break;
    default:
    break;
}

function certDotDer(){
    window.location='cert.der';
}

function certDotPem(){
    window.location='cert.pem';
}