$(document).ready(function() {
  $('.buttonone').click(function(){
    $(".legendbox").toggle();
    $(".flipflop").toggle();
    $('.buttonone').toggleClass('btn-danger');
  });
  // Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});
});
