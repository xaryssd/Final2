var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel: true
});
swiper.on('slideChange', function () {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink");
    Array.from(document.querySelectorAll(".Links li"))[swiper.activeIndex].classList.add("activeLink");
});

function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink");
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink");
    swiper.slideTo(indx, 1000, true); // S'assure que l'index correspond bien à la section
}

function NavigateToContact() {
    const contactSlide = document.querySelector('.contactMe');
    if (contactSlide) {
        const swiperIndex = Array.from(document.querySelectorAll('.swiper-slide')).indexOf(contactSlide);
        swiper.slideTo(swiperIndex, 1000, true); // Navigue à la section Contact
    }
}
