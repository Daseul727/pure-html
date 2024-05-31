
document.addEventListener("DOMContentLoaded", function() {
  document.title = MAIN_TITLE;

  document.getElementById("nav_menu_1").text = NAV_MENU_1
  document.getElementById("nav_menu_2").text = NAV_MENU_2
  document.getElementById("nav_menu_3").text = NAV_MENU_3
  document.getElementById("nav_menu_4").text = NAV_MENU_4
});


/**
 * add header scroll class
 */
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll >= 50){
    $('.header').addClass('scroll')
  }else{
    $('.header').removeClass('scroll')
  }
});

/**
 * nav click event
 * @param id
 */
function navMove(id){
  var offset = $("#" + id).offset().top;
  if (window.innerWidth < 768) {
    $('html, body').animate({scrollTop : offset - 70}, 400);
  }else{
    $('html, body').animate({scrollTop : offset}, 400);
  }
}

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

AOS.init({
  duration: 1200,
})

new Swiper('.swiper-003', {

  //자동
  autoplay: {
    delay: 3000,
    loop: true
  },
  loop: true,

  //보여줄 화면
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  breakpoints  : {
    768 : {
      slidesPerView: 4
    }
  }
})
