$(document).ready(function(){

  // Открытие меню
  $('.b-navbar_toggle-btn').on('click', function() {
    $('.b-navbar_toggle-btn, .b-menu').toggleClass('open');
  });


  // Закрытие меню
  $(document).click(function(event) {
    if ($(event.target).closest('.b-navbar').length) return;
    $('.b-navbar_toggle-btn, .b-menu').removeClass("open");
    event.stopPropagation();
  });

  $('.b-menu a').on('click', function() {
    $('.b-menu, .b-dropdown-menu_submenu').removeClass('open');
    $('.b-dropdown-menu, .b-dropdown-menu_submenu').css('display', 'none');
  });


  // Открытие выпадающего меню
    if (Modernizr.touchevents){
      $('.b-menu_dropdown').on('click', function() {
        $('.b-dropdown-menu, .b-dropdown-menu_submenu').removeAttr('style');
        $(this).toggleClass('open');
      });

      $('.b-dropdown-menu_submenu>.b-menu_link').on('click', function(event) {
            event.preventDefault(); 
            event.stopPropagation(); 
            $(this).parent().siblings().removeClass('open');
            $(this).parent().toggleClass('open');
      });
  } else {
      $('.b-menu').addClass('js-not-touch-device');
      $('.b-menu_dropdown').hover(function() {
        $('.b-dropdown-menu, .b-dropdown-menu_submenu').removeAttr('style');
      });
  };


  // Закрытие выпадающего меню
  $(document).click(function(event) {
    if ($(event.target).closest('.b-menu_dropdown').length) return;
    $('.b-menu_dropdown, .b-dropdown-menu_submenu').removeClass("open");
    event.stopPropagation();
  });

});

