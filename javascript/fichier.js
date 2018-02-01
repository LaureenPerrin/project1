function initMap() {
        var uluru = {lat: 48.881201, lng: 2.350838};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

$(function() {
  $('a[href=#header]').click(function(){
    $('html').animate({scrollTop:0}, 'slow');
    return false;
  });
});