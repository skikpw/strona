$(document).ready(function(){
    function scrolluj(){
        $('html, body').animate({
        scrollTop: $("#target").offset().top
        }, 1000);
    }
    setTimeout(scrolluj, 700);

});
