
	/*
		custom theme admin
	*/


	$(".nav-item").click(function () {
		if ($(this).hasClass("active"))
		{
			alert("Da ton tai");
		}
		else
		{
			$(this).addClass("active");
		}
	
	})