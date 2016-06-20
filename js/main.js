angular.module('Concierge', [])
  .controller('introController', introController)

function introController() {
  var introCtrl = this;
};

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
  // $function() {
  //   var pull        = $('#pull');
  //       menu        = $('nav ul');
  //       menuHeight  = menu.height();
  //
  //   $(pull).on('click', function(e) {
  //     e.preventDefault();
  //     menu.slideToggle();
  //   });
  //
  //   $(window).resize(function() {
  //     var w = $(window).width();
  //     if(w > 320 && menu.is)(':hidden')) {
  //          menu.removeAttr('style');
  //     }
  //   });
  // });
);
