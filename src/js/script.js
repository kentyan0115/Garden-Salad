jQuery(function () {

  // スムーススクロール
  jQuery('a[href^="#about"]').on('click', function () {
    let speed = 300;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    let position = jQuery(target).offset().top;
    jQuery("html, body").animate({
        scrollTop: position
      },
      speed
    );
    return false;
  });
  jQuery('a[href^="#menu"]').on('click', function () {
    let speed = 300;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    let position = jQuery(target).offset().top;
    jQuery("html, body").animate({
        scrollTop: position
      },
      speed
    );
    return false;
  });
  jQuery('a[href^="#shop"]').on('click', function () {
    let speed = 300;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    let position = jQuery(target).offset().top;
    jQuery("html, body").animate({
        scrollTop: position
      },
      speed
    );
    return false;
  });
  jQuery('a[href^="#contact"]').on('click', function () {
    let speed = 300;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    let position = jQuery(target).offset().top;
    jQuery("html, body").animate({
        scrollTop: position
      },
      speed
    );
    return false;
  });


  // フローティングボタン
  jQuery('.to-top').on('click', function () {
    jQuery('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  jQuery('.to-top').hide();
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > 300) {
      jQuery('.to-top').fadeIn();
    } else {
      jQuery('.to-top').hide();
    }
  });

  // フォームのバリデーション
  jQuery('.js-check').on('click', function () {
    if (jQuery('.js-checkbox').prop("checked") == true) {
      jQuery('.js-submit').addClass('form__submit-btn--active');
      jQuery('.js-submit').prop('disabled', false);
    } else {
      jQuery('.js-submit').removeClass('form__submit-btn--active');
      jQuery('.js-submit').prop('disabled', true);
    }
  });


  //  パララックス
  // $(window).on('scroll', function(){
    
  //   var scrollTop = $(window).scrollTop();
  //   var bgPosition = scrollTop / 15; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）
  //   if (window.matchMedia( "(min-width: 768px)" ).matches) {
  //     var bgPosition = scrollTop / 18; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）
  //   }
  
  //   if(bgPosition){
  //     $('.image1').css('background-position', 'center top -'+ bgPosition + 'px');
  //   }
  // });

  // $(window).on('scroll', function(){
    
  //   var scrollTop = $(window).scrollTop();
  //   var bgPosition = scrollTop / 26; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）
  //   if (window.matchMedia( "(min-width: 768px)" ).matches) {
  //     var bgPosition = scrollTop / 18; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）
  //   }
  
  //   if(bgPosition){
  //     $('.image2').css('background-position', 'center top -'+ bgPosition + 'px');
  //   }
  // });

  // Micromodal
  MicroModal.init({
    disableScroll: true,
  });
  // 背景固定
  jQuery('.js-modal-open').on('click', function () {
    jQuery('body').css('overflow', 'hidden');
  });
  jQuery('.js-modal-close').on('click', function () {
    jQuery('body').css('overflow', 'auto');
  });

  // aタグの遷移無効化
  jQuery('.form__privacy').on('click', function () {
    return false;
  });



});