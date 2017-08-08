$(document).ready(function() {

    $(".info-character-basics").on("click", function() {

        if ($(this).siblings().hasClass('info-character-extended--active'))
            $(this).siblings().select('.info-character-extended').removeClass('info-character-extended--active');
        else {
            $('.info-character-extended').removeClass('info-character-extended--active');
            $(this).siblings().select('.info-character-extended').addClass('info-character-extended--active');
        }
    });

   $(".info-season-basics").on("click", function() {

        if ($(this).siblings().hasClass('info-season-extended--active'))
            $(this).siblings().select('.info-season-extended').removeClass('info-season-extended--active');
        else {
            $('.info-season-extended').removeClass('info-season-extended--active');
            $(this).siblings().select('.info-season-extended').addClass('info-season-extended--active');
        }
    });

});