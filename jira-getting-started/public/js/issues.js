AP.request('/rest/api/3/search?jql=project%20%3D%20neowise', {
	success: function(responseText){
		var projectTable = document.getElementById("issues");
		var data = JSON.parse(responseText);

		for (var x = 0; x < data.issues.length; x++) {
			var value = data.issues[x];
			console.log(value);
			var newRow = projectTable.insertRow(-1);
			var newCellLogo = newRow.insertCell(0)
			var newCellKey = newRow.insertCell(1);
			var newCellProject = newRow.insertCell(2);

			newCellLogo.innerHTML = value.id ;
			newCellKey.innerHTML = value.self;
			newCellProject.innerHTML = "<a href='" + value.self + "'>" + value.id + "</a>";
		};

		projectTable.deleteRow(1);
	}
});