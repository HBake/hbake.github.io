// (function($) {

// 	// "use strict";

// 	// var fullHeight = function() {

// 	// 	$('.js-fullheight').css('height', $(window).height());
// 	// 	$(window).resize(function(){
// 	// 		$('.js-fullheight').css('height', $(window).height());
// 	// 	});

// 	// };
// 	// fullHeight();

// 	$('#sidebarCollapse').on('click', function () {
//       $('#sidebar').toggleClass('active');
//   });

// })(jQuery);

$(document).ready(function(){
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

$.get("navbar.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});
$.get("smallview-import.html", function(data){
    $("#smallview-import-placeholder").replaceWith(data);
});