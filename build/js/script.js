'use strict';

// Initialize WOW JS
new WOW().init();
 

// Initialize Slick Slider for section Works
$(document).ready(function(){
    $('.work__slider').slick({
        dots: true,
        arrows: true,
        nextArrow: '<i class="fa fa-angle-right work__arrowright" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-left work__arrowleft" aria-hidden="true"></i>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: true
            }
          }
        ]
    });
  });

  // mobile nav
  var navBtn = $('.js-nav-btn');
  var navList = $('.js-nav-list');
  var closeBtn = $('.js-cls-btn');

  navBtn.on('click', function() {
      navList.toggleClass('is-active');
      $('body').toggleClass('no-scroll');
  });

  closeBtn.on('click', function() {
      navList.removeClass('is-active');
  });

  navList.on('click', function(e){
    if(e.target.className === 'header__list js-nav-list is-active') {
      navList.removeClass('is-active');
    }
  })

   // mobile footer
   var footerBtn = $('.js-footer-btn');
   var footerList = $('.js-footer-list');
   var footerMedia = $('.js-footer-media');
 
   footerBtn.on('click', function() {
       footerList.toggleClass('is-active');
       footerMedia.toggleClass('is-active');
   });