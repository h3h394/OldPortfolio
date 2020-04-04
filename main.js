$(function() {
  var link = $("#navbar a.menu");

  link.on("click", function(e) {
    var target = $($(this).attr("href"));
    $("html, body").animate(
      {
        scrollTop: target.offset().top
      },
      1150
    );
    $(this).addClass("active");
    e.preventDefault();
  });

  $(window).on("scroll", function() {
    scrNav();
  });

  function scrNav() {
    var sTop = $(window).scrollTop();
    $("section").each(function() {
      var id = $(this).attr("id"),
        offset = $(this).offset().top - 1,
        height = $(this).height();
      if (sTop >= offset && sTop < offset + height) {
        link.removeClass("active");
        $("#navbar")
          .find('[data-scroll="' + id + '"]')
          .addClass("active");
      }
    });
  }
  scrNav();
});
