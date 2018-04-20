$(document).ready(function(){
    function scrolluj(){
        $('html, body').animate({
        scrollTop: $("#target1").offset().top
        }, 1000);
    }

    setTimeout(scrolluj, 4000);

});
