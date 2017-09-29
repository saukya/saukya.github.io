// Scroll to product overview
$(".product-overview-link").click(function() {
    $('html, body').animate({
        scrollTop: $(".product-overview-area").offset().top
    }, 1000);
});