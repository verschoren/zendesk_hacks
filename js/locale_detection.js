// Placeholder text
{{#is help_center.locale 'nl'}}Nederlands{{/is}}
{{#is help_center.locale 'fr-fr'}}français{{/is}}
{{#is help_center.locale 'en-us'}}english{{/is}}

//Get locale from URL
$(document).ready(function() {
	//Javascript parameters
	var hostName = window.location.hostname;
	var locale = 'nl';
	
	//set language
	if (window.location.href.indexOf('/fr/')!=-1) {
		locale = 'fr';
	}
});

//Set Widget locale based on HC locale
zE('webWidget', 'setLocale', {{help_center.locale}});