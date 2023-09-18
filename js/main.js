function gotowhatsapp() {

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var sub = document.getElementById("subject").value;
    var msg = document.getElementById("message").value;

    var url = "https://wa.me/918939618999?text="
        + "Name: " + name + "%0a"
        + "Phone: " + phone + "%0a"
        + "Email: " + email + "%0a"
        + "Subject: " + sub + "%0a"
        + "Message: " + msg;

    window.open(url, '_blank').focus();
}
function sendEmail() {

    var email = document.getElementById("emailInput").value;


    if (email.trim() !== "") {
 
        window.location.href = "mailto:Saravanan@nithiyasrienterprises.com?subject=Subject&body=Hello,%0D%0A%0D%0A" + email;
    } else {
        alert("Please enter your email address.");
    }
}

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

