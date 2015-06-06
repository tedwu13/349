$(document).ready(function() {


    $('.objective').click(function(){
        $('html, body').animate({scrollTop:($('#objective').position().top)-100}, 'slow');
        return false;
    });


    $('.data_collection').click(function(){
        $('html, body').animate({scrollTop:($('#data_collection').position().top)-100}, 'slow');
        return false;
    });
    $('.design_decisions').click(function(){
        $('html, body').animate({scrollTop:($('#design_decisions').position().top)-100}, 'slow');
        return false;
    });

    $('.results').click(function(){
        $('html, body').animate({scrollTop:($('#results').position().top)-100}, 'slow');
        return false;
    });

    $('.next_steps').click(function(){
        $('html, body').animate({scrollTop:($('#next_steps').position().top)-100}, 'slow');
        return false;
    });

});
