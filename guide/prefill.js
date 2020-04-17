/* Prefill Guide Fields based on URL parameters */
$(document).ready(function() {
	/* Start QR */
	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = window.location.search.substring(1),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');
			if (sParameterName[1] == "false"){$("#" + sParameterName[0]).prop("checked",false);}
			else if (sParameterName[1] == "true"){$("#" + sParameterName[0]).prop("checked",true);}
			else {$("#" + sParameterName[0]).val(decodeURIComponent(sParameterName[1]))};
		}
	};
	getUrlParameter("");
	/* End QR */
});