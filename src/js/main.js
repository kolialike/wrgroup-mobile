jQuery(function($){

	var body = $("body");
	 var menuBurger = $(".menu-burger");
	  menuBurger.on('click', function(event) {
	  	event.preventDefault();
	  	body.toggleClass('mobile-menu-open');
	  });
	  var mobileMenu = $(".mobile-menu");
	  mobileMenu.on('click', function(event) {
	  	event.preventDefault();
	  	body.removeClass("mobile-menu-open");
	  });
	  var mobileMenuItem = $(".mobile-menu-item");
	  mobileMenuItem.on('click', function(event) {
	  	event.stopPropagation();
	  });


  var languageRu = $(".language-ru");
	var language = $(".language");
	languageRu.on('click', function(event) {
		event.preventDefault();
	      language.toggleClass('language-open');
	      
	});

	var companyServicesSelect = $("#company-services-select");
	companyServicesSelect.on('change', function (event) {
		var optVal = $(this).val();
		$("#company-services-select-"+optVal).addClass('open').siblings().removeClass('open');
	});
});
