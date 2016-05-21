// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

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

function mobileMenuToggle() {
  $('#menu-toggle').on('click', function() {
    $('#main-nav').slideToggle();
  });
};

function galleryModel() {
  $('.gallery-image').on('click', function() {
    var imageUrl = $(this).attr('src');
    $('body').append('<div id="model-background"></div>');
    $('#model-background').append('<img src="' + imageUrl + '"/>');
  });
  
  $('body').on('click', '#model-background', function() {
    $('#model-background').remove();
  });
};

