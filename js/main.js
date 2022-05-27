const showElementAnimation = () => {
    const element = document.getElementsByClassName('smoothScroll');
    if (!element) return;

    const showTiming = window.innerHeight > 768 ? 200 : 40;
    const scrollY = window.pageYOffset;
    const windowH = window.innerHeight;

    for (let i=0; i<element.length; i++) { 
        const elemClientRect = element[i].getBoundingClientRect(); 
        const elemY = scrollY + elemClientRect.top; 
        
        if(scrollY + windowH - showTiming > elemY) {
            element[i].classList.add('is-show');
        } else if (scrollY + windowH < elemY) {
            element[i].classList.remove('is-show');
        }
    }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);

// jQuery
$(function () {
    // スマホのみ　お問い合わせアイコン　スクロール最後で消える
    const fixContact = $('.spContactLink');
    $(window).bind('scroll', function() {
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        if ( (scrollHeight - scrollPosition) / scrollHeight <= 0.05) {
                fixContact.fadeOut();
        } else {
                fixContact.fadeIn();
        }
    });

    // アコーディオンボックス
    $('.title').on('click', function() {
        const findElm = $(this).next(".box");
        $(findElm).slideToggle();
        
        if ($(this).hasClass('close')){
            $(this).removeClass('close');
        } else {
            $(this).addClass('close');
        }
    });
    // アコーディオンボックス開く状態
    // $(window).on('load', function(){
    //     $('.accordionArea li:first-of-type').addClass('open');
    //     $('.open').each(function(index, element) {
    //         const Title = $(element).children('.title');
    //         $(Title).addClass('close');
    //         const Box = $(element).children('.box');
    //         $(Box).slideDown(500);
    //     });
    // });

    $('a[href^="#"]').on('click', function(){
        const adjust = 0;
        const speed = 400;
        const href= $(this).attr('href');
        const target = $(href == '#' || href == '' ? 'html' : href);
        const position = target.offset().top + adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});