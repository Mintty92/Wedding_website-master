$(document).ready(function() {

	var pContainerHeight = $('.landing').height();

	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();

		if (wScroll <= pContainerHeight) {

			$('.love').css({
				'transform' : 'translate(0px, '+ wScroll /1.17 +'px)'
			});

			$('.title-text').css({
				'transform' : 'translate(0px, '+ wScroll /2 +'px)'
			});

			$('.couple').css({
				'transform' : 'translate(0px, -'+ wScroll /10 +'px)'
			});

		}

		var loffset = (Math.min(0, wScroll - $('.underlineone').offset().top +$(window).height() - 800));

		if (wScroll > $('.underlineone').offset().top - $(window).height()){

			$('.underlineone').css({
				'margin-left' : loffset * .50
			});
		}

		var eoffset = (Math.min(0, wScroll - $('.underlinetwo').offset().top +$(window).height() - 800));

		if (wScroll > $('.underlinetwo').offset().top - $(window).height()){

			$('.underlinetwo').css({
				'margin-left' : eoffset * .50
			});
		}


		var offset = (Math.min(0, wScroll - $('.savethedate').offset().top +$(window).height() - 650));

		if(wScroll > $('.savethedate').offset().top - ($(window).height() + 50)){

				$('.save').css({
					'transform': 'translate(0px, -'+ Math.abs(offset * 0.45) +'px)'
				});

				$('.address').css({
					'transform': 'translate(0px, '+ Math.abs(offset * 1) +'px)'
				});

				$('.margin').css({
					'margin-left': ''+ Math.abs(offset * 0.164) +'px'
				});

				$('.margin').css({
					'margin-right': ''+ Math.abs(offset * 0.164) +'px'
				});

		}

	});


});

function initMap() {
		var centermap = {lat: 43.668, lng: -71.325};
				var castle = {lat: 43.720, lng: -71.322};
				var hotelcentharb = {lat: 43.707, lng: -71.462};
				var hotelwolfe = {lat: 43.585, lng: -71.216};
				var map = new google.maps.Map(document.getElementById('map'), {
					zoom: 11,
					center: centermap,
					zoomControl: true,
				scaleControl: false,
				scrollwheel: false,
				disableDoubleClickZoom: true,
				styles: [
				{
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#f5f5f5"
						}
					]
				},
				{
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#616161"
						}
					]
				},
				{
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"color": "#f5f5f5"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "administrative.land_parcel",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#bdbdbd"
						}
					]
				},
				{
					"featureType": "landscape",
					"stylers": [
						{
							"color": "#d7f7e9"
						}
					]
				},
				{
					"featureType": "poi",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#eeeeee"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#757575"
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#e5e5e5"
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#9e9e9e"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#219060"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#6cddad"
						},
						{
							"weight": 1
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels",
					"stylers": [
						{
							"color": "#f8aac2"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels.text",
					"stylers": [
						{
							"color": "#f8aac2"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#f8aac2"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"color": "#f8aac2"
						},
						{
							"weight": 1
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#757575"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#dadada"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#616161"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#9e9e9e"
						}
					]
				},
				{
					"featureType": "transit",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit.line",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#e5e5e5"
						}
					]
				},
				{
					"featureType": "transit.station",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#eeeeee"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#dde9ff"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#9e9e9e"
						}
					]
				}
			]

				});

		var contentString = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h1 id="firstHeading" class="firstHeading">Castle in the Clouds</h1>'+
			'<div id="bodyContent">'+
			'<p><a href="https://www.google.com/maps/place/Castle+in+the+Clouds/@43.7203644,-71.3244598,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb33dd62f898745:0x69f1aeea12005a5c!8m2!3d43.7203605!4d-71.3222711">'+
			'Get Directions</a> '+
			'</div>'+
			'</div>';

				var contentStringTwo = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h1 id="firstHeading" class="firstHeading">Center Harbor Inn</h1>'+
			'<div id="bodyContent">'+
			'<p><a href="https://www.google.com/maps/place/Center+Harbor+Inn/@43.707453,-71.4641706,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb340c5f8040ea5:0xe20369de5570c91!8m2!3d43.7074491!4d-71.4619819">'+
			'Get Directions</a></p>'+
			'<p><a href="http://www.centerharborinn.com/">'+
			'Check Reservations</a></p>'+
			'</div>'+
			'</div>';

				var contentStringThree = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h1 id="firstHeading" class="firstHeading">Wolfeboro Inn</h1>'+
			'<div id="bodyContent">'+
			'<p><a href="https://www.google.com/maps/place/Wolfeboro+Inn/@43.5849057,-71.2168528,15z/data=!4m2!3m1!1s0x0:0xe344dc1bf3ffde29?sa=X&ved=0ahUKEwiKqbn367_QAhXn7oMKHTWzCN0Q_BIIfDAK">'+
			'Get Directions</a> '+
			'<p><a href="http://www.wolfeboroinn.com/">'+
			'Check Reservations</a></p>'+
			'</div>'+
			'</div>';

		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
		var infowindowTwo = new google.maps.InfoWindow({
			content: contentStringTwo
		});
		var infowindowThree = new google.maps.InfoWindow({
			content: contentStringThree
		});

		var imageOne = "http://allyandandy.com/images/venue.png";
		var imageTwo = "http://allyandandy.com/images/hotel.png";
		var venue = new google.maps.Marker({
			position: castle,
			map: map,
			title: 'Castle in the Clouds',
			icon: imageOne
		});
		var hotelOne = new google.maps.Marker({
			position: hotelcentharb,
			map: map,
			title: "Center Harbor Inn",
			icon: imageTwo
		});
		var hotelTwo = new google.maps.Marker({
			position: hotelwolfe,
			map: map,
			title: "Wolfeboro Inn",
			icon: imageTwo
		});
		hotelOne.addListener('click', function() {
			infowindowTwo.open(map, hotelOne);
		});
		venue.addListener('click', function() {
			infowindow.open(map, venue);
		});
		hotelTwo.addListener('click', function() {
			infowindowThree.open(map, hotelTwo);
		});

	}