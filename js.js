// reviews swiper
var swiper = new Swiper('.reviews-content', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 5000, // milliseconds
        disableOnInteraction: true // enable autoplay even when user interacts with it
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});