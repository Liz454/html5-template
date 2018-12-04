
function scrollFunc(elementId){
    var element = document.getElementById(elementId);
    element.scrollIntoView(true);
}

$(function() {
    $('#hamburger').on('click', function(){
        // var bar1 = $("#hb-bar1");
        // var bar2 = $("#hb-bar2");
        // var bar3 = $("#hb-bar3");
        // if (bar1.hasClass('bar1-animate') || bar1.hasClass('bar1-animate-reverse')){
        //     bar1.toggleClass("bar1-animate bar1-animate-reverse");
        // }else{
        //     bar1.addClass("bar1-animate");
        // }
        $("#hb-bar1").toggleClass("bar1-animate");
        $("#hb-bar2").toggleClass("bar2-animate");
        $("#hb-bar3").toggleClass("bar3-animate");
    });
});
