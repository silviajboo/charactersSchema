$(document).ready(function() {

    $(".info-character-basics").on("click", function() {

        if ($('.info-character-extended').hasClass('info-character-extended--active'))
          {
            $(this).siblings().select('.info-character-extended').removeClass('info-character-extended--active');
           
           } // $('.info-character-extended').removeClass('info-character-extended--active');
        else{
        	$('.info-character-extended').removeClass('info-character-extended--active');
        	$(this).siblings().select('.info-character-extended').addClass('info-character-extended--active');
            }// $('.info-character-extended').addClass('info-character-extended--active');
    });

});