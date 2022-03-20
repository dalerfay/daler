$(function(){


 $('.menu-btn').on('click',function() {
     $('.menu_list').toggleClass('menu_list--active')
});




    $('.heroes_slider-img').slick({
      slidesToShow:1,
      slidesToScroll:1,
      asNavFor:'.heroes_slider-text',
      prevArrow:'<button class="slick-btn slick-prev"><img src="/start/images/arrow left new.png" alt="prev"></button>',
       nextArrow:'<button class="slick-btn slick-next"><img src="/start/images/arrow right new.png" alt="next"></button>',
      responsive:[
          {
              breakpoint:769,
              settings:{
                  arrows:false
                  
              }
          }
      ]

    });


    $('.heroes_slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor:'.heroes_slider-img',
       fade : true,
       arrows: false
      });

});