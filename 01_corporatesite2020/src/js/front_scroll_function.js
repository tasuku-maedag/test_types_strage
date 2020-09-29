$(function() {

    // get scroll height each sarticles
    var serviceTop = $('#services').offset().top;
    var blogTop = $('#blog').offset().top;
    var careerTop = $('#career').offset().top;
    var contactTop = $('#contact').offset().top;

    // Color Code Value
    var kon ="#0c243f";
    var sironeri = "#fcfaf2";

    //console.log([serviceTop,blogTop,careerTop,contactTop]);

    // scroll event
    $(window).scroll(function(){
      var scrollAmt = $(this).scrollTop();

      // for mock up
      //$('.scrollAmt').text(scrollAmt);

      /* ****
       left side header belt becom small
       ****  */
      var headerTxt = $('header').text();
      if ( scrollAmt >= serviceTop && headerTxt != "" ){
        // header is not empty
       $('header').find('h1').text("");
       $('header').removeClass("loaded").addClass("scrolled");
     } else if ( scrollAmt <= serviceTop  ) {
       // && headerTxt == ""
       $('header').find('h1').text("株式会社 前田組");
       $('header').removeClass("scrolled").addClass("loaded");

      }


      /* ****
       video fade out when scroll at #blog
       ****  */
      var videoDisplay = $('#topOfPage').find('video').css("display");
      // console.log(topOfPageOpacity);

      if ( scrollAmt >= blogTop && videoDisplay == "block" ) {
        $('#topOfPage').find('video').hide(500);//animate( { opacity:'hide' }, 500, 'linear' );
      } else if ( scrollAmt <= blogTop && videoDisplay == "none" ) {
        $('#topOfPage').find('video').show(800);//css("display","block").animate( { opacity:'show' }, 500, 'linear' );
      }

      /* ****
       change nav and footer character color
       **** */
      if ( scrollAmt >= (blogTop - 250) && $('nav').hasClass('whiteChar') ){
//        $('#languageSwitcher span').css("color",kon);
//        $('nav').css("background-color","transparent");
//        $('nav a').css("color",kon);
//        $('nav dt').css("color",kon);
        $('nav').removeClass('whiteChar').addClass('navyChar');
        $('footer').removeClass('whiteChar').addClass('navyChar');
//        $('footer li').css("color",kon);
//        $('footer a').css("color",kon);
        } else if ( scrollAmt <= (blogTop - 250) && $('nav').hasClass('navyChar') ) {
//        $('#languageSwitcher span').css("color","#fcfaf2");
//        $('nav').css("background-color","rgba(12, 36, 62, 0.5)");
//        $('nav a').css("color",sironeri);
//        $('nav dt').css("color",sironeri);
        $('nav').removeClass('navyChar').addClass('whiteChar');
        $('footer').removeClass('navyChar').addClass('whiteChar');
//        $('footer li').css("color",sironeri);
//        $('footer a').css("color",sironeri);
      }
    });

});
