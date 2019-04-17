function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 31.8346495, lng: 117.2107937},
    zoom: 8    });
    
    var infoWindow = new google.maps.InfoWindow({
      content: 'hefei city in China'
      });
    
    var marker = new google.maps.Marker({
      position: center,
      map: map,
      icon: 'pics/map.png'
    });
    
    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
  }
