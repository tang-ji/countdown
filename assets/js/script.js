$(function(){
	
	var note = $('#note'),
		ts = new Date(2018, 11, 22),
		newYear = true;
	
	if((new Date()) > (new Date(2018, 11, 12))){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				message += "left until your husband coming!";
			}
			else {
				message += "left to 10 days from now!";
			}
			
			note.html(message);
		}
	});
	
});
