function initMap() {
	
	var map_container_div_id = 'map-google';
	var cont = $('#' + map_container_div_id);
	
	var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';
	
	if(cont.length) {
		
		var map_data = JSON.parse(cont.attr('data-map') || '{}');
		/*
		{
			"center" : [52.9767305, 36.0620975],
			"zoom" : 18,
			"placemarks" : [
				{
					"coord" : [52.976698, 36.063286]
				}
			]
		}
		*/
		
		var coordMapOfficeOne = map_data.center,
			zoomMapOfficeOne = map_data.zoom,
			styleMapOfficeOne = [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"lightness":"0"},{"saturation":"4"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#c7dae2"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7bc3e4"}]}],
			optionsMapOfficeOne = {
				zoom: zoomMapOfficeOne,
				center: new google.maps.LatLng(coordMapOfficeOne.lat, coordMapOfficeOne.lng),
				//scrollwheel: false,	
				//styles: styleMapOfficeOne
			},
			idOfficeOne = cont.get(0),
			mapOfficeOne = new google.maps.Map(idOfficeOne, optionsMapOfficeOne),		
			//iconOfficeOne = '/img/default/icon-map.png',
			iconOfficeOne = {        
				path: "M-114.9,200c-0.6-0.1-1,0.3-1.1,0.9c-0.1,0.5,0.3,1,0.9,1.1c10.5,1.2,16.1,4.6,16.1,6.5c0,2.7-10.7,6.5-28,6.5 s-28-3.8-28-6.5c0-1.9,5.6-5.3,16.1-6.5c0.5-0.1,0.9-0.6,0.9-1.1c-0.1-0.5-0.6-0.9-1.1-0.9c-10.5,1.2-17.9,4.7-17.9,8.5 c0,4.2,10.3,8.5,30,8.5s30-4.3,30-8.5C-97,204.7-104.4,201.2-114.9,200z M-127.2,211.8l15.3-22.2c5.8-7.7,4.9-20.3-1.8-27 c-3.6-3.6-8.4-5.6-13.6-5.6c-5.1,0-9.9,2-13.6,5.6c-6.7,6.7-7.5,19.3-1.8,27L-127.2,211.8z M-127,169c3.9,0,7,3.1,7,7 c0,3.9-3.1,7-7,7s-7-3.1-7-7S-130.9,169-127,169z",
				fillColor: '#17906c',
				strokeColor: '#000000',
				fillOpacity: 1,
				//anchor: new google.maps.Point(200,350),
				anchor: new google.maps.Point(-157,180),
				strokeWeight: 0,
				scale: 1
			};
			
			if(map_data.placemarks.length) {
				for(var i = 0; i < map_data.placemarks.length; i++) {
					var iconCoordOfficeOne = {lat: map_data.placemarks[i].coord[0],  lng: map_data.placemarks[i].coord[1]}, 
					OfficeOne = new google.maps.Marker({
						position: iconCoordOfficeOne,
						map: mapOfficeOne,
						icon: iconOfficeOne
					});
				}
			}
			
			
		
	}
        /*$(window).on('resize', function() {
			google.maps.event.trigger(map, "resize");
			map.setCenter(coord);
        });*/
};
$(function () {
	$(document.body).on('shown.bs.modal', '.modal', {}, function(event){
		event.preventDefault();
		$(window).trigger('resize');      
	});  
});