// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
if (typeof jQuery === 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}
// Place any jQuery/helper plugins in here.

//SCROLL TO TOP
jQuery(function() {

        jQuery(document).on('scroll', function() {

            if (jQuery(window).scrollTop() > 100) {
                jQuery('.scroll-top-wrapper').addClass('show');
            } else {
                jQuery('.scroll-top-wrapper').removeClass('show');
            }
        });

        jQuery('.scroll-top-wrapper').on('click', scrollToTop);
    });

function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({
            scrollTop: offsetTop
        }, 500, 'linear');
    }

//Fixed nav
jQuery(function() {
        jQuery(window).scroll(function() {
            var top = jQuery(document).scrollTop();
            if (top < 100) jQuery(".navigation").css({
                top: '0',
                position: 'relative'
            });
            else jQuery(".navigation").css({
                top: '0',
                position: 'fixed',
                height: '71px'
            });
        });
    });

//Modals
//Header Recall
jQuery('.popmake-callback').on('click', function(event) {
  event.preventDefault();
  jQuery('#pum-626').fadeIn('400', function() {

  });
});
jQuery('.pum-close').on('click', function(event) {
  event.preventDefault();
  jQuery('#pum-626').fadeOut('400', function() {

  });
});


//Узнать подробнее
jQuery('.popmake-offer').on('click', function(event) {
  event.preventDefault();
  jQuery('#pum-831').fadeIn('400', function() {

  });
});
jQuery('.pum-close').on('click', function(event) {
  event.preventDefault();
  jQuery('#pum-831').fadeOut('400', function() {

  });
});

//Рассчитать стоимость заказа
jQuery('.popmake-price').on('click', function(event) {
  event.preventDefault();
  jQuery('#pum-828').fadeIn('400', function() {

  });
});
jQuery('.pum-close').on('click', function(event) {
  event.preventDefault();
  jQuery('#pum-828').fadeOut('400', function() {

  });
});

//Оставить заявку
jQuery('.tcformpop-open1').on('click', function(event) {
  jQuery('#myModal1').fadeIn('400', function() {
    jQuery('#myModal1').addClass('myModalo_open');
  });
});
jQuery('.close').on('click', function(event) {
  event.preventDefault();
  jQuery('#myModal1').fadeOut('400', function() {

  });
  jQuery('#myModal1').removeClass('myModalo_open');
});

//Navbar
jQuery( ".dropdown_item a" ).append( "<span class='caret'></span>" );
