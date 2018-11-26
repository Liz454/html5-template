
function scrollFunc(elementId){
    var element = document.getElementById(elementId);
    element.scrollIntoView(true);
}

$(function() {

    var myButton = $('.btn.btn-arrow')

    $('#hamburger').on('click', function(){
        $(this).toggleClass('active');
        myButton.fadeOut( "slow", function() {
            // Animation complete.
          });
    });

});
