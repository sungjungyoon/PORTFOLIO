
        $(function(){
            var sex = document.getElementById
            // 팝업 종료 이벤트 및 쿠키 생성여부
            $('#cls-popup').on({
                'click':function(){
                  if($('#no-show').is(':checked')){
                      $.cookie('Akc10L','cHl001',{expires:1})
                  }
                  $('#index-popup').css('display','none');  
                },
            })


            // ad1닫기
            $('#cls-ad1').on({
                'click':function(){
                    $('#ad01').slideUp(300);
                }
            })         

            // 로그인폼 호출
            $('#call-login1,#call-login2').on({
                'click':function(){
                    $('#login').css('transform','translate(0,0)')
                }
            })
            // 사이트맵 클릭
            $('#trigger1').on({
                'click':function(){
                    $('.gnb-list').slideToggle();
                }
            })
            // 서치에어리어 토글
            $('#trigger2').on({
                'click':function(){
                    $('.search-area').slideToggle();
                }
            })
            // 유저정보 토글
            $('#trigger3').on({
                'click':function(){
                    $('.user-info').slideToggle();
                }
            })
            // 로그인폼 닫기
            $('#btn-close').on({
                'click':function(){
                    $('#login').css('transform','translate(100%,0)')
                }
            })

            // 모바일 네비게이션 호출
            $('#btn-nav').on({
                'click':function(){
                    $('#m-nav').css('transform','translate(0,0)')
                }
            })
            
            // 모바일 네비게이션 닫기
            $('#btn-close-nav').on({
                'click':closeMoblieNav,
            })

            $(window).on({
                'resize':closeMoblieNav,

            })

            let winWidth = 0;
            $(window).on({
                'resize':function(){
                    winWidth = $(window).outerWidth();
                    if(winWidth <= 1023){
                        $('.office-nav li:first-child input').attr('placeholder','영화명 입력');
                    }else{
                        $('.office-nav li:first-child input').attr('placeholder','영화명을 입력해 주세요');
                    }
                }
            })


            function closeMoblieNav(){
                $('#m-nav').css('transform','translate(-100%,0)')
            }

            


            // 박스오피스 슬라이더
            const officeSwiper = new Swiper('.box-office .swiper',{               
                loop:true,
                breakpoints:{
                    320: {
                        slidesPerView: 1.5,
                        spaceBetween:16
                    },
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween:17
                    },
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween:40
                    },
                }
            })

            const benefitSwiper01 = new Swiper('.benefit-slide01 .swiper',{
                effect:'fade',
            });
            const benefitSwiper02 = new Swiper('.benefit-slide02 .swiper',{
                effect:'cube',
            });

            $('.btn-prev').on({
                'click':function(){
                    benefitSwiper01.slidePrev(300,true);
                    benefitSwiper02.slidePrev(300,true)
                }
            })
            $('.btn-next').on({
                'click':function(){
                    benefitSwiper01.slideNext(300,true);
                    benefitSwiper02.slideNext(300,true)
                }
            })
            $('.btn-play').on({
                'click':function(){
                    benefitSwiper01.autoplay.start();
                    benefitSwiper02.autoplay.start();
                    $(this).css('display','none');
                    $('.btn-stop').css('display','block');
                }
            })
            $('.btn-stop').on({
                'click':function(){
                    benefitSwiper01.autoplay.stop();
                    benefitSwiper02.autoplay.stop();
                    $(this).css('display','none');
                    $('.btn-play').css('display','block');
                }
            })

            benefitSwiper01.on('slideChange',function () {
                let acIndex = this.activeIndex; 
                $('.progress-bar li').removeClass('active');
                $('.progress-bar li').eq(acIndex).addClass('active');
                $('.pages span').text(acIndex + 1);
            });
            
        })