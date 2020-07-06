// camps = [];
// conferences = [];
events = [];

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
    // if(type == 'conferences') {
    //     conferences = $.csv.toObjects(csv);  
    //     filterEvents('conferences');
    // } else if(type == 'camps') {
    //     camps = $.csv.toObjects(csv);  
    //     filterEvents('camps');
    // }
    events = $.csv.toObjects(csv);  
    filterEvents(type);
}

function filterEvents(type){
    // Get searched keywords
    var filterKeywords = document.getElementById('filterKeywords').value;
    
    // Get SortBy type
    var radioButtons = document.querySelectorAll('input[name="sortType"]');
    var sortBy;
    for(radioButton of radioButtons) {
        if(radioButton.checked) {
            sortBy = radioButton.value;
            break;
        }
    }
    
    // Get searched location
    var filterLocation = document.getElementById('filterLocation').value;

    // Filter by keywords
    var filteredEvents = events.filter(event => event.name.toString().includes(filterKeywords));

    // Filter by location
    filteredEvents = filteredEvents.filter(event => event.location.toString().includes(filterLocation));

    // if(type == 'conferences') {
    //     filteredEvents = conferences.filter(conference => conference.name.toString().includes(filterKeywords));
    // } else if(type == 'camps') {
    //     filteredEvents = camps.filter(camps => camps.name.toString().includes(filterKeywords));
    // }

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

    for(i = 0; i < events.length; i++) {
        var event = events[i];
        var link = event.link;
        var name = event.name;
        var date = event.date;
        var description = event.description;

        var location;
        if(event.location.includes(';')) {
            location = 'Multiple Locations';
        } else {
            location = event.location;
        }

        html += `<div class="event"><h4><a href="${link}" target="_blank">${name}</a></h4><p class="location"><i class="fas fa-map-marker-alt"></i>${location}</p><p class="date"><i class="fas fa-calendar-day"></i>${date}</p><p class="description">${description}</p></div>`;
    }

    // if(type == 'conferences') {
    //     for(i = 0; i < events.length; i++) {
    //         var conference = events[i];
    //         var link = conference.link;
    //         var name = conference.name;
    //         var date = conference.date;
    //         var description = conference.description;

    //         var location;
    //         if(conference.location.includes(';')) {
    //             location = 'Multiple Locations';
    //         } else {
    //             location = conference.location;
    //         }

    //         html += `<div class="conference"><h4><a href="${link}" target="_blank">${name}</a></h4><p class="conference-location"><i class="fas fa-map-marker-alt"></i>${location}</p><p class="conference-date"><i class="fas fa-calendar-day"></i>${date}</p><p class="conference-description">${description}</p></div>`;
    //     }
    // } else if(type == 'camps') {
    //     for(i = 0; i < events.length; i++) {
    //         var camp = events[i];

    //         var link = camp.link;
    //         var name = camp.name;
    //         var date = camp.date;
    //         var description = camp.description;

    //         var location;
    //         if(camp.location.includes(';')) {
    //             location = 'Multiple Locations';
    //         } else {
    //             location = camp.location;
    //         }

    //         html += `<div class="camp"><h4><a href="${link}" target="_blank">${name}</a></h4><p class="camp-location"><i class="fas fa-map-marker-alt"></i>${location}</p><p class="camp-date"><i class="fas fa-calendar-day"></i>${date}</p><p class="camp-description">${description}</p></div>`;
    //     }
    // }

    document.getElementById(type).innerHTML = html;
}

function toggleNav() {
    if(document.querySelector('input[id="hamburger-button"]').checked) {
        document.getElementById("navbar-nav").style.transform = "translateX(0)";
    } else {
        document.getElementById("navbar-nav").style.transform = "translateX(100%)";
    }
}