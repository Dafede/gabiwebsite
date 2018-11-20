$('#nav').affix({
      offset: {
        top: $('#myCarousel').height()
      }
});	

$('#avatar').affix({
      offset: {
        top: $('#myCarousel').height()
      }

});



  $('.tile')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    })

	


$( ".col-main-index" ).hover(
  function() {
      $(this).find("div").animate({
    height: "2.5em",
	paddingTop: "0.5em"
  }, 500, function() { });
  }, function() {
     $(this).find("div").animate({
    height: "2em",
	paddingTop: "0.25em"
  }, 500, function() { });
  }
);



window.setTimeout(function() {
    $(".dropdown-menu-title").css('visibility', 'visible');
}, 755);

/*
$( ".navbar-dropdown-main" ).hover(
  function() {
      $(".dropdown-menu-title").animate({
    height: "2.5em"
  }, 500, function() { });
  }, function() {
     $(".dropdown-menu-title").animate({
    height: "0px"
  }, 500, function() { });
  }
);
*/


$(document).ready(function() {

	$("html").niceScroll();

});