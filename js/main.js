(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    $(document).ready(function () {
        var $videoSrc;
    
        // Store the video source when the play button is clicked
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
    
        // When the modal is shown, set the iframe src to play the video
        $('#videoModal').on('shown.bs.modal', function () {
            $("#videoIframe").attr('src', $videoSrc + "?autoplay=1&modestbranding=1&showinfo=0");
        });
    
        // When the modal is hidden, remove the src to stop the video
        $('#videoModal').on('hide.bs.modal', function () {
            $("#videoIframe").attr('src', '');
        });
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
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
        smartSpeed: 1500,
        margin: 45,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

const orderForm = document.getElementById('orderForm');
orderForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const flower = document.getElementById('flower').value;
    const message = document.getElementById('message').value;

    // Set modal content
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalEmail').textContent = email;
    document.getElementById('modalFlower').textContent = flower;
    document.getElementById('modalMessage').textContent = message || "No message provided";

    // Show confirmation modal
    const confirmationModal = new bootstrap.Modal(document.getElementById('orderConfirmationModal'));
    confirmationModal.show();
});
$('#videoModal').on('show.bs.modal', function (e) {
    var button = $(e.relatedTarget); // Button that triggered the modal
    var videoSrc = button.data('src'); // Get video src from the button's data-src attribute
    var modal = $(this);
    modal.find('iframe').attr('src', videoSrc);
});

// This script resets the iframe src to an empty string when the modal is closed
$('#videoModal').on('hidden.bs.modal', function (e) {
    var modal = $(this);
    modal.find('iframe').attr('src', '');
});

