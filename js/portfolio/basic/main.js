$(document).ready(function() {
  AOS.init({
    duration: 1200,
  })
});

new Swiper('.swiper-001', {

  //자동
  autoplay: {
    delay: 3000
  },
  loop: true,

  speed: 1000,
  //보여줄 화면
  slidesPerView: 1,
  spaceBetween: 4,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination-001',
    clickable: true
  }
})
