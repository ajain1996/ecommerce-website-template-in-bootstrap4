$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav:true,
    navText: [
        "<i class='navtext fa fa-caret-left'></i>",
        "<i class='navtext fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});