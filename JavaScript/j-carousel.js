$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 40,
  responsiveClass: true,
  responsive: {
    0: {
      loop: true,
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: false,
    },
    900: {
      items: 1,
      nav: false,
      loop: true,
    },
  },
});
