$(function(){
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll>=100){
            $('nav').addClass('stickyadd');   
            $('nav').removeClass('stick');
        }
        else{
            $('nav').removeClass('stickyadd');
            $('nav').removeClass('stick');
        }
    })
    AOS.init();
})