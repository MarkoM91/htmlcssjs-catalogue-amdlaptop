function init() {
  var swiper = new Swiper('.swiper-container', {
     pagination: {
       el: '.swiper-pagination',
       dynamicBullets: true,
       clickable: true
     },
   });
}

$(document).ready(init);
