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
    // Show background
    document.getElementsByClassName('bg-modal')[0].style.display = 'flex';

    // Move modal down
    // document.getElementById('modal-' + websiteName).style.transform = 'translateY(25%)';

    // Show modal
    document.getElementById('modal-' + websiteName).style.display = 'flex';

    // Move modal up
    // document.getElementById('modal-' + websiteName).style.transform = 'none';

    // Prevent scrolling
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

function closeModal(websiteName){
    // Hide background
    document.getElementsByClassName('bg-modal')[0].style.display = 'none';

    // Hide modal
    document.getElementById('modal-' + websiteName).style.display = 'none';

    // Allow scrolling
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