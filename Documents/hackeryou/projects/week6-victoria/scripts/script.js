var artWeatherApp = {};
var weatherData = {};
//var artQuery = current_observation.weather;
//get info from array

artWeatherApp.init = function(){
	console.log("init werks");
	$("form").on("submit", function(e){
		$("div.addweather").removeClass("addweather").addClass("weather");
		console.log("click works");
		e.preventDefault();
		var userLocation = $("input[name=userLocation]").val();
		artWeatherApp.getWeather(userLocation);
	});
	// artWeatherApp.getWeather();
};


//********************CONNECT TO WUNDERGROUND**********************


artWeatherApp.getWeather = function(userLocation){
	var encodeLocation = encodeURI(userLocation);
	$.ajax("http://api.wunderground.com/api/12db94e1b25ae1fc/conditions/q/" + encodeLocation + ".json", {
		type: "GET",
		dataType: "jsonp",
		success: function(data){
			console.log(data.current_observation);

			artWeatherApp.updateDom(data.current_observation);

			//call second ajax request here?
			// artWeatherApp.getPainting();
		}
	});
};


//**************on submit puts user input into url*****************


//inserts wunderground objects into html


artWeatherApp.updateDom = function(data){
	// artWeatherApp.clickSubmit();
	console.log("update dom werks")
	var city = data.display_location.city;
	var temp = data.temp_c;
	var state = data.weather;
	$("h1.city").html(city);
	$("h2.temp").html(temp);
	$("h2.state").html(state);
	if (temp < 0) {
 		if (state === 'Clear' || state === 'Mostly Sunny' || state === 'Partly Sunny' || state === 'Sunny') {
 			$(".wrapper").css('background-image', 'url(' + artImage[1].sceneUrl +')');
 			console.log(artImage[1]);
 		} else if (state === 'Cloudy' || state === 'Scattered Clouds' || state === 'Partly Cloudy' || state === 'Patches of Fog' || state === 'Shallow Fog' || state === 'Partial Fog' || state === 'Overcast' || state === 'Mostly Cloudy') {
 			$(".wrapper").css('background-image', 'url(' + artImage[0].sceneUrl +')');
 			console.log(artImage[0]);
 		} else if (state === 'Rain' || state === 'Drizzle' || state === 'Hail' || state === 'Mist' || state === 'Fog' || state === 'Rain Mist' || state === 'Rain Showers' || state === 'Thunderstorm' || state === 'Thunderstorms and Rain' || state === 'Thunderstorms with Hail' || state === 'Thunderstorms with Small Hail' || state === 'Freezing Drizzle' || state === 'Freezing Rain' || state === 'Freezing Fog') {
 			$(".wrapper").css('background-image', 'url(' + artImage[2].sceneUrl +')');
 			console.log(artImage[2]);
 		} else if (state == 'Snow' || state === 'Snow Grains' || state === 'Low Drifting Snow' || state === 'Blowing Snow' || state === 'Snow Showers' || state === 'Ice Pellet Showers' || state === 'Thunderstorms and Snow' || state === 'Thunderstorms and Ice Pellets') {
 			$(".wrapper").css('background-image', 'url(' + artImage[3].sceneUrl +')');
 			console.log(artImage[3]);
 		} else {
 			$(".wrapper").css('background-image', 'url(' + artImage[23].sceneUrl +')');
 		};
	} else if (temp < 5) {
 		if (state === 'Clear' || state === 'Mostly Sunny' || state === 'Partly Sunny' || state === 'Sunny') {
 			$(".wrapper").css('background-image', 'url(' + artImage[5].sceneUrl +')');
 			console.log(artImage[5]);
 		} else if (state === 'Cloudy' || state === 'Scattered Clouds' || state === 'Partly Cloudy' || state === 'Patches of Fog' || state === 'Shallow Fog' || state === 'Partial Fog' || state === 'Overcast' || state === 'Mostly Cloudy') {
 			$(".wrapper").css('background-image', 'url(' + artImage[4].sceneUrl +')');
 			console.log(artImage[4]);
 		} else if (state === 'Rain' || state === 'Drizzle' || state === 'Hail' || state === 'Mist' || state === 'Fog' || state === 'Rain Mist' || state === 'Rain Showers' || state === 'Thunderstorm' || state === 'Thunderstorms and Rain' || state === 'Thunderstorms with Hail' || state === 'Thunderstorms with Small Hail' || state === 'Freezing Drizzle' || state === 'Freezing Rain' || state === 'Freezing Fog') {
 			$(".wrapper").css('background-image', 'url(' + artImage[6].sceneUrl +')');
 			console.log(artImage[6]);
 		} else if (state == 'Snow' || state === 'Snow Grains' || state === 'Low Drifting Snow' || state === 'Blowing Snow' || state === 'Snow Showers' || state === 'Ice Pellet Showers' || state === 'Thunderstorms and Snow' || state === 'Thunderstorms and Ice Pellets') {
 			$(".wrapper").css('background-image', 'url(' + artImage[7].sceneUrl +')');
 			console.log(artImage[7]);
 		} else {
 			$(".wrapper").css('background-image', 'url(' + artImage[23].sceneUrl +')');
 			console.log(artImage[23]);
 		};
 	} else if (temp < 10) {
 		if (state === 'Clear' || state === 'Mostly Sunny' || state === 'Partly Sunny' || state === 'Sunny') {
 			$(".wrapper").css('background-image', 'url(' + artImage[9].sceneUrl +')');
 			console.log(artImage[9]);
 		} else if (state === 'Cloudy' || state === 'Scattered Clouds' || state === 'Partly Cloudy' || state === 'Patches of Fog' || state === 'Shallow Fog' || state === 'Partial Fog' || state === 'Overcast' || state === 'Mostly Cloudy') {
 			$(".wrapper").css('background-image', 'url(' + artImage[8].sceneUrl +')');
 			console.log(artImage[8]);
 		} else if (state === 'Rain' || state === 'Drizzle' || state === 'Hail' || state === 'Mist' || state === 'Fog' || state === 'Rain Mist' || state === 'Rain Showers' || state === 'Thunderstorm' || state === 'Thunderstorms and Rain' || state === 'Thunderstorms with Hail' || state === 'Thunderstorms with Small Hail' || state === 'Freezing Drizzle' || state === 'Freezing Rain' || state === 'Freezing Fog') {
 			$(".wrapper").css('background-image', 'url(' + artImage[10].sceneUrl +')');
 			console.log(artImage[10])
 		} else {
 			$(".wrapper").css('background-image', 'url(' + artImage[23].sceneUrl +')');
 			console.log(artImage[23])
 		};
 	} else if (temp < 15) {
 		if (state === 'Clear' || state === 'Mostly Sunny' || state === 'Partly Sunny' || state === 'Sunny') {
 			 $(".wrapper").css('background-image', 'url(' + artImage[12].sceneUrl +')');
 			 console.log(artImage[12]);
 		} else if (state === 'Cloudy' || state === 'Scattered Clouds' || state === 'Partly Cloudy' || state === 'Patches of Fog' || state === 'Shallow Fog' || state === 'Partial Fog' || state === 'Overcast' || state === 'Mostly Cloudy') {
 			$(".wrapper").css('background-image', 'url(' + artImage[11].sceneUrl +')');
 			console.log(artImage[11]);
 		} else if (state === 'Rain' || state === 'Drizzle' || state === 'Hail' || state === 'Mist' || state === 'Fog' || state === 'Rain Mist' || state === 'Rain Showers' || state === 'Thunderstorm' || state === 'Thunderstorms and Rain' || state === 'Thunderstorms with Hail' || state === 'Thunderstorms with Small Hail' || state === 'Freezing Drizzle' || state === 'Freezing Rain' || state === 'Freezing Fog') {
 			$(".wrapper").css('background-image', 'url(' + artImage[13].sceneUrl +')');
 			console.log(artImage[13]);
 		} else {
 			$(".wrapper").css('background-image', 'url(' + artImage[23].sceneUrl +')');
 			console.log(artImage[23]);
 		};
 	} else if (temp < 20) {
 		if (state === 'Clear' || state === 'Mostly Sunny' || state === 'Partly Sunny' || state === 'Sunny') {
 			$(".wrapper").css('background-image', 'url(' + artImage[15].sceneUrl +')');
 			console.log(artImage[15]);
 		} else if (state === 'Cloudy' || state === 'Scattered Clouds' || state === 'Partly Cloudy' || state === 'Patches of Fog' || state === 'Shallow Fog' || state === 'Partial Fog' || state === 'Overcast' || state === 'Mostly Cloudy') {
 			$(".wrapper").css('background-image', 'url(' + artImage[14].sceneUrl +')');
 			console.log(artImage[14]);
 		} else if (state === 'Rain' || state === 'Drizzle' || state === 'Hail' || state === 'Mist' || state === 'Fog' || state === 'Rain Mist' || state === 'Rain Showers' || state === 'Thunderstorm' || state === 'Thunderstorms and Rain' || state === 'Thunderstorms with Hail' || state === 'Thunderstorms with Small Hail' || state === 'Freezing Drizzle' || state === 'Freezing Rain' || state === 'Freezing Fog') {
 			$(".wrapper").css('background-image', 'url(' + artImage[16].sceneUrl +')');
 			console.log(artImage[16]);
 		} else {
 			$(".wrapper").css('background-image', 'url(' + artImage[23].sceneUrl +')');
 			console.log(artImage[23]);
 		};
 	} else if (temp < 25) {
 		console.log(state);
 		if (state === 'Clear' || state === 'Mostly Sunny' || state === 'Partly Sunny' || state === 'Sunny') {
 			$(".wrapper").css('background-image', 'url(' + artImage[20].sceneUrl +')');
 			console.log(artImage[20]);
 		} else if (state == 'Cloudy' || state === 'Scattered Clouds' || state === 'Partly Cloudy' || state === 'Patches of Fog' || state === 'Shallow Fog' || state === 'Partial Fog' || state === 'Overcast' || state === 'Mostly Cloudy') {
 			$(".wrapper").css('background-image', 'url(' + artImage[17].sceneUrl +')');
 			console.log(artImage[17]);
 		} else if (state == 'Rain' || state === 'Drizzle' || state === 'Hail' || state === 'Mist' || state === 'Fog' || state === 'Rain Mist' || state === 'Rain Showers' || state === 'Thunderstorm' || state === 'Thunderstorms and Rain' || state === 'Thunderstorms with Hail' || state === 'Thunderstorms with Small Hail' || state === 'Freezing Drizzle' || state === 'Freezing Rain' || state === 'Freezing Fog') {
 			$(".wrapper").css('background-image', 'url(' + artImage[19].sceneUrl +')');
 			console.log(artImage[19]);
 		} else {
 			$(".wrapper").css('background-image', 'url(' + artImage[23].sceneUrl +')');
 			console.log(artImage[23]);
 		};
 	} else if (temp < 30) {
 		if (state === 'Clear' || state === 'Mostly Sunny' || state === 'Partly Sunny' || state === 'Sunny') {
 			$(".wrapper").css('background-image', 'url(' + artImage[21].sceneUrl +')');
 			console.log(artImage[21]);
 		} else if (state === 'Cloudy' || state === 'Scattered Clouds' || state === 'Partly Cloudy' || state === 'Patches of Fog' || state === 'Shallow Fog' || state === 'Partial Fog' || state === 'Overcast' || state === 'Mostly Cloudy') {
 			$(".wrapper").css('background-image', 'url(' + artImage[20].sceneUrl +')');
 			console.log(artImage[20]);
 		} else if (state === 'Rain' || state === 'Drizzle' || state === 'Hail' || state === 'Mist' || state === 'Fog' || state === 'Rain Mist' || state === 'Rain Showers' || state === 'Thunderstorm' || state === 'Thunderstorms and Rain' || state === 'Thunderstorms with Hail' || state === 'Thunderstorms with Small Hail' || state === 'Freezing Drizzle' || state === 'Freezing Rain' || state === 'Freezing Fog') {
 			$(".wrapper").css('background-image', 'url(' + artImage[22].sceneUrl +')');
 			console.log(artImage[22]);
 		} else {
 			$(".wrapper").css('background-image', 'url(' + artImage[23].sceneUrl +')');
 			console.log(artImage[23]);
 		};
 	} else {
 		$(".wrapper").css('background-image', 'url(' + artImage[23].sceneUrl +')');
 		console.log(artImage[23]);
 	};
};


//*****PROBLEMS WITH API... YYYY**************


// artWeatherApp.getPainting = function(){
// 	$.ajax({
// 		url: "http://www.brooklynmuseum.org/opencollection/api/",
// 		type: "GET",
// 		dataType: 'jsonp',
// 		data: {
// 			method: "collection.search",
// 			version: "1",
// 			api_key: "1ZWcRm4UNq",
// 			format: "json",
// 			keyword: "cloud"
// 		},
// 		success: function(result2){
// 			console.log(result2);
// 		}
// 	});
// };


//******************CONNECT TO MUSEUM API******************

// artWeatherApp.getPainting = function(){
// 	$.ajax({
// 		url: "https://www.rijksmuseum.nl/api/en/collection",
//     	type: "GET",
//     	dataType: "jsonp",
//     	data: {
//       		key: "U11RSAA8",
//       		format: "jsonp",
//       		q: "cloud"
//     	},
//     	success: function(result2){
//     		console.log(result2)
//     	}
// 	});
// };

//********SEARCH MUSEUM WITH WEATHER CONDITION************


//**************INSERT PIC INFO INTO HTML*****************


// artWeatherApp.getDidacticInfo = function(){
// 	$("p.artist").html();
// 	$("p.title").html();
// 	$("p.date").html();

// };


//******************INSERT IMAGE AS BACKGROUND*************


//***************RUN INIT WHEN PAGE LOADS******************


$(document).ready(function(){
	artWeatherApp.init();
});


//combos
//time of day: morning, noon, evening, night,
//weather: cloudy, rain, clear, snowing,

var artImage = [
	{
		'picState': 'cloudy0-0',
		'name': 'Francis Guy',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/97.13_colorcorrected_SL1.jpg',
		'title': 'Winter Scene in Brooklyn',
		'date': 'ca. 1819-1820'
	},
	{
		'picState': 'clear0-1',
		'name': 'George Wesley Bellows',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/51.96_PS1.jpg',
		'title': 'A Morning Snow -- Hudson River',
		'date': '1910'
	},
	{
		'picState': 'rain0-2',
		'name': 'George Bradford Brainerd',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/1996.164.2-2238_glass_IMLS_SL2.jpg',
		'title': 'A Breakdown, Brooklyn',
		'date': 'ca. 1872-1887'
	},
	{
		'picState': 'snow0-3',
		'name': 'Breading G. Way',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/X894.114.jpg',
		'title': 'Blizzard of March 1888, Brooklyn',
		'date': '1888'
	},
		{
		'picState': 'cloudy5-4',
		'name': 'Renata von Hanffstengel',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/CUR.1990.119.26.jpg',
		'title': 'Down to Nowhere',
		'date': '1978'
	},
	{
		'picState': 'clear5-5',
		'name': 'William Trost Richards',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/32.141_transp1093.jpg',
		'title': 'Early Summer',
		'date': '1888'
	},
	{
		'picState': 'rain5-6',
		'name': 'Grace Arnold Albee',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/CUR.76.198.92.jpg',
		'title': 'Turbulence',
		'date': '1965'
	},
	{
		'picState': 'snow5-7',
		'name': 'Frederick Childe Hassam',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/62.68_SL1.jpg',
		'title': 'Late afternoon, New York, Winter',
		'date': '1900'
	},
		{
		'picState': 'cloudy10-8',
		'name': 'William Trost Richards',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/53.224_SL1.jpg',
		'title': 'Old Orchard at Newport',
		'date': '1875'
	},
	{
		'picState': 'clear10-9',
		'name': 'Eugene Louis Boudin',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/15.314_SL1.jpg',
		'title': 'The Beach at Trouville',
		'date': 'ca. 1887-1896'
	},
	{
		'picState': 'rain10-10',
		'name': 'Albert Bierstadt',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/76.79_SL1.jpg',
		'title': 'A Storm in the Rocky Mountains',
		'date': '1863'
	},
		{
		'picState': 'cloudy15-11',
		'name': 'Thomas Moran',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/32.845_PS2.jpg',
		'title': 'Sunset at Sea',
		'date': '1906'
	},
	{
		'picState': 'clear15-12',
		'name': 'Thomas Cole',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/67.205.2_SL1.jpg',
		'title': 'A Pic-Nic Party',
		'date': '1846'
	},
	{
		'picState': 'rain15-13',
		'name': 'Francois Verheyden',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/06.322_cropped_bw.jpg',
		'title': 'School Girls Caught in the Rain',
		'date': '1869'
	},
		{
		'picState': 'cloudy20-14',
		'name': 'Albert Bierstadt',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/2004.49.jpg',
		'title': 'Blue and White Cloud',
		'date': 'n.d.'
	},
	{
		'picState': 'clear20-15',
		'name': 'William Glackens',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/67.24.6_colorcorrected_SL1.jpg',
		'title': 'Bathing at Bellport',
		'date': '1912'
	},
	{
		'picState': 'rain20-16',
		'name': 'Everett Shinn',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/43.227_PS6.jpg',
		'title': 'Fifth Avenue',
		'date': '1910'
	},
		{
		'picState': 'cloudy25-17',
		'name': 'George Inness',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/41.775_SL3.jpg',
		'title': 'Sunrise',
		'date': '1887'
	},
	{
		'picState': 'clear25-18',
		'name': 'some guy',
		'sceneUrl': 'http://placekitten.com/800/800',
		'title': 'untitled',
		'date': '1999'
	},
	{
		'picState': 'rain25-19',
		'name': 'H.S. Lewis',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/1996.164.5-3_bw_SL1.jpg',
		'title': 'Surf Avenue, Coney Island',
		'date': '1904'
	},
		{
		'picState': 'cloudy30-21',
		'name': 'Claude Monet',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/68.48.1_colorcorrected_SL1.jpg',
		'title': 'Houses of Parliament, Sunlight Effect',
		'date': '1903'
	},
	{
		'picState': 'clear30-22',
		'name': 'William Merrit Chase',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/19.96_SL1.jpg',
		'title': 'Shinnecock Hills',
		'date': 'ca. 1895'
	},
	{
		'picState': 'rain30-23',
		'name': 'Pat Steir',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/1990.109_PS2.jpg',
		'title': 'Everlasting Waterfall',
		'date': '1989'
	},
	{
		'picState': 'over30-24',
		'name': 'Jules de Balincourt',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/2007.34_PS6.jpg',
		'title': 'Not Yet Titled',
		'date': '2007'
	}
];

// artWeatherApp.getInfoFromArray = artImage[0];
