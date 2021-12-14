$(function(){
    let idxNum = 0;
    $('.swiper-slide-name span').eq(idxNum).addClass('active')

    $('#btn-nav').on({
        'click':function(){
            $(this).toggleClass('rotate');
            $('.nav').toggleClass('active');
        }
    });

    $('.main-nav>li').on({
        'click':function(){
            $(this).children('ul').slideToggle();
            $(this).toggleClass('active');
            $('.main-nav>li').not(this).children('ul').slideUp();
            $('.main-nav>li').not(this).removeClass('active');
        }
    });

    const swiper = new Swiper('.swiper01',{
        loop:true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },  
        on:{
            slideChange:function(){
                // idxNum=this.activeIndex;
                for(let cnt=0;cnt<5;cnt++){
                    if($('.swiper-pagination-bullet').eq(cnt).hasClass('swiper-pagination-bullet-active')){
                        idxNum = $('.swiper-pagination-bullet').eq(cnt).index(); 
                        console.log(idxNum);
                    }
                }
                $('.swiper-slide-name span').removeClass('active');
                $('.swiper-slide-name span').eq(idxNum).addClass('active');
            }
        }              
    });

    const swiper2 = new Swiper('.swiper02',{
        loop:true,
        autoplay:{
            delay:3500
        },
        pagination:{
            el: '.swiper-pagination',
            type: 'bullets',
        }

    });

    $('.sub-banner-txt').prepend('<div class="sub-banner-slide-top">한솔제지는<br>국내 제지산업의<br>중심입니다.</div>')

    $('#btn-select').on({
        'click':function(){
            $('#select-list').slideToggle(300)
        },
    });

    $('#btn-close').on({
        'click':function(){
            if($('#chk-box').is(':checked')){
                $.cookie('noneLoad','true',{expires:1});
            }
            $('#pop-up').css('display','none');
        }
    })
})