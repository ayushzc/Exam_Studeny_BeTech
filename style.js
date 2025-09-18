$(document).ready(function(){
    // Initialize Banner Carousel
    $('.banner-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut'
    });

    // Initialize Testimonial Carousel
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        margin: 30,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        once: true, // whether animation should happen only once - while scrolling down
    });
});

// ===================================================================
// == SCRIPT TO DISABLE RIGHT-CLICK AND DEVELOPER TOOLS
// ===================================================================

// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Disable specific key combinations for developer tools
document.onkeydown = function(e) {
    // Disable F12 key
    if(e.keyCode == 123) {
        return false;
    }
    // Disable I key (Ctrl+Shift+I)
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
        return false;
    }
    // Disable J key (Ctrl+Shift+J)
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
        return false;
    }
    // Disable U key (Ctrl+U)
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
        return false;
    }
};

$(document).ready(function(){
    // Initialize Related Courses Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        margin: 30,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});