$(document).ready(function() {
  $('.buttonone').click(function(){
    $(".legendbox").toggle();
    $(".flipflop").toggle();
    $('.buttonone').toggleClass('btn-danger');
  });
  $('.btntwo').click(function(){
    $('.btntwo').toggleClass('btn-danger');
    $('.fliptwo').toggle();
    var series= chart.series[1];
    if (series.visible){
      series.hide();
    }
    else {
      series.show();
    }
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
