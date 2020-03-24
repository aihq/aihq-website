$(window).scroll(function() {
    if($(this).scrollTop() > 300) {
        $('.site-header').addClass('opaque');

        $('.site-title').removeClass('logo-white');
        $('.site-title').addClass('logo-black');
    } 
    else {
        $('.site-header').removeClass('opaque');

        $('.site-title').removeClass('logo-black');
        $('.site-title').addClass('logo-white');
    }
});