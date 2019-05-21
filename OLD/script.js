/*

									<!--
                                            <table>
                                                <tr class="connection-status-element">
                                                    <th><i class="fas fa-user"></i>Nome: </th>
                                                    <td>Studente Meucci</td>
                                                </tr>
                                    
                                                <tr class="connection-status-element">
                                                    <th><i class="far fa-envelope"></i>Email: </th>
                                                    <td>studente.meucci@itismeucci.com</td>
                                                </tr>
                                    
                                                <tr class="connection-status-element">
                                                        <th><i class="fas fa-signal"></i>IP: </th>
                                                        <td>10.101.96.24</td>
                                                </tr>

                                                <tr class="connection-status-element">
                                                    <th><i class="fas fa-network-wired"></i>Connesso alla rete: </th>
                                                    <td>Rete Cablata</td>
                                                </tr>
                                    
                                                <tr class="connection-status-element">
                                                    <th><i class="fas fa-users"></i>Gruppo di appartenenza: </th>
                                                    <td>Studenti</td>
                                                </tr>
                                    
                                                <tr class="connection-status-element">
                                                    <th><i class="fas fa-calendar-alt"></i>Connesso il:</th>
                                                    <td> 14/04/2019 09:54:25</td>
                                                </tr>
                                    
                                                <tr class="connection-status-element">
                                                    <th><i class="fas fa-file-download"></i>Dati ricevuti:</th>
                                                    <td>32.3 MB</td>
                                                </tr>
                                    
                                                <tr class="connection-status-element">
                                                    <th><i class="fas fa-file-upload"></i>Dati inviati: </th>
                                                    <td>123.2 kB</td>
                                                </tr>
                                                <tr class="connection-status-element">
                                                    <th><i class="fas fa-tachometer-alt"></i></i>Velocit&agrave; media Download:</th>
                                                    <td>1.21 KB/sec</td>
                                                </tr>
							                    <tr class="connection-status-element">
                                                    <th><i class="fas fa-tachometer-alt"></i></i>Velocit&agrave; media Upload:</th>
                                                    <td>400.88 B/sec</td>
                                                </tr>
                                            </table>
											-->
									
*/

var list = ["fas fa-user",
 "far fa-envelope",
 "fas fa-signal",
 "fas fa-network-wired",
 "fas fa-users",
 "fas fa-calendar-alt",
 "fas fa-file-download",
 "fas fa-file-upload",
 "fas fa-tachometer-alt",
 "fas fa-tachometer-alt"];

/*
<!--[INFOTEXT_START]-->
<p>IP: 172.16.5.217</p>
<p>E-Mail: nettenbreije.alexander@itismeucci.com</p>
<p>Nome: Alexander Nettenbreijers</p>
<p>Connesso alla rete: Rete Cablata</p>
<p>Gruppo di appartenenza: Studenti</p>
<p>Connesso il : 15/05/2019 08:14:42</p>
<p>Dati Ricevuti : 1.98 MB</p>
<p>Dati Inviati : 344.98 KB</p>
<p>Velocità media Download : 13.2 KB/sec</p>
<p>Velocità media Upload : 1.35 KB/sec</p>
<p>
</p>
<!--[INFOTEXT_END]-->
*/

var div = document.getElementById("tableInfo");

var msg = div.innerHTML;

/*
	GENERALE
*/

// turning "<!--[INFO_START]-->" into ""
// turning "<!--[INFO_END]-->" into ""
// turning "<!--[INFOTEXT_START]-->" into ""
// turning "<!--[INFOTEXT_END]-->" into ""
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
$("#tableInfo").append(element);

var msg = div.innerHTML;
div.innerHTML = "";

for(var i = 0; i < 12; i++ ){
	msg = msg.replace("[TEMP]", list[i])
}

var element = $(msg);
$("#tableInfo").append(element);