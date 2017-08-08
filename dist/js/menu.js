$(document).ready(function() {
    $(".li-alive").on("click", function() {
        $('#info-characters-alive').show();
        $('#info-characters-dead').hide();
        $('#info-seasons').hide();
    });

    $(".li-dead").on("click", function() {
        $('#info-characters-alive').hide();
        $('#info-characters-dead').show();
        $('#info-seasons').hide();
    });

    $(".li-seasons").on("click", function() {
        $('#info-characters-alive').hide();
        $('#info-characters-dead').hide();
        $('#info-seasons').show();
    });
});