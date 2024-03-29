const swiperHeaderSlide = new Swiper('.swiper-header-slide', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-next-header-slide',
        prevEl: '.swiper-prev-header-slide',
    },
});
const swiperBrands = new Swiper('.swiper-brands', {
    breakpoints: {
        0:{
            grid: {
                fill:'column',
                // rows: 1,
            },
            slidesPerView: 'auto',
            freeMode: true
        },
        992:{
            grid: {
                fill:'row',
                rows: 2,
            },
            freeMode: false,
            slidesPerView: 2,
        },
    },
    navigation: {
        nextEl: '.swiper-next-brands',
        prevEl: '.swiper-prev-brands',
    },
    spaceBetween: 8,
});
const swiperArticles = new Swiper('.swiper-articles', {
    
    breakpoints: {
        0:{
            spaceBetween: 12,
            slidesPerView:'auto',
        },
        992:{
            slidesPerView:2,
            spaceBetween: 26,
        },
    },
});


$('.filter-tab').on('click', function (e) {
    e.preventDefault()
    if (!$(this).hasClass('active')) {
        var filterValue = $(this).attr('data-filter');
        $('.filter-item').not('.' + filterValue).hide();
        $('.filter-item').filter('.' + filterValue).show();

        $('.filter-tab').removeClass('active')
        $(this).addClass('active')
    }
})