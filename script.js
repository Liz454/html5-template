// back to top button and maybe any other on scroll functions
var scrollPos;
$(window).on('scroll', function(){
    scrollPos = $(window).scrollTop();

    //back to top button
    if (scrollPos > $('#howItWorks').offset().top){
        $('#arrow__footer').fadeIn(800);
    } else{
        $('#arrow__footer').fadeOut();
    }
});

// call functions on resize
$(window).on('resize', function(){
    menuPosition();
});

//Scroll function
function scrollFunc(elementId){
    $("#" + elementId)[0].scrollIntoView(true);
}
$('#arrow__footer').on('click', function(){
    $(".navbar")[0].scrollIntoView(true);
});


// Hamburger animation
$(function() {
    $('#hamburger').on('click', function(){
        showMenu();
        var bar1 = $("#hb-bar1");
        var bar2 = $("#hb-bar2");
        var bar3 = $("#hb-bar3");

        if (bar1.hasClass('bar1-animate') || bar1.hasClass('bar1-animate--reverse')){
            bar1.toggleClass('bar1-animate--reverse').toggleClass('bar1-animate');
            bar2.toggleClass('bar2-animate--reverse').toggleClass('bar2-animate');
            bar3.toggleClass('bar3-animate--reverse').toggleClass('bar3-animate');
        } else{
            bar1.addClass("bar1-animate");
            bar2.addClass("bar2-animate");
            bar3.addClass("bar3-animate");
        }
    });
});

// Display menu
function showMenu() {
    $("#menu").slideToggle(500, "swing");
    $('.menu-option_container').fadeToggle(300);
    $("body").toggleClass("no-scroll");
    menuPosition();
}

//Menu positioning
function menuPosition(){
    var marginV = ($(window).height() - $('.menu_container').height()) / 2;
    var marginH = ($(window).width() - $('.menu_container').width()) / 2;
    if (marginH > 450){
        marginH = 450;
    }
    $('.menu_container').css({'margin': marginV +'px ' + marginH + 'px'});
}

// hide menu and go to selected section
function menuButtons(id){
    $("#hamburger").click();
    scrollFunc(id);
}

// menu option underline
$('.menu-option_container').hover(function(){
    $(this).find('.menu_dash__inner').addClass('menu_dash__inner--hover');
}, function(){
    $(this).find('.menu_dash__inner').removeClass('menu_dash__inner--hover');
});