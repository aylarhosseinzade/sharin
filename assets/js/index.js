$(document).ready(function () {
  document.getElementsByTagName("html")[0].style.visibility = "visible";
});
var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 12,
  loop: false,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    576: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: true,
      loop: false,
    },
    1199: {
      items: 4,
      nav: true,
      loop: false,
    },
    1200: {
      items: 4,
      nav: true,
      loop: false,
    },
  },
});

$(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$(".owl-next").html('<i class="fa fa-chevron-right"></i>');
$(document).ready(function () {
  var owl = $("#my-slider");
  owl.on("mouseleave", function (e) {
    var data = $(e.currentTarget).data("owl.carousel");
    //console.log('autoplay:' + data.settings.autoplay + ' autoplayTimeout' + data.settings.autoplayTimeout);
    if (data.settings.autoplay) {
      $(e.currentTarget).trigger("stop.owl.autoplay");
      $(e.currentTarget).trigger(
        "play.owl.autoplay",
        data.settings.autoplayTimeout
      );
      //console.log('It is working autoplay:' + data.settings.autoplay + ' autoplayTimeout' + data.settings.autoplayTimeout);
    }
  });
});
