$(function () {
  var link = $('.menu ul li > a'); //all elements a

  link.on('click', function(e){
    e.preventDefault();

    //e.target проверяет и сравнивает события клика на соответсвие нажатой кнопки
    if($(e.target).is('#about')){
      $('html,body').stop().animate({ scrollTop: $('.section2').offset().top }, 1000);
    }

    if($(e.target).is('#work')){
      $('html,body').stop().animate({ scrollTop: $('.section3').offset().top }, 1000);
    }

    if($(e.target).is('#progress')){
      $('html,body').stop().animate({ scrollTop: $('.section6').offset().top }, 1000);
    }

    if( $(e.target).is('#services') ){
      $('html, body').animate({scrollTop:
      $('.section7').offset().top}, 1000);
    }

    if( $(e.target).is('#testimonials') ){
      $('html, body').animate({scrollTop:
      $('.section8').offset().top}, 1000);
    }

    if( $(e.target).is('#contact') ){
      $('html, body').animate({scrollTop:
      $('.section10').offset().top}, 1000);
    }
  });
});
