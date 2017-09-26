$(function () {
	  $('.real-show-hint').on("click", function(e){ 
	  	e = e || window.event; 
	  	e.preventDefault();
	  	var ypos = $(this).offset().top+10;
	  	var xpos = $(this).offset().left;
	  	var RealHint =  $(this).data('hint');
	  	$(RealHint).css('top',ypos);
	  	$(RealHint).css('left',xpos);
	  	$(RealHint).toggle('fast'); 
	  	return; 
	  	});

	  $('.prm-cross').on('click', function(){ 
	  	$(this).parent().hide('fast'); 
	  	return false; 
	  });
	});