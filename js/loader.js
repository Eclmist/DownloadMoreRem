(function($) {
    "use strict"; // Start of use strict
	
	$(function() {
        $(".dial").knob({
			'angleOffset':-130,
			'angleArc':260,
		});
    });
	
	$('#downloadBtn').get(0).onclick=function(){
				
		var percent = 0;
					
		var refreshIntervalId;
		
		$('.kawaii').css("visibility", "visible");
		
		refreshIntervalId = setInterval(function(){ 
			percent	+= 1;
		
			$('.dial').val(percent).trigger('change');

			if (percent >= 0)
			{
				$('#funtxt').html("Initializing Rem...");
			}

			if (percent >= 25)
			{
				$('#funtxt').html("Rewinding time...");
			}
			
			if (percent >= 50)
			{
				$('#funtxt').html("Retrieving lost memory...");
			}

			if (percent >= 75)
			{
				$('#funtxt').html("Almost there...");
			}

			if (percent >= 100)
			{
				$('#funtxt').html("Extra Rem downloaded!");
				$('.kawaii').css("visibility", "hidden");
				clearInterval(refreshIntervalId);
			}

			}, 150
		);
	};

})(jQuery); // End of use strict
