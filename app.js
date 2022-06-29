jQuery(document).ready(function () {
  var numberOfSlides = jQuery(".slider-inner > img").length;
  console.log(numberOfSlides);
  var slides = $(".slider-inner img");
  var dots = $(".nav-dots .dots");

  dots.on("click", function () {
    var indeX = $(this).index();
    var currentSlide = slides.eq(indeX);
    currentSlide.addClass("active");
    console.log(currentSlide);

    $(this).addClass("indice");
    slides.not(currentSlide).removeClass("active");
    $(".dots").not(this).removeClass("indice");
  });

  $(".next").on("click", function () {
    var currentImg = $(".active");
    var nextImg = currentImg.next();
    var currentDot = $(".indice");
    var nextDot = currentDot.next();

    if (nextDot.length) {
      currentDot.removeClass("indice");
      nextDot.addClass("indice");
    } else {
      $(dots).first().addClass("indice");
      $(dots).last().removeClass("indice");
    }

    if (nextImg.length) {
      currentImg.removeClass("active");
      nextImg.addClass("active");
    } else {
      $(".slider-inner img").first().addClass("active");
      $(".slider-inner img").last().removeClass("active");
    }
  });

  $(".prev").on("click", function () {
    var currentImg = $(".active");
    var prevImg = currentImg.prev();

    var currentDot = $(".indice");
    var prevDot = currentDot.prev();

    if (prevDot.length) {
      currentDot.removeClass("indice");
      prevDot.addClass("indice");
    } else {
      $(dots).first().removeClass("indice");
      $(dots).last().addClass("indice");
    }

    if (prevImg.length) {
      currentImg.removeClass("active");
      prevImg.addClass("active");
    } else {
      $(".slider-inner img").first().removeClass("active");
      $(".slider-inner img").last().addClass("active");
    }
  });
});
