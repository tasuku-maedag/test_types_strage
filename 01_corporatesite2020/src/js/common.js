/* ****
  Common Functions Each pages
 **** */

// constructor
//$("ul.drawerMenu").css("display","none");
document.querySelector("ul.drawerMenu").style.display = "none";

// JS version
const bdy = document.querySelector('body');
const hdr = document.querySelector('header');

// close <header>
document.getElementById('headerCloser').addEventListener( 'click', () => {

  // set animation classes
  hdr.classList.remove('hdr-open');
  hdr.classList.add('hdr-close');
  // reset element position by css
  hdr.style.transform = "translateX(-90%)";

  bdy.classList.remove('body-slide-open');
  bdy.classList.add('body-slide-close');
  bdy.style.paddingLeft = "0";

});
// open <header>
document.getElementById('headerOpener').addEventListener( 'click', () => {

  // set animation classes
  hdr.classList.remove('hdr-close');
  hdr.classList.add('hdr-open');
  // reset element position by css
  hdr.style.transform = "translateX(0%)";

  bdy.classList.remove('body-slide-close');
  bdy.classList.add('body-slide-open');
  bdy.style.paddingLeft = "20%";

});

// jQuery version
$(function() {

  /*
  Global Menu Animation
    Hide & Show(Toggle) <header> element
  */
  /*
  $('#headerCloser').click( function () {

    $('header').toggleClass("hdrtoggle").css("transform","translateX(-90%)");

  });
  */


  /*
  Global Menu Animation
    Hide & Show(Toggle) .drawerMenu
  */

  // disappear .drawerMenu display in NAV element
  //$("ul.drawerMenu").css("display","none");

  // toggle .drawerMenu
  $(".openServiceList").click(function () {

    $(".drawerMenu").animate(
      {
        display:"toggle", opacity:"toggle", left:'100%'
      },
      250, 'swing',
      function () {
        $(this).css({ display:"block" });
      }
    ).find('.closer').children('span').removeClass('closer-DegLeft').addClass('closer-DegRight');
    //).find('.closer').children('span').css('transform','rotate(0)');
    //$(this).children('span').css('transform','rotate(0deg)');

  });

  $(".drawerMenu").find(".closer").click(function () {
    $(".drawerMenu").animate(
      {
        display:"toggle", opacity:"toggle", left:'0'
      },
      350, 'swing',
      function () {
        //$(this).find('.closer').removeClass('.rorate');
        $(this).css({display:"none"});
      }
    ).find('.closer').children('span').removeClass('closer-DegRight').addClass('closer-DegLeft');
    //).find('.closer').children('span').css('transform','rotate(360)');
    //$(this).children('span').css('transform','rotate(360deg)');
  });


  /*
   "other links" disappear when window size is changed.
   ... use IntersectionObserver, when "other link" is reaching globalmenu ??
  */
  $(window).resize(function() {
    let wh = $(window).height();
    if ( wh < "400") {
      $('#otherlinks').css("display","none");
    } else {
      $('#otherlinks').css("display","block");
    }
  });

// query end
});
