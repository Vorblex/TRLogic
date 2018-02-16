export default () => {
  let
    header = $('.header'),
    offset = header.outerHeight(), 
    menuLimit = $('.content__right').offset().top - offset,
    menu = $('.fixed-sidebar');

  let setFixedMenu = function() {
    let scroll = $(this).scrollTop();

    if(scroll >= menuLimit) {
      if(!menu.hasClass('fixed')) menu.addClass('fixed');
      
    } else {
      if(menu.hasClass('fixed')) menu.removeClass('fixed');
    }
  };

  $(document).on('scroll', setFixedMenu);
};