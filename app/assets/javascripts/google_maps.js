function init_map(){
  var myOptions = {zoom:13,center:new google.maps.LatLng(41.153836,-80.54211800000002),mapTypeId: google.maps.MapTypeId.ROADMAP};
  map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
  marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(41.153836,-80.54211800000002)});
  infowindow = new google.maps.InfoWindow({content:'<strong>Jills Mixing Bowl</strong><br>3309 Pothour Wheeler Rd. Hubbard, Ohio, 44425<br>'});
  google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
  infowindow.open(map,marker);
}google.maps.event.addDomListener(window, 'load', init_map);

$(document).ready(function() {
  mobileMenuToggle();
  galleryModel();
});
