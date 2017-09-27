function getInternetExplorerVersion()
                            {
                                var rv = -1;
                                if (navigator.appName == 'Microsoft Internet Explorer')
                                {
                                    var ua = navigator.userAgent;
                                    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                                    if (re.exec(ua) != null)
                                        rv = parseFloat( RegExp.$1 );
                                }
                                else if (navigator.appName == 'Netscape')
                                {
                                    var ua = navigator.userAgent;
                                    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
                                    if (re.exec(ua) != null)
                                        rv = parseFloat( RegExp.$1 );
                                }
                                return rv;
                            }
							
if(getInternetExplorerVersion()==-1){

$(function () {
	  $('.real-show-hint1').on("click", function(e){ 
	  	e = e || window.event; 
	  	e.preventDefault();
	  	var ypos = $(this).offset().top+10;
	  	var xpos = $(this).offset().left;
	  	var RealHint =  $(this).data('hint1');
	  	$(RealHint).css('top',ypos);
	  	$(RealHint).css('left',xpos);
	  	$(RealHint).toggle('fast'); 
	  	return; 
	  	});

	  $('.prm-cross1').on('click', function(){ 
	  	$(this).parent().hide('fast'); 
	  	return false; 
	  });
	});
}
else {
$(function(){
    $('.real-show-hint1').on("click", function(){
      $( ".real-hint1" ).show(); 
    });
    $(document).click(function(e){ 
            if ($(e.target).closest('.real-show-hint1').length) return;
            $('.real-hint1').hide();
            e.stopPropagation();
        });
    
});
};