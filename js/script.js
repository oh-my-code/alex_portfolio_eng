$(document).ready(function () {

  // EXPAND button

      $('.expand-text').hide();
      $('.expand-plus').click(function(){
      var $answer = $(this).next('.expand-text');
      if ($answer.is(':hidden')) {
        $answer.slideDown();

        $(this).addClass('close-text');
      }else{
        $answer.slideUp();
        $(this).removeClass('close-text');
      }
      });//окончание click
      }); // document ready end
