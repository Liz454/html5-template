
function scrollFunc(elementId){
    var element = document.getElementById(elementId);
    element.scrollIntoView(true);
}

$(function() {
    $('#hamburger').on('click', function(){
        var bar1 = $("#hb-bar1");
        var bar2 = $("#hb-bar2");
        var bar3 = $("#hb-bar3");
        if (bar1.hasClass('bar1-animate')){
            bar1.addClass('bar1-animate--reverse').removeClass('bar1-animate');
            bar2.addClass('bar2-animate--reverse').removeClass('bar2-animate');
            bar3.addClass('bar3-animate--reverse').removeClass('bar3-animate');
        }else if(bar1.hasClass('bar1-animate--reverse')){
            bar1.addClass("bar1-animate").removeClass('bar1-animate--reverse');
            bar2.addClass("bar2-animate").removeClass('bar2-animate--reverse');
            bar3.addClass("bar3-animate").removeClass('bar3-animate--reverse');
        } else{
            bar1.addClass("bar1-animate");
            bar2.addClass("bar2-animate");
            bar3.addClass("bar3-animate");
        }
        // $("#hb-bar1").toggleClass("bar1-animate");
        // $("#hb-bar2").toggleClass("bar2-animate");
        // $("#hb-bar3").toggleClass("bar3-animate");
    });
});
