$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

$('#nav').affix({
          offset: {
            top: $('header').height()
          }
        });	
        
        // Showing and hiding tooltip with different speed
        $(".tooltip-large").tooltip({
            delay: {show: 0, hide: 100}
        });

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(37.09024,-95.71289100000001),
    zoom: 3
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

