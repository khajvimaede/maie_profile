let topBtn = document.getElementById("topbtn")
let _aBtn = document.getElementById('_div')
let _fig = document.getElementById('_fig')
topBtn.addEventListener('mousemove', function () {
  document.getElementById("_a").style.height = '0'
  //document.getElementById("_a").style.width = '5%'
})
topBtn.addEventListener('mouseleave', function () {
  document.getElementById("_a").style.height = '100%'
  //document.getElementById("_a").style.width = '100%'
})




_aBtn.addEventListener('mousemove', function () {
  document.getElementById("span-cover").style.height = '0'
  //document.getElementById("_a").style.width = '5%'
})
_aBtn.addEventListener('mouseleave', function () {
  document.getElementById("span-cover").style.height = '100%'
  //document.getElementById("_a").style.width = '100%'
})

_fig.addEventListener('mousemove', function () {
  document.getElementById("span-cover1").style.height = '0'
  //document.getElementById("_a").style.width = '5%'
})
_fig.addEventListener('mouseleave', function () {
  document.getElementById("span-cover1").style.height = '100%'
  //document.getElementById("_a").style.width = '100%'
})



const swiper = new Swiper(".mySwiper", {

  slidesPerView: 3,
  spaceBetween: 30,

  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //loop: true,
});




let boxx = document.querySelectorAll('.schedule')

boxx.forEach((val) => {
  val.addEventListener('mouseover', function () {
    val.style.border = "1px  solid #FD3D0C"
  })

  val.addEventListener('mouseleave', function () {
    val.style.border = "1px  solid #d4d4d4"
  })

})

function myFunction() {
  const element = document.getElementById("myDIV");
  let x = element.scrollLeft;
  //let y = element.scrollTop;

}



const boxSwiper = new Swiper(".boxSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  loop:true,
});



const clicetswiper = new Swiper(".clientSwiper", {
 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  loop:true,
});