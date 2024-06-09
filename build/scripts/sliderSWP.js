const swiper = new Swiper(".mySwiper", {
  autoplay: {
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
},
    loop: true,
   
    navigation: {
      nextEl: ".nextSli",
      prevEl: ".prevSli",
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 41,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 41,
      },
      650: {
        slidesPerView: 3,

        spaceBetween: 21,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 39,
      },
      550: {
        spaceBetween: 20,
      },
      500: {
        spaceBetween: 18,
      },
      1050: {
        spaceBetween: 37,
      },
      1200: {
        spaceBetween: 37,
        slidesPerView: 4,
      },
    },
    slidesPerView: 4,
    spaceBetween: 37,
  });