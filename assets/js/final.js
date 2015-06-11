$(document).ready(function() {


    $('.summary').click(function(){
        $('html, body').animate({scrollTop:($('#summary').position().top)-100}, 'slow');
        return false;
    });

    $('.final-report').click(function(){
        $('html, body').animate({scrollTop:($('#final-report').position().top)-100}, 'slow');
        return false;
    });

    $('.introduction').click(function(){
        $('html, body').animate({scrollTop:($('#introduction').position().top)-100}, 'slow');
        return false;
    });

    $('.procedure').click(function(){
        $('html, body').animate({scrollTop:($('#procedure').position().top)-100}, 'slow');
        return false;
    });

    $('.results').click(function(){
        $('html, body').animate({scrollTop:($('#results').position().top)-100}, 'slow');
        return false;
    });

});
