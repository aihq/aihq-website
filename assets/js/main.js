$(window).scroll(function() {
    if($(this).scrollTop() > ($('#site-header').height())) {
        $('#site-header').addClass('opaque');

        $('#logo').attr('src', '/aihq-website/assets/img/logo-black.png');
    } 
    else {
        $('#site-header').removeClass('opaque');

        $('#logo').attr('src', '/aihq-website/assets/img/logo-white.png');
    }
});

function openModal(websiteName){
    document.getElementsByClassName('bg-modal')[0].style.display = 'flex';
    document.getElementById('modal-' + websiteName).style.display = 'flex';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

function closeModal(websiteName){
    document.getElementsByClassName('bg-modal')[0].style.display = 'none';
    document.getElementById('modal-' + websiteName).style.display = 'none';
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
}

var acc = document.getElementsByClassName('course-name');
var i;

for(i = 0; i < acc.length; i++){
    acc[i].addEventListener('click', function(){
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else{
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}