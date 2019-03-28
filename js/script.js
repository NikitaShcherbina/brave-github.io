$(document).ready(function(){
  // SLIDER //
  $(function() {
    $(".slider__item").each(function(i) {
      $("<div><h3><img src='img/product/img" + ++i + ".png'></h3></div>").appendTo(".slider-nav");
    });
    $(".slider-wrap").slick({
      slidesToShow: 1,
      asNavFor: ".slider-nav",
      dots: false,
      arrows: true,
      vertical: true,
      verticalSwiping: true
    });
    $(".slider-nav").slick({
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".slider-wrap",
      arrows: false,
      focusOnSelect: true,
      responsive: [
        {
        breakpoint: 767,
        settings: {
          verticalSwiping: false,
          slidesToShow: 2,
        }
      }]
    });
  });
  $('.single-item').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 5000,
    verticalSwiping: true,
    arrows: false,
    draggable: false
  });
  $('.single-item2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
        {
        breakpoint: 1200,
        settings: {
          centerMode: true,
        }
    }]
  });
  $('.single-item3').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
        {
        breakpoint: 1200,
        settings: {
          centerMode: true,
        }
    }]
  });
  $('.single-item4').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false
  });
  $('.mobi-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  // END SLIDER //


  // ANIMATION //
  new WOW().init();
  $(".content .top .type p").click(function(){
    $(".content .top .type p").removeClass("active");
    $(this).addClass("active");
  });
  $(".quantity-size .item").click(function(){
    $(".quantity-size .item").removeClass("active");
    $(this).addClass("active");
  });
  $(".block p").click(function(){
    $(".block p").removeClass("active");
    $(this).addClass("active");
  });
  $(".bag .col").click(function(){
    if ($(".bag-open").css("opacity") == "0") {
      $(".bag-open").addClass("open");
    } else {
      $(".bag-open").removeClass("open");
    }
  });
  $(".loopa").click(function(){
    $(".search").toggleClass("open");
  })
  $("header .tel").click(function(){
    $(".tel-open").toggleClass("open");
  })
 
  $("main .container .content .top .col .active .menu-open p").click(function(){
  	$("main .container .content .top .col .active span").text($(this).text());
  });
  // END ANIMATION //

    $('.show-menu-btn').on('click', function() {
      $(this).toggleClass('open');
      $('.overlay-menu').toggleClass('active');
      $('body').toggleClass('menu-opened');
      return false;
    });
    $(".show-menu-btn").click(function(){
      $("header .nav ul").slideToggle("fast");
      $(".menu-open").slideUp("fast");
    });
    if ($(window).width() < 1201) {
      $("header .nav ul").hide().css("opacity", "1");
      $(".open_menu").click(function(){
        $(".open_menu").siblings(".menu-open").stop().slideUp("slow");
        $(this).siblings(".menu-open").stop().slideToggle("slow");
        $(this).parent().toggleClass("open");
      });
      $(".open_menu2").click(function(){
        $(this).parent().siblings(".menu-open2").stop().slideToggle("slow");
      });
      $(".hover").show();
      $(".loopa").click(function(){
        $(".nav-btn2").slideToggle();
      });
      $("main .container .content .top .type").hide().css("opacity", "1");
      $("main .container .content .top .sort").click(function(){
        $("main .container .content .top .type").slideToggle("fast");
        $(this).after().toggleClass("open");
      });
      $("main .container .filter .name").click(function(){
        $("main .container .filter").toggleClass("open");
      });
    }
    if ($(window).width() > 1200) {
      $(".goods").hover(
        function(){
          $(this).find(".hover").stop().slideDown("normal");
        },
        function() {
          $(this).find(".hover").stop().slideUp("normal");
        }
      );
      $("header .nav ul li").hover(
        function(){
          $(this).find(".menu-open").stop().slideDown("normal");
        },
        function() {
          $(this).find(".menu-open").stop().slideUp("normal");
        }
      );
      $("header .nav ul li .menu-open div").hover(
        function(){
          $(this).find(".menu-open2").stop().slideDown("normal");
        },
        function() {
          $(this).find(".menu-open2").stop().slideUp("normal");
        }
      );
      $("main .container .content .top .col .active").hover(
        function(){
          $(this).find(".menu-open").stop().slideDown("normal");
          $(this).find(".open_menu").css("transform", "rotate(180deg)");
        },
        function() {
          $(this).find(".menu-open").stop().slideUp("normal");
          $(this).find(".open_menu").css("transform", "rotate(0deg)");
        }
      );
      $(".single-item2 .goods").hover(function(){
        $(".single-item2 .slick-list").css("z-index", "100000000");
      },
      function(){
        $(".single-item2 .slick-list").css("z-index", "1");
      }
      );
    }
    $("footer").load("nav_and_footer.html footer", function(){
       $('.form-trigger').on('click', function() {
    $(this).toggleClass('is-clicked');
    $('.popup-forma2').toggleClass('is-active');
    return false;
  });
  $('.popup-close').on('click', function() {
      $('.form-trigger').removeClass('is-clicked');
      $('.popup-forma2').removeClass('is-active');
      return false;
  });
  $('.popup-forma2__cover').on('click', function() {
      $('.form-trigger').removeClass('is-clicked');
      $('.popup-forma2').removeClass('is-active');
      return false;
  });
  $(".popup-forma2 .button").click(function(){
    $(".popup-forma2 .content-holder").hide();
    $(".popup-forma2 .successful-send").show();
    $(".popup-forma2 .left").show();
    $(".popup-forma2 .popup-wrapper").addClass("send");
  });
  if ($(window).width() > 1000) {
    $(".popup-forma2 .button").click(function(){
      $(".popup-forma2 .popup-wrapper").addClass("send");
    });
  }
    });
});

