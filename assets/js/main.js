$(window).scroll(function() {
    if($(this).scrollTop() > 300) {
        $('.site-header').addClass('opaque');
    } 
    else {
        $('.site-header').removeClass('opaque');
    }
});