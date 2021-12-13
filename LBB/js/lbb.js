
$(function(){
  $('#trigger01').on({
    'click':function(){
      $('.nav-list').slideToggle();
    }
  }),
  $('.more-btn').on({
    'click':function(){
      alert('준비중입니다')
    }
  }),
  $('.link-box').on({
    'click':function(){
      alert('준비중입니다')
    }
  })
})



var swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    type:'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
  loop:true,
});

AOS.init();

