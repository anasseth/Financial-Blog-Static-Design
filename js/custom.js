$(window).load(function () {
  "use strict";

  /* Loading Script */
  $(".page-loader-wrapper").fadeOut("slow");
  if ($("#gallery-content-center").length > 0) {
    $("#gallery-content-center").isotope({ itemSelector: "li" });
    $(".project-filter-links").click(function () {
      $(".project-filter-links").removeClass("current");
      $(this).addClass("current");
      $("#gallery-content-center").isotope({
        filter: "." + $(this).attr("id"),
      });
    });
  }
});

$(document).ready(function () {
  //Page Loader

  if ($(".home-page").length == 1) {
    //Nav fixed
    var sheight = $(window).height();
    $(window).scroll(function () {
      if ($(this).scrollTop() > sheight) {
        $(".header-con").addClass("f-nav");
        $(".main-contentbox").addClass("nav-margin");
      } else {
        $(".header-con").removeClass("f-nav");
        $(".main-contentbox").removeClass("nav-margin");
      }
    });
    function jqUpdateSize() {
      // Fixed height
      var height = $(window).height();
      $("#main-banner").css("height", height);
      $(".banner-text").css("height", height);
      $(".banner-img").css("height", height);

      //console.log('hello');
    }
    jqUpdateSize();
    $(window).resize(function (e) {
      jqUpdateSize();
    });
  } else {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $(".header-con").addClass("f-nav");
        $(".main-contentbox").addClass("nav-margin");
      } else {
        $(".header-con").removeClass("f-nav");
        $(".main-contentbox").removeClass("nav-margin");
      }
    });
  }
  if ($("#new-slider").length > 0) {
    var owl = $("#new-slider");
    owl.owlCarousel({
      loop: false,
      nav: false,
      dots: true,
      margin: 10,
      //animateOut: 'fadeIn',
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        960: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  }
  if ($("#banner-slider").length > 0) {
    var owl = $("#banner-slider");
    owl.owlCarousel({
      loop: false,
      nav: false,
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      animateOut: "fadeOut",
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        960: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  }

  $("#explore").click(function () {
    $("body,html").animate(
      {
        scrollTop: $("#headerCon").offset().top,
      },
      1000
    );
  });
  function count($this) {
    //Counter
    var current = parseInt($this.html(), 10);
    current = current + 1; /* Where 50 is increment */

    $this.html(++current);
    if (current > $this.data("count")) {
      $this.html($this.data("count"));
    } else {
      setTimeout(function () {
        count($this);
      }, 50);
    }
  }
  $(".stat-count").each(function () {
    $(this).data("count", parseInt($(this).html(), 10));
    $(this).html("0");
    count($(this));
  });
  //Team Advisor
  $(".advisor-box").hover(
    function () {
      $(".advisor-box").removeClass("active");
      $(this).addClass("active");
    },
    function () {
      $(this).removeClass("active");
    }
  );

  // Accordion Toggle
  var iconOpen = "fa-minus",
    iconClose = "fa-plus";

  $(document).on(
    "show.bs.collapse hide.bs.collapse",
    ".accordion",
    function (e) {
      var $target = $(e.target);
      $target
        .siblings(".accordion-heading")
        .find("i")
        .toggleClass(iconOpen + " " + iconClose);
      if (e.type == "show")
        $target
          .prev(".accordion-heading")
          .find(".accordion-toggle")
          .addClass("active");
      if (e.type == "hide")
        $(this).find(".accordion-toggle").not($target).removeClass("active");
    }
  );
  function errorbox() {
    // Fixed height
    var height = $(window).height();
    $("#main-errorbox").css("height", height);
    $(".error-box").css("height", height);
    $(".error-banner-img").css("height", height);

    //console.log('hello');
  }
  errorbox();
  $(window).resize(function (e) {
    errorbox();
  });
  //Login
  function loginbox() {
    // Fixed height
    var height = $(window).height();
    $("#main-login").css("height", height);
    $(".login-box").css("height", height);
    $(".login-banner-img").css("height", height);

    //console.log('hello');
  }
  loginbox();
  $(window).resize(function (e) {
    loginbox();
  });
  // Chart Effects;
  if ($(".chart").length > 0) {
    $(".chart").easyPieChart({
      easing: "easeOutBounce",
      size: 200,
      animate: 2000,
      lineWidth: 10,
      lineCap: "square",
      lineWidth: 19,
      barColor: "#51c5eb",
      trackColor: "#f3f3f3",
      scaleColor: false,
      onStep: function (from, to, percent) {
        $(this.el)
          .find(".percent")
          .text(Math.round(percent) + "%");
      },
    });
  }
  // tooltip demo
  /*$('a').click(function(e) {
        e.preventDefault();
    });*/
  $("[data-toggle=tooltip]").tooltip();

  // popover demo
  $("[data-toggle=popover]").popover();
});
