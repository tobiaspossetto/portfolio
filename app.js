$(document).ready(function(){
    $('#iniciobtn').click( function(e) { 
        e.preventDefault();
        //Animamos sus propiedades CSS con animate
        $('html, body').animate({
            scrollTop: $("#inicio").offset().top  
        }, 1000);
    } );

    $('#portfoliobtn').click( function(e) { 
        e.preventDefault();
        //Animamos sus propiedades CSS con animate
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top  
        }, 1000);
    } );


    $('#contactobtn').click( function(e) { 
        e.preventDefault();
        //Animamos sus propiedades CSS con animate
        $('html, body').animate({
            scrollTop: $("#contacto").offset().top  
        }, 1000);
    } );
    

    $('#verMas').click( function(e) { 
        e.preventDefault();
        //Animamos sus propiedades CSS con animate
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top  
        }, 1000);
    } );
})