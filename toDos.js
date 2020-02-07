$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
})

//Click on x to delete todos
$("ul").on("click","span",function(event) {
	$(this).parent().fadeOut(300,function(){
		$(this).remove();
	});
	event.stopPropagation;
});

$("input[type = 'text']").on("keypress",function(event){
	if(event.which === 13){
		var newT = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + newT + "</li>")
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});