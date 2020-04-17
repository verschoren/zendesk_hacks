/*
This code checks if the current page is shown after a succesfull Form submit.
Useful for when you want to hide or show code after a form submission that is more visible than the default small banner.
*/
$( document ).ready(function() {
  if ($(".notification-notice")[0]){
    console.log("confirmation page");
    //do something
  }
});
