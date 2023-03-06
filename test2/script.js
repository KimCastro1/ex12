const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const badgeEl = document.querySelector("header .badges");
const fadeEls = document.querySelectorAll(".visual .fade_in");
const promotionEl = document.querySelector("section.promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
const spyEls = document.querySelectorAll(".scroll-spy");
const thisYear = document.querySelector(".this-year");
const toTopEL = document.querySelector(".to-top");

toTopEL.addEventListener("click", function () {
  gsap.to(window, { scrollTo: 0 });
});
thisYear.textContent = new Date().getFullYear();
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
promotionToggleBtn.addEventListener("click", function () {
  if (promotionEl.classList.contains("hide")) {
    promotionEl.classList.remove("hide");
  } else {
    promotionEl.classList.add("hide");
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: "none",
    });
    gsap.to(toTopEL, 0.6, {
      opacity: 1,
      x: 0,
    });
  } else {
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: "block",
    });
    gsap.to(toTopEL, 0.6, {
      opacity: 0,
      x: 100,
    });
  }
});
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.5,
    opacity: 1,
  });
});
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

new Swiper(".notice .swiper", {
  direction: "vertical",
  autoplay: { delay: 1000 },
  loop: true,
  speed: 400,
});
new Swiper(".promotion .swiper", {
  autoplay: { delay: 1000 },
  loop: true,
  autoHeight: false,
  slidesPerView: 3,
  spaceBetween: 10,
  width: 1820,
  loopAdditionalSlides: 1,
  centeredSlides: true,
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
});
new Swiper(".awards .swiper", {
  autoplay: { delay: 2000 },
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-button-prev",
    nextEl: ".awards .swiper-button-next",
  },
});
gsap.to(".floating1", 1.5, {
  delay: 0,
  y: 30,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut,
});
gsap.to(".floating2", 2, {
  delay: 0.3,
  y: 25,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut,
});
gsap.to(".floating3", 2.5, {
  delay: 0.5,
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut,
});
