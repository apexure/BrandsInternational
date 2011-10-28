$(document).ready(function(){

	//#####RIGHT NAV EVENT HANDLER####
	$('#wrapper_descriptionBox #arrow_nav_wrapper .rightNav').click(function(){  		//ON CLICK EVENT OVER #arrow_nav_wrapper .rightNav DIV

		var current_txt =$('#wrapper_descriptionBox .description_box .showtxt');		 //SET THE 'current_txt' variable to first child element of the description_box
		var next_txt =current_txt.next().length ? current_txt.next() : current_txt.parent().children(':last'); //locate the element which is next to current element
		current_txt.hide().removeClass('showtxt');			//HIDE THE CURRENT DIV AND REMOVE ITS 'show_txt' CLASS ATTRIB
		next_txt.fadeIn().addClass('showtxt');				//SHOW-FADE IN THE NEXT ELEMENT AND ADD 'show_txt' CLASS ATTRIB TO THIS ELEMENT 

		var current =$('#wrapper_imageBox .image_box .show');			//SET THE 'current_txt' variable to first child element of the image_box
		var next =current.next().length ? current.next() : current.parent().children(':last'); 		//locate the element which is before the current element
		current.fadeOut().removeClass('show'); 		//HIDE THE CURRENT DIV AND REMOVE ITS 'show_txt' CLASS ATTRIB
		next.fadeIn().addClass('show');			//SWAP TO THE PREV ELEMENT AND ADD 'show_txt' CLASS ATTRIB TO THIS ELEMENT 

	});


	//#####LEFT NAV EVENT HANDLER####
	$('#wrapper_descriptionBox #arrow_nav_wrapper .leftNav').click(function(){ 			//ON CLICK EVENT OVER CLASS .leftNav

		var current =$('#wrapper_imageBox .show');		//SET THE 'current' variable to first child element of the image_box
		var prev =current.prev().length ? current.prev() : current.parent().children(':first');		//locate the element which is next to current element
		current.hide().removeClass('show');		//HIDE THE CURRENT DIV AND REMOVE ITS 'show' CLASS ATTRIB
		prev.fadeIn().addClass('show');		//SHOW-FADE IN THE NEXT ELEMENT AND ADD 'show' CLASS ATTRIB TO THIS ELEMENT 

		var current_txt =$('#wrapper_descriptionBox .description_box .showtxt');		//SET THE 'current' variable to first child element of the description_box
		var prev_txt =current_txt.prev().length ? current_txt.prev() : current_txt.parent().children(':first');		//locate the element which is before the current element
		current_txt.fadeOut().removeClass('showtxt');		//HIDE THE CURRENT DIV AND REMOVE ITS 'show_txt' CLASS ATTRIB
		prev_txt.fadeIn().addClass('showtxt');			//SWAP TO THE PREV ELEMENT AND ADD 'show_txt' CLASS ATTRIB TO THIS ELEMENT 

	});

});

//jquery by www.sayiramin.info
//14-may-2011
