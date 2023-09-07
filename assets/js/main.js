// ====== Showing Navbar in small screens ======

let navbar = document.querySelector(".header .navbar");

// show navebar when click on toggle menu button
document.getElementById("toggle-menu").onclick = () => {
  navbar.classList.add("active");
}

// Hidden navebar when click on close button
document.getElementById("nav-close").onclick = () => {
  navbar.classList.remove("active");
}


// ====== Showing search Form ======
let searchForm = document.querySelector(".search-form");

// show navebar when click on toggle menu button
document.getElementById("search-btn").onclick = () => {
  searchForm.classList.add("active");
}

// Hidden navebar when click on close button
document.getElementById("close-search").onclick = () => {
  searchForm.classList.remove("active");
}

window.onscroll = () => {
  navbar.classList.remove("active");

  if(window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

window.onload = () => {

  if(window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

// ====== Start Slider with swiper ======

var swiper = new Swiper(".home-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  initialSlide: 1,

});

// product Swiper

var swiper = new Swiper(".product-slider", {
  spaceBetween: 20,

  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// Reviews Swiper

var swiper = new Swiper(".review-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1.4,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  initialSlide: 2,
});

// Blog Swiper

var swiper = new Swiper(".blogs-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 10,
    modifier: 1.4,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  initialSlide: 2,
});



// ====== Start partners with swiper ======

var swiper = new Swiper(".partners-slider", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 50,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});