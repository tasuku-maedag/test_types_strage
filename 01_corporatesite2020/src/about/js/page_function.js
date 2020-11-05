/* ****
Civil Engineering Introduction Page's Functions
 **** */
 $(function() {

   // initialize function
  let all_cont_disapper = () => {
    $("#contents_block").children("article").css("display","none");
  };
  all_cont_disapper();
  // initialize
  /*
  const cont_article = $("#contents_block").children("article");
  //console.log(elm.length);
  $(cont_article).each(function () {
   $(this).css("display","none");
  });
  */
  // only display river construction section
  $("#river").css("display","block");

  $('#constructionTypes').find('span').click( function () {
    // dissapper all contents
    all_cont_disapper();
    // get clicked element class name
    const classnames = $(this).attr('class');
    // console.log(classnames);
    if ( classnames.match(/river/) != null ) {
      $("#river").css("display","block");

    } else if ( classnames.match(/road/) != null ) {
      $("#road").css("display","block");

    } else if ( classnames.match(/creation/) != null ) {
      $("#creation").css("display","block");

    } else if ( classnames.match(/bridge/) != null ) {
      $("#bridge").css("display","block");

    } else if ( classnames.match(/laying/) != null ) {
      $("#laying").css("display","block");

    } else if ( classnames.match(/slope/) != null ) {
      $("#slope").css("display","block");

    }
  });


 });
