import "../scss/style.scss";

// import Swiper from "./swiper/swiper-bundle.min";
// import "swiper/css";

let init = false;
let swiper;

function swiperCard() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        loop: true,
        speed: 1000,
        freeMode: true,
        slidesPerView: 1.2,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}

swiperCard();
window.addEventListener("resize", swiperCard);

// import "../fonts/TTLakes/stylesheet.css";
// import "./scripts/slider.js";
// import "./test.js";
