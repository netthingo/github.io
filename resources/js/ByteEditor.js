var file;		// The file inserted in input.
var _0bArray;	// The file, but as an array of bytes...

function HandleFiles(files){
	file = files[0];
	
	var reader = new FileReader();
	reader.onload = function(){
		var arrayBuffer = this.result;
		_0bArray = new Uint8Array(arrayBuffer);
	}
	reader.readAsArrayBuffer(file);
}

function GetInfos(){
	$("#info").val(
		"NAME: " + file.name + "\n" +
		"TYPE: " + file.type + "\n" +
		"SIZE: " + _0bArray.length/1000 + "KB\n" +
		"\n" +
		"INDEX:\t|BYTE:\t|CHAR:\n"
	)
	
	_0bArray.forEach( function(elem, index) {
		$("#info").val( 
			$("#info").val() + index + "\t|" + elem + "\t|" + String.fromCharCode(elem) + "\n"
		)
	});
	
	var reader = new FileReader();
	reader.onload = function(){
		$("#info").val(
			$("#info").val() +
			"\n" +
			"DataURL:\n" + this.result
		)
	}
	var fileNew = new Blob([_0bArray], {type: file.type});
	reader.readAsDataURL(fileNew);
}

$("#Byte").on("change", function() {
	if($(this).val() < 0) $(this).val(0);
	if($(this).val() > 255) $(this).val(255);
});

function Change(){
	_0bArray[$("#Index").val()] = $("#Byte").val();
}


function Download() {
    var a = document.createElement("a"), fileToDownload = new Blob([_0bArray], {type: file.type});
	var url = URL.createObjectURL(fileToDownload);
    a.href = url;
    a.download = file.name;
	document.body.appendChild(a);
    a.click();
}