$(document).ready(function() {
    $('.banner .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 1
            },
            1000: {
                items: 1
            }
        }


    })
    $('.popular .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            767: {
                items: 4
            },
            991: {
                items: 4
            },
            1000: {
                items: 8
            }
        }


    })


});