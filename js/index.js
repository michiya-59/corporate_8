$(function(){
  $(window).scroll(function(){
    // スクロール位置を取得
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();

    nav_fadein(); // ヘッダーメニューのフェードイン 
    mv_scale(scroll); // メインビジュアルの拡大・縮小
    heade_fadein(scroll); // フェードイン
    item_fadein(scroll, windowHeight) // それぞれの項目のフェードイン
  });
  
  $(window).on('load resize', function() {
    // スクロール位置を取得
    let scroll = $(window).scrollTop();
    // メインビジュアルの拡大・縮小
    mv_scale(scroll);
  });
});

function nav_fadein(){
  $('.hamburger').click(function(){
    $('.nav_menu').toggleClass('nav_menu_active');
  });
  $('.nav_information').click(function(){
    $('.nav_menu').removeClass('nav_menu_active');
  });
  $('.nav_gallery').click(function(){
    $('.nav_menu').removeClass('nav_menu_active');
  });
  $('.nav_access').click(function(){
    $('.nav_menu').removeClass('nav_menu_active');
  });
  $('.nav_contact').click(function(){
    $('.nav_menu').removeClass('nav_menu_active');
  });
}

// ヘッダーの項目ナビゲーションメニューのフェードイン
function heade_fadein(scroll){
  // ヘッダー項目
  if(scroll > 200){
    $('.header_logo').addClass('header_logo_active');
    $('.hamburger').addClass('hamburger_active');
  } else{
    $('.header_logo').removeClass('header_logo_active');
    $('.hamburger').removeClass('hamburger_active');
  }
}

// それぞれの要素をフェードインしているメソッド
function item_fadein(scroll, windowHeight){
  let site_title_height = $('.site_main_h1_text').offset().top;
  let information_height = $('.information').offset().top;
  let gallery_title_height = $('.gallery_title').offset().top;
  let access_height = $('.access').offset().top;
  let contact_height = $('.contact').offset().top;

  // site_main_h1のフェードイン処理
  if (scroll > site_title_height - windowHeight - 50){
    $('.site_main_h1_text').addClass('site_main_h1_text_active');
  }

  // informationのフェードイン処理
  if (scroll > information_height - windowHeight){
    $('.information').addClass('information_active');
  }

  // galleryのフェードイン処理
  if (scroll > gallery_title_height - windowHeight){
    $('.gallery_title').addClass('gallery_title_active');
    if (window.innerWidth > 900){
      $('.right_bottom_menu').addClass('right_bottom_menu_active');
    }
  } else{
    if (window.innerWidth > 900){
      $('.right_bottom_menu').removeClass('right_bottom_menu_active');
    }
  }
  
  if (scroll > access_height - windowHeight){
    if (window.innerWidth > 900){
      $('.right_bottom_menu').removeClass('right_bottom_menu_active');
    }
    if (scroll < contact_height - windowHeight){
      $('.access_back_img').fadeIn();
    } else{
      $('.access_back_img').fadeOut();
    }
  } else{
    $('.access_back_img').fadeOut();
  }

  // 写真をループで回しているメソッド
  picture_fadein(scroll, windowHeight, "picture")
}

// 写真をループで回してフェードインしているメソッド
function picture_fadein(scroll, windowHeight, class_name){
  for (let i = 1; i < 7; i++) {
    let element = $(`.${class_name}${i}`).offset().top;

    if (scroll > element - windowHeight - 50){
      $(`.${class_name}${i}`).addClass('picture_active');
    }
  }
}

function mv_scale(scroll){
  if (window.innerWidth > 900){
    $('#mainvisual img').css({
      // widthの値をスクロール量にあわせて増やすことで画像を拡大させる
      'width': 100/3 + scroll/10 + '%'
    });
  } else{
    // メインビジュアルのCSS（width）を変更する
    // widthの値をスクロール量にあわせて減らすことで画像を縮小させる
    $('#mainvisual img').css({
      'width': 100 - scroll/10  + '%'
    });
  }
}

