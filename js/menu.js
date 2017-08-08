$(document).ready(function() {
    $(".li-alive").addClass('menu--active');

    $(".li-alive").on("click", function() {
        $('#info-characters-alive').show();
        $('#info-characters-dead').hide();
        $('#info-seasons').hide();

        $('.menu li a').removeClass('menu--active');
        $(this).addClass('menu--active');
    });

    $(".li-dead").on("click", function() {
        $('#info-characters-alive').hide();
        $('#info-characters-dead').show();
        $('#info-seasons').hide();

        $('.menu li a').removeClass('menu--active');
        $(this).addClass('menu--active');

    });

    $(".li-seasons").on("click", function() {
        $('#info-characters-alive').hide();
        $('#info-characters-dead').hide();
        $('#info-seasons').show();

        $('.menu li a').removeClass('menu--active');
        $(this).addClass('menu--active');

    });

    //extended menu
    $(".li-description").addClass('menu--active');

    $(".li-description").on("click", function() {
        $('.info-character-extended-description').show();
        $('.info-character-extended-history').hide();
        $('.info-character-extended-performer').hide();

        $('.menu-extended li a').removeClass('menu--active');
        $(this).addClass('menu--active');
    });

    $(".li-history").on("click", function() {
        $('.info-character-extended-description').hide();
        $('.info-character-extended-history').show();
        $('.info-character-extended-performer').hide();

        $('.menu-extended li a').removeClass('menu--active');
        $(this).addClass('menu--active');

    });

    $(".li-performer").on("click", function() {
        $('.info-character-extended-description').hide();
        $('.info-character-extended-history').hide();
        $('.info-character-extended-performer').show();

        $('.menu-extended li a').removeClass('menu--active');
        $(this).addClass('menu--active');

    });

});