/* ****
Civil Engineering Introduction Page's Functions
 **** */
 $(function() {
  // initialize
  var elm = $("#contents_block").children("article");
  //console.log(elm.length);
  $(elm).each(function () {
   $(this).css("display","none");
  });
  $("#river").css("display","block");

 });
