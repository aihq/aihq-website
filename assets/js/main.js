camps = [];
conferences = [];

$(window).scroll(function() {
    if($(this).scrollTop() > ($('#site-header').height())) {
        $('#site-header').addClass('opaque');

        $('#logo').attr('src', '/assets/img/logo-black.svg');
    } 
    else {
        $('#site-header').removeClass('opaque');

        $('#logo').attr('src', '/assets/img/logo-white.svg');
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

$('.dropdown-el').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('expanded');
    $('#'+$(e.target).attr('for')).prop('checked',true);
});

$(document).ready(function() {
    var pathName = window.location.pathname.toString();

    if(pathName.includes('camps') || pathName.includes('conferences')) {
        var type = pathName.substring(1, pathName.length - 1);
    
        var fileUrl = '/assets/csv/' + type + '.csv';
    
        $.ajax({
            type: 'GET',
            url: fileUrl,
            dataType: 'text',
            success: function(csv) {processCSV(csv, type);}
        });
    }

    $('.dropdown-el').removeClass('expanded');
});

function processCSV(csv, type) {
    if(type == 'conferences') {
        conferences = $.csv.toObjects(csv);  
        filterEvents('conferences');
    } else if(type == 'camps') {
        camps = $.csv.toObjects(csv);  
        filterEvents('camps');
    }

}

function filterEvents(type){
    var filterKeywords = document.getElementById('filterKeywords').value;
    
    var radioButtons = document.querySelectorAll('input[name="sortType"]');
    var sortBy;
    for(radioButton of radioButtons) {
        if(radioButton.checked) {
            sortBy = radioButton.value;
            break;
        }
    }
    // console.log(sortBy);
    
    var filteredEvents;

    if(type == 'conferences') {
        filteredEvents = conferences.filter(conference => conference.name.toString().includes(filterKeywords));
    } else if(type == 'camps') {
        filteredEvents = camps.filter(camps => camps.name.toString().includes(filterKeywords));
    }

    switch(sortBy) {
        case 'alphabetical':
            filteredEvents.sort((a, b) => (a.name > b.name) ? 1 : -1);
            break;
        case 'newest':
            filteredEvents.reverse();
            break;
    }

    fillEvents(filteredEvents, type)
}

function fillEvents(events, type) {
    // console.log(type);

    var html = '';
    if(type == 'conferences') {
        for(i = 0; i < events.length; i++) {
            var conference = events[i];
            html += `<div class="conference"><h4><a href="${conference.link}" target="_blank">${conference.name}</a></h4><p class="conference-location"><i class="fas fa-map-marker-alt"></i>${conference.location}</p><p class="conference-date"><i class="fas fa-calendar-day"></i>${conference.date}</p><p class="conference-description">${conference.description}</p></div>`;
        }
    } else if(type == 'camps') {
        for(i = 0; i < events.length; i++) {
            var camp = events[i];
            html += `<div class="camp"><h4><a href="${camp.link}" target="_blank">${camp.name}</a></h4><p class="camp-location"><i class="fas fa-map-marker-alt"></i>${camp.location}</p><p class="camp-date"><i class="fas fa-calendar-day"></i>${camp.date}</p><p class="camp-description">${camp.description}</p></div>`;
        }
    }

    document.getElementById(type).innerHTML = html;
}

function toggleNav() {
    if(document.querySelector('input[id="hamburger-button"]').checked) {
        document.getElementById("navbar-nav").style.transform = "translateX(0)";
    } else {
        document.getElementById("navbar-nav").style.transform = "translateX(100%)";
    }
}