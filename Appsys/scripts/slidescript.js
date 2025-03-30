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
    const overlay = document.querySelector(".overlay");
    const confirm = document.querySelector(".confirm");
    const reject1 = document.querySelector(".view button");
    const accept = document.querySelector(".accept");
    const overlay1= document.querySelector(".overlay1");
    const reject2 =document.querySelector(".view1 button");

    reject2.addEventListener("click", function() {
        overlay1.style.display = "none";
        bg.style.filter = "blur(0)";
    })

    accept.addEventListener("click", function () {
        overlay1.style.display = "grid";
        overlay.style.display = "none"
    })

    confirm.addEventListener("click", function () {
        cart.style.display = "none";
        overlay.style.display = "grid";
        reject.addEventListener("click", function (event) {
            cart.style.display = "none";
            bg.style.filter="blur(0)";
        })
    })

    reject1.addEventListener("click", function () {
        overlay.style.display = "none";
        bg.style.filter="blur(0)";

    })

    addbutton.addEventListener("click", function (){
        cart.style.display = "grid";
        bg.style.filter="blur(10px)";
    })

    reject.addEventListener("click", function (){
        cart.style.display = "none";
        bg.style.filter="blur(0)";
    })

})