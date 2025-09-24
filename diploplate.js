// diploplate.js 1.0
// (c) David Yanofsky <yerit.com>
// MIT License

function countryName() {
	var d = countryName.data;
	var dict = {};
	var i;
	for (i = d.codes.length - 1; i >= 0; i--) {
		dict[d.codes[i]] = d.names[i];
	}
	
	return dict;
}

function onPlateSubmit() {
	if($("#tag-input").val().length > 0) {
		plateSearch(parsePlateInput($("#tag-input").val()));
		pageState("results")
	}
	
}

function parsePlateInput(s) {
	var o = s;
	o = o.split(" ").join("");
	o = o.split("+").join("");
	o = o.toUpperCase();
	return o;
}

countryName.data = {
	codes: ["AA", "AC", "AE", "AF", "AH", "AJ", "AK", "AQ", "AU", "AV", "AX", "BK", "BL", "BV", "BW", "CB", "CC", "CG", "CK", "CM", "CN", "CS", "CT", "CU", "CV", "CW", "CX", "CY", "DA", "DB", "DC", "DD", "DF", "DG", "DH", "DI", "DJ", "DK", "DL", "DM", "DN", "DP", "DR", "DZ", "FF", "FG", "FH", "FJ", "FK", "FL", "FM", "FN", "FP", "FR", "FS", "FT", "FV", "FW", "FX", "FZ", "GC", "GD", "GE", "GG", "GN", "GP", "GQ", "GX", "GY", "HB", "HD", "HL", "HM", "HN", "HV", "HW", "HX", "HY", "HZ", "JB", "JC", "JD", "JF", "JG", "JH", "JJ", "JK", "JM", "JP", "JQ", "JS", "JT", "JY", "KB", "KD", "KE", "KG", "KH", "KJ", "KK", "KL", "KM", "KN", "KP", "KR", "KS", "KU", "KW", "KX", "LC", "LD", "LG", "LH", "LJ", "LK", "LM", "LN", "LR", "LW", "MF", "MG", "MK", "MN", "MP", "MW", "NA", "NB", "NC", "ND", "NQ", "NX", "PA", "PB", "PC", "PD", "PF", "PG", "PK", "PL", "PM", "PR", "PS", "PV", "QD", "QL", "QM", "QN", "QP", "QQ", "QR", "QS", "QT", "QU", "QV", "QW", "QX", "QX", "QY", "QZ", "RB", "RC", "RD", "RL", "RQ", "RV", "SF", "SG", "ST", "TF", "TF", "TG", "TH", "TK", "TL", "TM", "TN", "TP", "TQ", "TR", "TS", "TT", "TU", "TV", "TW", "TX", "TY", "TZ", "UA", "UF", "UH", "UX", "VF", "VG", "VH", "VJ", "VK", "VL", "VM", "WB", "WD", "WM", "WZ", "XA", "XC", "XD", "XE", "XF", "XG", "XY", "XZ", "YA", "YG", "YJ", "YK", "YM", "YR", "YT", "YY", "YZ"],
	names: ["Congo", "Cote d'Ivoire", "Uzbekistan", "Japan", "Madagascar", "Panama", "Cape Verde", "Syria", "Uganda", "Israel", "Marshall Islands", "Unknown", "South Africa", "Solomon Islands", "World Bank", "Cambodia", "Ethiopia", "Marshall Islands", "Namibia", "Federated States of Micronesia", "International Organization", "Afghanistan", "Bhutan", "Botswana", "Myanmar (Burma)", "Cameroon", "Burundi", "People's Republic of China", "Colombia", "Costa Rica", "Cuba", "Cyprus", "Dominican Republic", "Ecuador", "Cote d'Ivoire", "South Africa", "France", "Greece", "India", "Iran", "Denmark", "Bangladesh", "Slovakia", "Palau", "Antigua & Barbuda", "Central African Republic", "Ireland", "Lebanon", "Kenya", "Liberia", "Libya", "Malta", "Morocco", "Philippines", "Netherlands", "Qatar", "Sri Lanka", "Holy See", "Sierra Leone", "Suriname", "Sweden", "Ukraine", "Unknown", "Zambia", "Turkey", "Albania", "North Korea", "Vanuatu", "Chile", "Tonga", "Argentina", "Saint Lucia", "Andorra", "Mongolia", "Belgium", "Guatemala", "Benin", "Guinea Bissau", "Haiti", "Honduras", "Kuwait", "Mauritius", "Nigeria", "Portugal", "Somalia", "Chad", "Turkey", "Yugoslavia", "Tunisia", "Togo", "Slovenia", "Croatia", "Cyprus", "Monaco", "Eritrea", "Unknown", "Equatorial Guinea", "Hungary", "Lithuania", "Fiji", "Jordan", "Jamaica", "Gabon", "Luxembourg", "Malaysia", "Mexico", "São Tomé and Príncipe", "Seychelles", "Sudan", "Venezuela", "Vietnam", "Turkey", "Israel", "Israel", "European Economic Communities", "Macedonia", "Saudi Arabia", "Bosnia-Herzegovina", "Germany", "International Monetary Fund", "Unknown", "Djibouti", "Comoros", "Bahamas", "Maldives", "Oman", "Papua New Guinea", "Paraguay", "Romania", "Angola", "Malaysia", "Austria", "Barbados", "Belize", "United Kingdom", "Bolivia", "Belarus", "Norway", "Chile", "Brunei", "Argentina", "Zimbabwe", "Zaire", "Burkina Faso", "St. Kitts & Nevis", "Bulgaria", "Laos", "Latvia", "Lesotho", "Malawi", "Mozambique", "New Zealand", "Nicaragua", "Niger", "Poland", "Pakistan", "Iran", "Yemen", "Indonesia", "Rwanda", "Saint Vincent and the Grenadines", "Senegal", "Uruguay", "Unknown", "San Marino", "Czech Republic", "Israel", "Dominica", "Algeria", "Iraq", "Canada", "Egypt", "Liechtenstein", "El Salvador", "Iceland", "Nepal", "Mauritania", "Mali", "Italy", "Iraq", "Guyana", "Guinea", "Ghana", "Gambia", "Finland", "Grenada", "Peru", "Bahrain", "Estonia", "Spain", "Trinidad & Tobago", "Thailand", "Tanzania", "Switzerland", "Brazil", "Singapore", "Swaziland", "Nauru", "United Arab Emirates", "South Korea", "Samoa", "United Kingdom", "Bangladesh", "Fiji", "Myanmar", "Ghana", "Turkey", "Norway", "Unknown", "Australia", "Armenia", "Georgia", "Tajikistan", "Kazakhstan", "Moldova", "Russia", "Turkmenistan", "Kyrgyzstan", "Azerbaijan"]
};

function diplomaticCode() {
	var d = diplomaticCode.data;
	var dict = {};
	var i;
	
	for (i = d.codes.length - 1; i >= 0; i--) {
		dict[d.codes[i]] = d.names[i];
	}
	
	return dict;
}

diplomaticCode.data = {
	codes: ["C", "D", "S", "A"],
	names: ["Consul", "Diplomat", "Non-Diplomatic Staff", "United Nations Secretariat, Foreign Mission to U.N. and family members"]
}


function plateSearch(s) {
	var countryDict = countryName();
	var codeDict = diplomaticCode();
	var country = "";
	
	var a = s.split(/\d/)
	var ccode
	var rcode = "";
	var role = "";
	var country = "";
	
	if (a[0].length > 0) {
			ccode = a[0]
			if(ccode.length == 3) {
				rcode = ccode.charAt(0);
				ccode = ccode.substr(1,2);
			}
			role = codeDict[rcode];
	}else{
		ccode = a[a.length - 1];
		if(ccode.length == 3) {
			rcode = ccode.charAt(2);
			ccode = ccode.substr(0,2);
		}
		
		if(rcode != "A") {
			role = codeDict[rcode] + " to the U.N.";
		}else{
			role = codeDict[rcode];
		}
	};
	country = countryDict[ccode];
	if(country == undefined){
		country = "Unknown";
	}
	if(role == undefined){
		role = "Unknown Role";
	}
	window.location.hash = s;
	document.getElementById("result-holder").innerHTML = "<h1>"+country+"</h1><h2>"+role+"</h2>";
	document.title = "I Just Saw a " + role + " from " + country +"'s car!";
	
	//console.log(ccode)
	//console.log(rcode)
	//console.log(countryDict[ccode]);
	
}

function pageState(s) {
	switch (s) {
		case "input":
			$("#input").css("display","block");
			$("#results").css("display","none");
		break;
		
		case "results":
			$("#input").css("display","none");
			$("#results").css("display","block");
		break;
		
		default:
			$("#tag-input").val("")
			if($("#input").css("display") == "none") {
				$("#input").css("display","block");
				$("#results").css("display","none");	
			} else {
				$("#input").css("display","none");
				$("#results").css("display","block");
			}
			
			window.location.hash = "";
		break;
	}
	
	_gaq.push(['_trackPageview']);
}

$(document).ready(function() { 
		if(window.location.hash.length > 0) {
			pageState("results");
			plateSearch(parsePlateInput(window.location.hash.split("#")[1]));
			
		}
	});
