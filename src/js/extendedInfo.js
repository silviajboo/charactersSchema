$(document).ready(function() {

    $(".info-character-extended").on("click", function() {
        if ($('.info-character-extended').is(':visible'))
            $(this).hide();
        else
            $(this).show();
        // $('.info-character-extended').attr("display").val()
    });

});