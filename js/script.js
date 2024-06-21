$(document).ready(function() {
    $('.project-works:first').show()
    $('.project-nav:first').addClass('active')
    $('.project-nav li a').click(function() {
        $('.project-nav li').removeClass('active');
        $(this).parent().addClass('active');
        $('.project-works ').hide();
        var ids = $(this).attr('href')
        $(ids).show();
        return false;

    });

    $('.sliderslick').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.slider',

    });
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        asNavFor: '.sliderslick'

    });
    window.onscroll = function() { myFunction() };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    AOS.init();


});
$(document).scroll(function() {
    if ($(this).scrollTop() > 30) {
        $('header').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
    }
    var y = $(this).scrollTop();
    if (y > 500) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});