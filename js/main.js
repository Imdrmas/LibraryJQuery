$(function () {

  'use strict';

  $('body').css('paddingTop', $('.navbar').innerHeight() +11);

  $('.navbar li a').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
    }, 1000);
  }); // end

  $('.navbar-nav li a').click(function () {
    $(this).addClass('active').parent().siblings().find('a').removeClass('active');
  // $(this).addClass('active');
  //  $(this).removeClass('active');

  });

  $(window).scroll(function (){
    $('.block').each(function (){
      if ($(window).scrollTop() > $(this).offset().top){
        console.log($(this).attr('id'));

        var blockID = $(this).attr('id');
        $('.navbar li a').removeClass('active');
        $('.navbar li a[data-scroll="'+ blockID +'"]').addClass('active');

      }
    });

    var scrollToTop = $('.scroll-to-top');
     if ($(window).scrollTop() >= 1000){
       if (scrollToTop.is(':hidden')){
          scrollToTop.fadeIn(400);
       }
     } else {
       scrollToTop.fadeOut(400);
     }
  });

  $('.scroll-to-top').click(function(event){
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 1000)
    $(this)
  });

  $('.show-popup').click(function () {
    $($(this).data('popup')).fadeIn();
  });
  $('.popup').click(function () {
    $(this).fadeOut();
  });
  $('.popup .inner').click(function (e) {
    e.stopPropagation();
  });
  $('.popup .close').click(function (e){
    e.preventDefault();
    $(this).parentsUntil('.popup').parent().fadeOut();
  });

  $(document).keydown(function(e){
    if (e.keyCode == 27){
      $('.popup').fadeOut();
    }
  });

  $('.buttons-effects button').each(function () {
    $(this).prepend('<span></span>');
  });

    $('.from-left, .border-left').hover(function () {
    $(this).find('span').eq(0).animate({
    width: '100%'
  }, 300);
  }, function (){
    $(this).find('span').eq(0).animate({
    width: 0
  }, 300);
  });

  $('.from-top, .border-top').hover(function () {
  $(this).find('span').eq(0).animate({
  height: '100%'
}, 300);

}, function (){
  $(this).find('span').eq(0).animate({
  height: 0
}, 300);
});

 function bounceElement(selector, times, distance, speed) {
   for (var i = 0; i < times; i++) {
     $(selector).animate({
       top: '-=' + distance
     }, speed).animate({
       top: '+=' + distance
     }, speed);
   }
 }

$('.bounce-one').on('click', function () {
   bounceElement($(this), 4, 20, 400);
});
$('.bounce-two').on('click', function () {
   bounceElement($(this), 5, 20, 300);
});
$('.bounce-three').on('click', function () {
   bounceElement($(this), 6, 20, 200);
});
$('.bounce-four').on('click', function () {
   bounceElement($(this), 8, 20, 100);
});


 $('.animated-progress span').each(function(){
  $(this).animate({
  width: $(this).attr('data-progress') + '%'
}, 1000, function(){
  $(this).text(+ $(this).attr('data-progress') +'%');
});
});

$('.fixed-menu .fa-gear').on('click', function(){
  $(this).parent('.fixed-menu').toggleClass('is-visible');
  if($(this).parent('.fixed-menu').hasClass('is-visible')){
    $(this).parent('.fixed-menu').animate({
      left: 0
    }, 500);
    $('body').animate({
      paddingLeft: '220px'
    }, 500);

  }else{
    $(this).parent('.fixed-menu').animate({
      left: '-220px'
    }, 500);
    $('body').animate({
      paddingLeft: '20px'
    }, 500);
  }
});

$('.change-color li').on('click', function(){
  $('body').attr('data-default-color', $(this).data('color'));
});

var numbersOfThumnails = $('.thumbnails').children().length,
    marginBetweenThumnails = '.1',
    totalMarginBeteenThumnails = numbersOfThumnails * marginBetweenThumnails,
    thumbnailsWidth = (100 - totalMarginBeteenThumnails) / numbersOfThumnails;

   $('.thumbnails img').css({
      'width': thumbnailsWidth + '%',
      'margin-right': marginBetweenThumnails + '%'
   });

$('.thumbnails img').on('click', function(){
  $(this).addClass('selected').siblings().removeClass('selected');
  $('.master-img img').hide().attr('src', $(this).attr('src')).fadeIn(500);
});


$('.master-img .fa-chevron-right').on('click', function(){
  if($('.thumbnails .selected').is(':last-child')){
    $('.thumbnails img').eq(0).click();
  }else{
    $('.thumbnails .selected').next().click();
  }
});
$('.master-img .fa-chevron-left').on('click', function(){
  if($('.thumbnails .selected').is(':first-child')){
    $('.thumbnails img:last').click();
  }else{
    $('.thumbnails .selected').prev().click();
  }
});

  $('.products .product i, .items .item i').on('click', function(){
    $(this).toggleClass('fa-plus fa-minus').next('p').slideToggle();
  });

  $('.view-options i').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.items').removeClass('list-view grid-view').addClass($(this).data('class'));
  });

  $('.error-message').each(function (){
    $(this).animate({
      right: 0
    }, 1000, function(){
      $(this).delay(3000).fadeOut();
    });
  });

     var placeAttr = '';
  $('[placeholder]').focus(function (){
    placeAttr = $(this).attr('placeholder');
    $(this).attr('placeholder', '');
  }).blur(function (){
    $(this).attr('placeholder', placeAttr);
  });


  $('[required]').blur(function(){
    if ($(this).val() == ''){
      $(this).next('span').fadeIn().delay(2000).fadeOut();
      $('.asterisk').css({
        'color': 'red'
      });
      $('.asterisk').delay(1000).fadeIn();
    }
  });


  $('<span class="asterisk">*</span>').insertBefore(':input[required]');
  $('.asterisk').parent('div').css('position', 'relative');
  $('.asterisk').each(function(){
    $('.asterisk').css({
      'position': 'absolute',
      'color': 'red',
      'font-weoght': 'bold',
      'font-size': 24,
      'top': 13,
      'left': $(this).parent('div').find(':input').innerWidth() - 20
    });
  });

    $('[placeholder]').focus(function () {
      if ($(this).val() == 'placeholder'){
        $('.asterisk').css({
          'color': 'red'
        });
      }
      else{
        $('.asterisk').css({
          'color': 'green'
        });
        $('.asterisk').delay(3000).fadeOut();

      }
    });

    $('.our-form input[type="file"]').wrap('<div class="custom-file"></div>');
    $('.custom-file').prepend('<span>Upload Your Files</span>');
      $('.custom-file').append('<i class="fa fa-upload fa-lg skin-background"></i>');
      $('.our-form input[type="file"]').change(function(){
        $(this).prev('span').text($(this).val());
      });

      $('.detect-unicode').on('keyup', function(event){
         var keyboard = event.keyCode || event.which;
         $('.unicode').html(" The unicode for the key " + keyboard);
      });

      $('.auto-direction').on('keyup', function(){
        if ($(this).val().charCode(0) < 200) {
          $(this).css('direction', 'ltr');
        }else{
          $(this).css('direction', 'rtl');
        }
      });

      /* var english = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
      text = '';
       for (var i = 0; i < english.length; i++) {
         text += english.charCode(i) + '<br>'
       }
       $('#english').html(text);*/


       $('.add-tag').on('keyup', function(event){
         var keyboardkey = event.keyCode || event.which;

       if (keyboardkey === 188) {
         var thisValue = $(this).val().slice(0, -1);
         $('.tags').append('<span class="tag-span"><i class="fa fa-times"></i>'+ thisValue + '</span>');
         $(this).val('');
         }
       });

       $('.tags').on('click', '.tag-span i', function () {
         $(this).parent('.tag-span').fadeOut(800);
       });

      /* $('.trimmed-texts .p-one').each(function () {
         if ($(this).text().length > 100) {
           var trimmedText = $(this).text().substr(0, 100);
           $(this).text(trimmedText + ' ....');
         }
       });

       function trimText(selector, maxLength) {
         $(selector).each(function () {
           if ($(this).text().length > maxLength) {
             var trimmedText = $(this).text().substr(0, maxLength);
             $(this).text(trimmedText).append('<p class="read-more">Read More <i class="fa fa-times"></i></p>');
           }
         });
       }
       trimText('.trimmed-texts .p-one', 100);
       trimText('.trimmed-texts .p-two', 200);
       trimText('.trimmed-texts .p-three', 300);
       */


       $(document).ready(function() {
           // Configure/customize these variables.
           var showChar = 200;  // How many characters are shown by default
           var ellipsestext = "...";
           var moretext = "Show more >";
           var lesstext = "Show less";


           $('.more').each(function() {
               var content = $(this).html();

               if(content.length > showChar) {

                   var c = content.substr(0, showChar);
                   var h = content.substr(showChar, content.length - showChar);

                   var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink read-more">' + moretext + '</a></span>';

                   $(this).html(html);
               }

           });

           $(".morelink").click(function(){
               if($(this).hasClass("less")) {
                   $(this).removeClass("less");
                   $(this).html(moretext);
               } else {
                   $(this).addClass("less");
                   $(this).html(lesstext);
               }
               $(this).parent().prev().toggle();
               $(this).prev().toggle();
               return false;
           });
       });

       var theMacHeight = 0;
       $('.same-height div').each(function () {
         if($(this).height() > theMacHeight){
           theMacHeight = $(this).height();
         }
       });
       $('.same-height div').height(theMacHeight);


       var xIndexValue = 0
       $('.cards .card').on('click', function () {
           $(this).animate({
             left: '20%',
             marginTop: 30

           }, 400, function () {
             xIndexValue--;
             $(this).css('z-index', xIndexValue);
           }).animate({
             left: $(this).css('left'),
             marginTop: 0

           }, 400);
       });

       blinkWarning();
       function blinkWarning() {
         $('.blink-warning').fadeOut(1000, function () {
           $(this).fadeIn(1000);
           blinkWarning();
         });
       }


    var newTask = $('.task-input');
    $('.add-task').on('submit', function (e) {
      e.preventDefault();
      if (newTask.val() != '') {
        $('<li title="Delete">' + newTask.val() + '</li>').appendTo('.tasks');
        newTask.val('');
      }
    });
   $('.tasks').on('click', 'li', function () {
     $(this).css('color', 'red')
     $(this).css('text-decoration', 'line-through').delay(200).fadeOut(400, function () {
       $(this).remove();
     });
   });

   var theText = $('.typer').data('text'),
   theTextLength = theText.length,
   n = 0,
   theTyper = setInterval(function () {
     $('.typer').each(function () {
       $(this).html($(this).html() + theText[n]);
     });
     n += 1;
     if (n >= theTextLength) {
       clearInterval(theTyper);
     }
   }, 50);


   /// Calculate Table cell Price Valus
   var theSummary = 0;
   $('.price').each(function () {
     theSummary += parseInt($(this).text());
   });

   $('.the-total').text(theSummary);

   /// Auto Change Content
   (function autoChange() {
     $('.ticker-list .active').each(function () {
       if (! $(this).is(':last-child')) {
          $(this).delay(1000).fadeOut(1000, function () {
            $(this).removeClass('active').next().addClass('active').fadeIn();
            autoChange();
          });
       }else {
         $(this).delay(1000).fadeOut(1000, function () {
           $(this).removeClass('active');
           $('.ticker-list li').eq(0).addClass('active').fadeIn();
           autoChange();
         });
       }
     });
   }());

}); // end
