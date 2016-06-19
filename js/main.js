angular.module('Concierge', [])
  .controller('introController', introController)

function introController() {
  var introCtrl = this;
};

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }


);
