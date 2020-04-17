/* Fill the widget with the current logged in Help Center user */

	$(document).ready(function() {
		$.get('/api/v2/users/me', function(data){
		  console.log(data.user.name);
		  console.log(data.user.email);

		  zE('webWidget', 'prefill', {
			name: {
			  value: data.user.name,
			  readOnly: true // optional
			},
			email: {
			  value: data.user.email,
			  readOnly: true // optional
			}
		  });
		})
	});