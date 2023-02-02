$(function(){
  $(window).scroll(function(){
    // スクロール位置を取得
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();

    mv_scale(scroll); // メインビジュアルの拡大・縮小
    heade_fadein(scroll); // フェードイン
    item_fadein(scroll, windowHeight) // それぞれの項目のフェードイン
    nav_fadein(); // ヘッダーメニューのフェードイン 
  });
  $(window).on('load resize', function() {
    // スクロール位置を取得
    let scroll = $(window).scrollTop();
    // メインビジュアルの拡大・縮小
    mv_scale(scroll);
  });
});

function nav_fadein(){
  // ハンバガーメニュー
  $('.hamburger').click(function(){
    $('.nav_menu').toggleClass('nav_menu_active');
  });
}

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

function item_fadein(scroll, windowHeight){
  let site_title_height = $('.site_main_h1_text').offset().top;

  if (scroll > site_title_height - windowHeight - 50){
    $('.site_main_h1_text').addClass('site_main_h1_text_active');
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

