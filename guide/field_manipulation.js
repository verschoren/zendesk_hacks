/* Hide, Show, Prefill Form Fields */
$(document).ready(function() {
  //FORM ACTIONS
  //Set form subject based on dropdown
  $(document).on("change", "#request_custom_fields_1234567890", function() {
    if (this.value == "dropdown_tag"){ 
        $("#request_subject").val("Custom Subject")
    }
    $('#request_subject').focus();
  }.val( $('#request_subject').val() ).change(); // for pre-selection trigger
                 
  //Otherfields
  	$('.request_subject').hide(); // Hide subject
  	$("#request_subject").val(""); // Set subject
  	$('.request_description').hide(); // Hide description
  	$("#request_description").val(""); //Set Descriptions
    $('.request_cc_emails').hide(); //hide cc
    $('.upload-dropzone').hide(); //hide attachments
    $('label[for="request-attachments"]').hide(); //hide attachments
    $('a[href^="some.url"]').attr('target','_blank'); //make urls open in new tab

    $('.request_custom_fields_360000236569').hide(); //hide custom fields
    $('.request_custom_fields_360000236569').show(); //show custom fields

    $('#request_custom_fields_360003443460').prop("readonly", true); //readonly

}
                  
  //Show based on checkbox
  $('#request_custom_fields_1234567').change(function(){
    	if(this.checked){ /*do stuff*/ }
  });  
});