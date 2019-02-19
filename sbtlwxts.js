$(document).keydown(function(event){
	if(event.keyCode == 50){
		var dom = $(document.activeElement);
		var content = $(dom).attr('data');
		alert(content);
		return false;
	}
}
);