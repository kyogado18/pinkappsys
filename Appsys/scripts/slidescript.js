new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPerView: 1
        },
        768:{
          slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        }
    }

});

document.addEventListener("DOMContentLoaded", () => {
    const addbutton = document.querySelector(".material-symbols-outlined")
    const bg = document.querySelector(".main-container");
    const cart = document.querySelector(".addtocart");
    const reject = document.querySelector(".buttoncart button");

    addbutton.addEventListener("click", function (){
        cart.style.display = "grid";
        bg.style.filter="blur(10px)";
    })

    reject.addEventListener("click", function (){
        cart.style.display = "none";
        bg.style.filter="blur(0)";
    })

})