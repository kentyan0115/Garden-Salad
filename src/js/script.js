jQuery(function () {

  // ドロワー 
  jQuery('.hamburger').on('click', function () {
    jQuery(this).toggleClass('hamburger--active');
    jQuery('body').toggleClass('body--fixed');
    if (jQuery(this).hasClass('hamburger--active')) {
      jQuery('.drawer').addClass('drawer--active');
    } else {
      jQuery('.drawer').removeClass('drawer--active');
    }
  });

  jQuery('.drawer__item').on('click', function () {
    jQuery('.hamburger').toggleClass('hamburger--active');
    jQuery('body').removeClass('body--fixed');
    if (jQuery(this).hasClass('drawer--active')) {
      jQuery('.drawer').addClass('drawer--active');
    } else {
      jQuery('.drawer').removeClass('drawer--active');
    }
  });

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
    jQuery('body, html').animate.stop(true, false) ({
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
  jQuery(function () {
    var target1 = jQuery(".image");
    var targetPosOT1 = target1.offset().top;
    var targetFactor = 0.2;
    var windowH = jQuery(window).height();
    var scrollYStart1 = targetPosOT1 - windowH;
    jQuery(window).on('scroll', function () {
      var scrollY = jQuery(this).scrollTop();
      if (scrollY > scrollYStart1) {
        target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
      }
    });
  });

});