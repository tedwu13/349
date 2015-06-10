$(document).ready(function() {


    $('.problem').click(function(){
        $('html, body').animate({scrollTop:($('#problem').position().top)-100}, 'slow');
        return false;
    });


    $('.solution').click(function(){
        $('html, body').animate({scrollTop:($('#solution').position().top)-100}, 'slow');
        return false;
    });
    $('.methods').click(function(){
        $('html, body').animate({scrollTop:($('#methods').position().top)-100}, 'slow');
        return false;
    });

    $('.results').click(function(){
        $('html, body').animate({scrollTop:($('#results').position().top)-100}, 'slow');
        return false;
    });

});
