	//This loads the master page elements
	$("#pageMenu").load("MasterPage.html #mainMenu");
	$("#pageFooter").load("MasterPage.html #mainFooter");

  
	//This checks for contact form
	var cform = document.getElementById('contactForm');
	if (cform =! null){
		$("#contactForm").load("ContactForm.html #form");
	
	}