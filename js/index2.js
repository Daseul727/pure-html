new Swiper('.swiper-001', {

  //자동
  autoplay: {
    delay: 4000
  },
  loop: true,

  //보여줄 화면
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination-001',
    clickable: true
  }
})

new Swiper('.swiper-002', {

  //자동
  autoplay: {
    delay: 5000
  },
  loop: true,

  //보여줄 화면
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination-002',
    clickable: true
  },
  navigation: {
    prevEl: '.swiper-button-prev-002',
    nextEl: '.swiper-button-next-002'
  }
})

new Swiper('.swiper-003', {

  //자동
  autoplay: {
    delay: 5000
  },
  loop: true,

  //보여줄 화면
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination-003',
    clickable: true
  },
  navigation: {
    prevEl: '.swiper-button-prev-003',
    nextEl: '.swiper-button-next-003'
  }
})
