$(document).ready(function(){
 
        $(".about").hide();
 
    $('.show_hide_about').click(function(){
    $(".about").slideToggle('slow');
    $(".contact").hide();

    return false;
    });
 
});

$(document).ready(function(){
 
        $(".contact").hide();
 
    $('.show_hide_contact').click(function(){
    $(".contact").slideToggle('slow');
    $(".about").hide();

    return false;
    });
 
});