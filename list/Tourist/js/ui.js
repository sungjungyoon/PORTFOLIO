$(function(){

  fnKakao();
  fnmainNav();
  gridSystem();

  // 스킵메뉴
  $('.skip>a').focus(function(){
    $('.skip').addClass('active');
  });
  $('.skip>a').blur(function(){
    $('.skip').removeClass('active');
  });

  // 화면폭에 따른 카카오톡 / 메인네비 변경 이벤트  
  $(window).resize(function(){
    fnKakao();
    fnmainNav();
  });  

  // 해상도에 따른 pos_fix 카카오톡 변경 함수
  function fnKakao(){
    var winWidth=$(this).width();
    if(winWidth>=1066){
      $('#kakao').text('카카오톡');
    }else{
      $('#kakao').text('카카오톡 상담');
    }
  }

  // 모바일에서 메인네비 호출 이벤트
  $('.tgl_btn').click(function(){
    $('.nav_box').slideToggle(300);
  });

  // 메인 네비 보이고 안보이고 함수
  function fnmainNav(){
    var winWidth=$(window).width();
    if(winWidth>=801){
      $('.nav_box').show();
    }else{
      $('.nav_box').hide();
    }
  }  
  
  // 베너 슬라이더
  var mySwiper = new Swiper('.mo_banner,.tab_banner', {
    speed: 400,
    loop:true,
    autoplay:{
      delay:3000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });

  // 슬라이더 멈춤/재생 이벤트

  // 스크롤 이벤트
  $(window).scroll(function(){
    var winTop=$(window).scrollTop();
    var winWidth=$(window).width();
    // 모바일 scrolltop 200이상 조건
    if(winTop>=200 && winWidth<=1065){
      $('.pos_fix>p').css('display','flex');
      // 모바일  scrolltop 200미만 조건
    }else if(winTop<200 && winWidth<=1065){
      $('.pos_fix>p').css('display','none');
      // PC  scrolltop 200이상 조건
    }else if(winTop>=200 && winWidth>=1066){
      $('.pos_fix>ul').css('display','block');
      $('.pos_fix>p').css('display','flex');
      // PC  scrolltop 200미만 조건
    }else if(winTop<200 && winWidth>=1066){
      $('.pos_fix>ul').css('display','none');
      $('.pos_fix>p').css('display','none');
    }    
  });

  // 윈도우 리사이즈 이벤트
  $(window).resize(function(){
    gridSystem();
    var winWidth=$(window).width();
    if(winWidth<=800){
      $('.pos_fix>ul').css('display','block');
    }else if(winWidth<=1065){
      $('.pos_fix>ul').css('display','none');
    }
  });

  // 스무스 스크롤
  var scroll = new SmoothScroll('a[data-scroll]', {
    speed:300
  });

  // 화면폭에 따른 그리드 적용
  function gridSystem(){
    var winWidth=$(window).width();
    if(winWidth<=800){
      // 모바일영역
      $('.top3>li').removeClass('pc_g4');
    }else{
      $('.top3>li'). addClass('pc_g4');
    }
  }
})