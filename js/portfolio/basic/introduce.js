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
