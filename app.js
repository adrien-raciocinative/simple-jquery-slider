jQuery(document).ready(function () {
  $(".next").on("click", function () {
    var currentImg = $(".active");
    var nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass("active");
      nextImg.addClass("active");
    }
  });

  $(".prev").on("click", function () {
    var currentImg = $(".active");
    var prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass("active");
      prevImg.addClass("active", [2000], [myCallback]);
    }
  });

  function myCallback() {
    setTimeout(function () {
      $("img").addClass("geeks");
    }, 3000);
  }
});
