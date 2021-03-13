$(document).ready(function(){
    // Show hide popover
    $(".nav-toggler").click(function(){
        $("#nav-menu").slideToggle();
    });
});

$(document).ready(function(){
    $("#exit").click(function(){
        $("#nav-menu").slideToggle();
    });
});

$(document).ready(function(){
    $(window).resize(function(){
        if ($(window).width > "960px"){
            $("#nav-menu").removeAttr("style");
        }
    });
});

$(document).ready(function(){
    // Show hide popover
    $("#federation").click(function(){
        $("#federation-page").slideToggle();
    });
});

$(document).ready(function(){
    $("#goback").click(function(){
        $("#federation-page").slideToggle();
    });
});