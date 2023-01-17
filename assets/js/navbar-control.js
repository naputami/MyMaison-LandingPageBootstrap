$(function() {

    $(window).scroll(function() {
      var x = $(window).scrollTop();

      if (x >= 42) {
        $("#logo-bar").hide();
      } else {
        $("#logo-bar").show();
      }

    });

});