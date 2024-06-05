$(document).ready(function() {
  AOS.init({
    duration: 1200,
  })

  //nav 이벤트
  const menu = document.querySelector(".header-left-area");

  $(".menu-button").on("click",function () {
    if (menu.classList.contains("on")) {
      menu.classList.remove("on")
    } else {
      menu.classList.add("on")
    }
  })

  $(".header-left-close").on("click",function () {
    menu.classList.remove("on")
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
