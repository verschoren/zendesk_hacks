/* Loop through all departments and hide Chat if the first department is offline 
You can tweak this to check if the name of the department is matching a specific department
*/

zE(function() {
  $zopim(function() {
    $zopim.livechat.setOnConnected(function() {
      console.log('connected');
      var all_departments = $zopim.livechat.departments.getAllDepartments();
      if (all_departments[0]['status'] != "online"){
			console.log("offline");
			zE.hide();
		} else {
			console.log("online");
		}
    });
  });
});