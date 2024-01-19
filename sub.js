//テキスト左から右に向かって表示アニメーション//
function slideAnime(){
  $('.leftAnime').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass("slideAnimeLeftRight");
      $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");
    }else{
      $(this).removeClass("slideAnimeLeftRight");
      $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
    }
  });
}
$(window).on('load', function(){
  setTimeout(slideAnime, 3800);
});

//テキスト滑らかに表示アニメーション//
function SmoothTextAnime() {
  $('.smoothTextTrigger').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('smoothTextAppear');
    }else{
    $(this).removeClass('smoothTextAppear');
    }
    }); 
}
$(window).scroll(function () {
  SmoothTextAnime();
});

//フェードアップアニメーション//
function FadeUpAnime() { //関数名を変える
  $('.fadeUpTrigger').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });
}
$(window).scroll(function (){
    FadeUpAnime();
});

//ローディングアニメ
var stroke;
stroke = new Vivus('mask', {
    start:'manual',
    type: 'scenario-sync',
    duration: 10,
    forceRender: false,
    animTimingFunction:Vivus.EASE,
},
function(){
  $("#mask").attr("class", "done");
}
);

$(window).on('load',function(){
  $("#splash").delay(3000).fadeOut('slow');
	$("#splash_logo").delay(3000).fadeOut('slow');
        stroke.play();
});
