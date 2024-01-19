//top-newsスライドショー//
$('.t-news-wrap__con__list').slick({
  autoplaySpeed: 5500, 
  speed: 1200, 
  autoplay: true, 
  infinite: true, 
  slidesToShow: 1, 
  slidesToScroll: 1,
  arrows: false, 
  dots: false,
  pauseOnFocus: false,  
  pauseOnHover:  true,  
  pauseOnDotsHover:   true,
});
//top-worksスライドショー//
$('.t-works-wrap__con__list').slick({
  autoplaySpeed: 5500, 
  speed: 1200, 
  autoplay: true, 
  infinite: true, 
  slidesToShow: 2, 
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="prev-arrow">←</div>',
  nextArrow: '<div class="next-arrow">→</div>',
  dots: false,
  pauseOnFocus: false,  
  pauseOnHover:  true,  
  pauseOnDotsHover: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
      slidesToShow: 1,
      },
    },
  ],
});

//top-service画像切り替え//
$(function () {
  $(".__LP").hover(
    function () {
      $(".service-wrap__con").addClass("__LP-hover");
    },
    function () {
      $(".service-wrap__con").removeClass("__LP-hover");
    }
  );
});
$(function () {
  $(".__HP").hover(
    function () {
      $(".service-wrap__con").addClass("__HP-hover");
    },
    function () {
      $(".service-wrap__con").removeClass("__HP-hover");
    }
  );
});


//アコーディオンメニュー
$('.faq-wrap__con__list__block__ttl').on('click', function() {
  $('.faq-wrap__con__list__block__answer').slideUp(500);
  var findElm = $(this).next(".faq-wrap__con__list__block__answer");    
  if($(this).hasClass('close')){
    $(this).removeClass('close');
  }else{
    $('.close').removeClass('close'); 
    $(this).addClass('close');
    $(findElm).slideDown(500);
  }
});

/*ハンバーガーメニュー*/
window.onunload = function () { };
function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}
sizecheck();
$(function () {
  if (w > 769) {
} else { 
  $("header .drawer").click(function(){
  $('body').toggleClass('nav-open');
  $('header .header-wrap__nav').fadeToggle(200);
    });
  $("header-wrap__nav__list__item a").click(function(){
  $('body').toggleClass('nav-open');
  $('header .header-wrap__nav').fadeToggle(200);
    });
  }
}); 
$('a[href^="#"]').on('click', function() {
  $('.drawer').click(); 
})

//newsカテゴリー選択//
function showNewsCategory(category) {
  var items = document.getElementsByClassName('news-wrap__con__list__item');
  for (var i = 0; i < items.length; i++) {
    if (category === 'n-cate00' || items[i].classList.contains(category)) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }
}

var newsCategories = document.getElementsByClassName('n-cate');

for (var i = 0; i < newsCategories.length; i++) {
  newsCategories[i].addEventListener('click', function() {
    var category = this.classList[1];
    showNewsCategory(category);

    for (var j = 0; j < newsCategories.length; j++) {
      newsCategories[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}

///Worksカテゴリー選択//
function showWorksCategory(category) {
  var items = document.getElementsByClassName('works-wrap__con__list__item');
  for (var i = 0; i < items.length; i++) {
    if (category === 'w-cate00' || items[i].classList.contains(category)) {
      items[i].style.display = 'flex';
    } else {
      items[i].style.display = 'none';
    }
  }
}

var worksCategories = document.getElementsByClassName('w-cate');

for (var i = 0; i < worksCategories.length; i++) {
  worksCategories[i].addEventListener('click', function() {
    var category = this.classList[1];
    showWorksCategory(category);

    for (var j = 0; j < worksCategories.length; j++) {
      worksCategories[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}

document.getElementsByClassName('w-cate00')[0].addEventListener('click', function() {
  showWorksCategory('w-cate00');

  for (var j = 0; j < worksCategories.length; j++) {
    worksCategories[j].classList.remove('active');
  }
  this.classList.add('active');
});






