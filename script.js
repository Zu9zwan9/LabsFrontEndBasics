/*  Course Slider
  /*----------------------------------------------------*/

function active_course() {
    if ($(document).ready(function(){
        $(".active_course").owlCarousel({
            loop: true,
            margin: 20,
            items: 3,
            nav: true,
            autoplay: 2500,
            smartSpeed: 1500,
            dots: false,
            responsiveClass: true,
            thumbs: true,
            thumbsPrerendered: true,
            navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                991: {
                    items: 2,
                    margin: 30
                },
                1200: {
                    items: 3,
                    margin: 30
                }
            }
        });
    }));
}
active_course();

/*----------------------------------------------------*/
/*  Event Slider
  /*----------------------------------------------------*/
/* COUNTDOWN */
let countDownEnd = false;

setInterval(() => {
    let targetTime = 1680038340000;
    let now = new Date().getTime();
    let timeleft = targetTime - now;

    if (timeleft < 0) {
        countDownEnd = true;
    }

    // Calculating the days, hours, minutes and seconds left
    let day = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("day").innerText = day;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = mins;
    document.getElementById("seconds").innerText = secs;
}, 1000);

/*  Testimonials Slider
    /*----------------------------------------------------*/
function clientsay_slider() {
    if ($(".owl_slider").length) {
        $(".owl_slider").owlCarousel({
            loop: true,
            margin: 30,
            items: 2,
            autoplay: 2500,
            smartSpeed: 2500,
            dots: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2

                }
            }
        });
    }
}
clientsay_slider();

/*----------------------------------------------------*/
