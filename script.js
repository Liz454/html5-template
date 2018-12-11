
function scrollFunc(elementId){
    $("#" + elementId)[0].scrollIntoView(true);
}

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

function showMenu() {
    $("#menu").fadeToggle(500, "swing");
    $("body").toggleClass("no-scroll");

    var windowHeight = $("window").height();
    console.log(windowHeight);
    // var menuHeight = $('.menu_container')[0];
    // console.log(menuHeight.innerHeight());
}
