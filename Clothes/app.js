
$(document).ready( () =>{

header = $('header');


    $(window).on('scroll',() => {
        if($(window).scrollTop()){
            $(header).addClass("black");
        }
        else {
            $(header).removeClass("black");
        }
    })



})
