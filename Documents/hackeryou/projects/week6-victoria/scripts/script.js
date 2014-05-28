var artWeatherApp = {};
var weatherData = {};
//var artQuery = current_observation.weather;
//get info from array

artWeatherApp.init = function(){
	console.log("init werks");
	$("form").on("submit", function(e){
		$("div.addweather").removeClass("addweather").addClass("weather");
		$("div.addart").removeClass("addart").addClass("art");
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
	console.log("update dom werks")
	var city = data.display_location.city;
	var temp = data.temp_c;
	var state = data.weather;
	$("span.city").html(city + "  // ");
	$("span.temp").html(temp + "&#x2103" + "  // ");
	$("span.state").html(state);
	if (temp < 0) {
 		if (state === 'Clear' || state === 'Mostly Sunny' || state === 'Partly Sunny' || state === 'Sunny') {
 			$(".wrapper").css('background-image', 'url(' + artImage[1].sceneUrl +')');
 			$("span.artist").text(artImage[1].artName + " // ");
 			$("span.title").text(artImage[1].artTitle + " // ");
 			$("span.date").text(artImage[1].date);
 		} else if (state === 'Cloudy' || state === 'Scattered Clouds' || state === 'Partly Cloudy' || state === 'Patches of Fog' || state === 'Shallow Fog' || state === 'Partial Fog' || state === 'Overcast' || state === 'Mostly Cloudy') {
 			$(".wrapper").css('background-image', 'url(' + artImage[0].sceneUrl +')');
 			$("span.artist").text(artImage[0].artName + " // ");
 			$("span.title").text(artImage[0].artTitle + " // ");
 			$("span.date").text(artImage[0].date);
 		} else if (state === 'Rain' || state === 'Drizzle' || state === 'Hail' || state === 'Mist' || state === 'Fog' || state === 'Rain Mist' || state === 'Rain Showers' || state === 'Thunderstorm' || state === 'Thunderstorms and Rain' || state === 'Thunderstorms with Hail' || state === 'Thunderstorms with Small Hail' || state === 'Freezing Drizzle' || state === 'Freezing Rain' || state === 'Freezing Fog' || state === 'Light Rain Showers' || state === 'Heavy Rain Showers') {
 			$(".wrapper").css('background-image', 'url(' + artImage[2].sceneUrl +')');
 			$("span.artist").text(artImage[2].artName + " // ");
 			$("span.title").text(artImage[2].artTitle + " // ");
 			$("span.date").text(artImage[2].date);
 		} else if (state == 'Snow' || state === 'Snow Grains' || state === 'Low Drifting Snow' || state === 'Blowing Snow' || state === 'Snow Showers' || state === 'Ice Pellet Showers' || state === 'Thunderstorms and Snow' || state === 'Thunderstorms and Ice Pellets') {
 			$(".wrapper").css('background-image', 'url(' + artImage[3].sceneUrl +')');
 			$("span.artist").text(artImage[3].artName + " // ");
 			$("span.title").text(artImage[3].artTitle + " // ");
 			$("span.date").text(artImage[3].date);
 		} else {
 			$(".wrapper").css('background-image', 'url(' + artImage[23].sceneUrl +')');
 			$("span.artist").text(artImage[23].artName + " // ");
 			$("span.title").text(artImage[23].artTitle + " // ");
 			$("span.date").text(artImage[23].date);
 		};
	} else if (temp < 5) {
 		if (state === 'Clear' || state === 'Mostly Sunny' || state === 'Partly Sunny' || state === 'Sunny') {
 			$(".wrapper").css('background-image', 'url(' + artImage[5].sceneUrl +')');
 			$("span.artist").text(artImage[5].artName + " // ");
 			$("span.title").text(artImage[5].artTitle + " // ");
 			$("span.date").text(artImage[5].date);
 		} else if (state === 'Cloudy' || state === 'Scattered Clouds' || state === 'Partly Cloudy' || state === 'Patches of Fog' || state === 'Shallow Fog' || state === 'Partial Fog' || state === 'Overcast' || state === 'Mostly Cloudy') {
 			$(".wrapper").css('background-image', 'url(' + artImage[4].sceneUrl +')');
 			$("span.artist").text(artImage[4].artName + " // ");
 			$("span.title").text(artImage[4].artTitle + " // ");
 			$("span.date").text(artImage[4].date);
 		} else if (state === 'Rain' || state === 'Drizzle' || state === 'Hail' || state === 'Mist' || state === 'Fog' || state === 'Rain Mist' || state === 'Rain Showers' || state === 'Thunderstorm' || state === 'Thunderstorms and Rain' || state === 'Thunderstorms with Hail' || state === 'Thunderstorms with Small Hail' || state === 'Freezing Drizzle' || state === 'Freezing Rain' || state === 'Freezing Fog' || state === 'Light Rain Showers' || state === 'Heavy Rain Showers') {
 			$(".wrapper").css('background-image', 'url(' + artImage[6].sceneUrl +')');
 			$("span.artist").text(artImage[6].artName + " // ");
 			$("span.title").text(artImage[6].artTitle + " // ");
 			$("span.date").text(artImage[6].date);
 		} else if (state == 'Snow' || state === 'Snow Grains' || state === 'Low Drifting Snow' || state === 'Blowing Snow' || state === 'Snow Showers' || state === 'Ice Pellet Showers' || state === 'Thunderstorms and Snow' || state === 'Thunderstorms and Ice Pellets') {
 			$(".wrapper").css('background-image', 'url(' + artImage[7].sceneUrl +')');
 			$("span.artist").text(artImage[7].artName + " // ");
 			$("span.title").text(artImage[7].artTitle + " // ");
 			$("span.date").text(artImage[7].date);
 		} else {
 			$(".wrapper").css('background-image', 'url(' + artImage[23].sceneUrl +')');
 			$("span.artist").text(artImage[23].artName + " // ");
 			$("span.title").text(artImage[23].artTitle + " // ");
 			$("span.date").text(artImage[23].date);
 		};
 	} else if (temp < 10) {
 		if (state === 'Clear' || state === 'Mostly Sunny' || state === 'Partly Sunny' || state === 'Sunny') {
 			$(".wrapper").css('background-image', 'url(' + artImage[9].sceneUrl +')');
 			$("span.artist").text(artImage[9].artName + " // ");
 			$("span.title").text(artImage[9].artTitle + " // ");
 			$("span.date").text(artImage[9].date);
 		} else if (state === 'Cloudy' || state === 'Scattered Clouds' || state === 'Partly Cloudy' || state === 'Patches of Fog' || state === 'Shallow Fog' || state === 'Partial Fog' || state === 'Overcast' || state === 'Mostly Cloudy') {
 			$(".wrapper").css('background-image', 'url(' + artImage[8].sceneUrl +')');
 			$("span.artist").text(artImage[8].artName + " // ");
 			$("span.title").text(artImage[8].artTitle + " // ");
 			$("span.date").text(artImage[8].date);
 		} else if (state === 'Rain' || state === 'Drizzle' || state === 'Hail' || state === 'Mist' || state === 'Fog' || state === 'Rain Mist' || state === 'Rain Showers' || state === 'Thunderstorm' || state === 'Thunderstorms and Rain' || state === 'Thunderstorms with Hail' || state === 'Thunderstorms with Small Hail' || state === 'Freezing Drizzle' || state === 'Freezing Rain' || state === 'Freezing Fog' || state === 'Light Rain Showers' || state === 'Heavy Rain Showers') {
 			$(".wrapper").css('background-image', 'url(' + artImage[10].sceneUrl +')');
 			$("span.artist").text(artImage[10].artName + " // ");
 			$("span.title").text(artImage[10].artTitle + " // ");
 			$("span.date").text(artImage[10].date);
 		} else {
 			$(".wrapper").css('background-image', 'url(' + artImage[23].sceneUrl +')');
 			$("span.artist").text(artImage[23].artName + " // ");
 			$("span.title").text(artImage[23].artTitle + " // ");
 			$("span.date").text(artImage[23].date);
 		};
 	} else if (temp < 15) {
 		if (state === 'Clear' || state === 'Mostly Sunny' || state === 'Partly Sunny' || state === 'Sunny') {
 			 $(".wrapper").css('background-image', 'url(' + artImage[12].sceneUrl +')');
 			 $("span.artist").text(artImage[12].artName + " // ");
 			$("span.title").text(artImage[12].artTitle + " // ");
 			$("span.date").text(artImage[12].date);
 		} else if (state === 'Cloudy' || state === 'Scattered Clouds' || state === 'Partly Cloudy' || state === 'Patches of Fog' || state === 'Shallow Fog' || state === 'Partial Fog' || state === 'Overcast' || state === 'Mostly Cloudy') {
 			$(".wrapper").css('background-image', 'url(' + artImage[11].sceneUrl +')');
 			$("span.artist").text(artImage[11].artName + " // ");
 			$("span.title").text(artImage[11].artTitle + " // ");
 			$("span.date").text(artImage[11].date);
 		} else if (state === 'Rain' || state === 'Drizzle' || state === 'Hail' || state === 'Mist' || state === 'Fog' || state === 'Rain Mist' || state === 'Rain Showers' || state === 'Thunderstorm' || state === 'Thunderstorms and Rain' || state === 'Thunderstorms with Hail' || state === 'Thunderstorms with Small Hail' || state === 'Freezing Drizzle' || state === 'Freezing Rain' || state === 'Freezing Fog' || state === 'Light Rain Showers' || state === 'Heavy Rain Showers') {
 			$(".wrapper").css('background-image', 'url(' + artImage[13].sceneUrl +')');
 			$("span.artist").text(artImage[13].artName + " // ");
 			$("span.title").text(artImage[13].artTitle + " // ");
 			$("span.date").text(artImage[13].date);
 		} else {
 			$(".wrapper").css('background-image', 'url(' + artImage[23].sceneUrl +')');
 			$("span.artist").text(artImage[23].artName + " // ");
 			$("span.title").text(artImage[23].artTitle + " // ");
 			$("span.date").text(artImage[23].date);
 		};
 	} else if (temp < 20) {
 		if (state === 'Clear' || state === 'Mostly Sunny' || state === 'Partly Sunny' || state === 'Sunny') {
 			$(".wrapper").css('background-image', 'url(' + artImage[15].sceneUrl +')');
 			$("span.artist").text(artImage[15].artName + " // ");
 			$("span.title").text(artImage[15].artTitle + " // ");
 			$("span.date").text(artImage[15].date);
 		} else if (state === 'Cloudy' || state === 'Scattered Clouds' || state === 'Partly Cloudy' || state === 'Patches of Fog' || state === 'Shallow Fog' || state === 'Partial Fog' || state === 'Overcast' || state === 'Mostly Cloudy') {
 			$(".wrapper").css('background-image', 'url(' + artImage[14].sceneUrl +')');
 			$("span.artist").text(artImage[14].artName + " // ");
 			$("span.title").text(artImage[14].artTitle + " // ");
 			$("span.date").text(artImage[14].date);
 		} else if (state === 'Rain' || state === 'Drizzle' || state === 'Hail' || state === 'Mist' || state === 'Fog' || state === 'Rain Mist' || state === 'Rain Showers' || state === 'Thunderstorm' || state === 'Thunderstorms and Rain' || state === 'Thunderstorms with Hail' || state === 'Thunderstorms with Small Hail' || state === 'Freezing Drizzle' || state === 'Freezing Rain' || state === 'Freezing Fog' || state === 'Light Rain Showers' || state === 'Heavy Rain Showers') {
 			$(".wrapper").css('background-image', 'url(' + artImage[16].sceneUrl +')');
 			$("span.artist").text(artImage[16].artName + " // ");
 			$("span.title").text(artImage[16].artTitle + " // ");
 			$("span.date").text(artImage[16].date);
 		} else {
 			$(".wrapper").css('background-image', 'url(' + artImage[23].sceneUrl +')');
 			$("span.artist").text(artImage[23].artName + " // ");
 			$("span.title").text(artImage[23].artTitle + " // ");
 			$("span.date").text(artImage[23].date);
 		};
 	} else if (temp < 25) {
 		console.log(state);
 		if (state === 'Clear' || state === 'Mostly Sunny' || state === 'Partly Sunny' || state === 'Sunny') {
 			$(".wrapper").css('background-image', 'url(' + artImage[21].sceneUrl +')');
 			$("span.artist").text(artImage[21].artName + " // ");
 			$("span.title").text(artImage[21].artTitle + " // ");
 			$("span.date").text(artImage[21].date);
 		} else if (state == 'Cloudy' || state === 'Scattered Clouds' || state === 'Partly Cloudy' || state === 'Patches of Fog' || state === 'Shallow Fog' || state === 'Partial Fog' || state === 'Overcast' || state === 'Mostly Cloudy') {
 			$(".wrapper").css('background-image', 'url(' + artImage[17].sceneUrl +')');
 			$("span.artist").text(artImage[17].artName + " // ");
 			$("span.title").text(artImage[17].artTitle + " // ");
 			$("span.date").text(artImage[17].date);
 		} else if (state == 'Rain' || state === 'Drizzle' || state === 'Hail' || state === 'Mist' || state === 'Fog' || state === 'Rain Mist' || state === 'Rain Showers' || state === 'Thunderstorm' || state === 'Thunderstorms and Rain' || state === 'Thunderstorms with Hail' || state === 'Thunderstorms with Small Hail' || state === 'Freezing Drizzle' || state === 'Freezing Rain' || state === 'Freezing Fog' || state === 'Light Rain Showers' || state === 'Heavy Rain Showers') {
 			$(".wrapper").css('background-image', 'url(' + artImage[19].sceneUrl +')');
 			$("span.artist").text(artImage[19].artName + " // ");
 			$("span.title").text(artImage[19].artTitle + " // ");
 			$("span.date").text(artImage[19].date);
 		} else {
 			$(".wrapper").css('background-image', 'url(' + artImage[23].sceneUrl +')');
 			$("span.artist").text(artImage[23].artName + " // ");
 			$("span.title").text(artImage[23].artTitle + " // ");
 			$("span.date").text(artImage[23].date);
 		};
 	} else if (temp < 30) {
 		if (state === 'Clear' || state === 'Mostly Sunny' || state === 'Partly Sunny' || state === 'Sunny') {
 			$(".wrapper").css('background-image', 'url(' + artImage[21].sceneUrl +')');
 			$("span.artist").text(artImage[21].artName + " // ");
 			$("span.title").text(artImage[21].artTitle + " // ");
 			$("span.date").text(artImage[21].date);
 		} else if (state === 'Cloudy' || state === 'Scattered Clouds' || state === 'Partly Cloudy' || state === 'Patches of Fog' || state === 'Shallow Fog' || state === 'Partial Fog' || state === 'Overcast' || state === 'Mostly Cloudy') {
 			$(".wrapper").css('background-image', 'url(' + artImage[20].sceneUrl +')');
 			$("span.artist").text(artImage[20].artName + " // ");
 			$("span.title").text(artImage[20].artTitle + " // ");
 			$("span.date").text(artImage[20].date);
 		} else if (state === 'Rain' || state === 'Drizzle' || state === 'Hail' || state === 'Mist' || state === 'Fog' || state === 'Rain Mist' || state === 'Rain Showers' || state === 'Thunderstorm' || state === 'Thunderstorms and Rain' || state === 'Thunderstorms with Hail' || state === 'Thunderstorms with Small Hail' || state === 'Freezing Drizzle' || state === 'Freezing Rain' || state === 'Freezing Fog' || state === "Light Rain Showers" || state === " Heavy Rain Showers") {
 			$(".wrapper").css('background-image', 'url(' + artImage[22].sceneUrl +')');
 			$("span.artist").text(artImage[22].artName + " // ");
 			$("span.title").text(artImage[22].artTitle + " // ");
 			$("span.date").text(artImage[22].date);
 		} else {
 			$(".wrapper").css('background-image', 'url(' + artImage[23].sceneUrl +')');
 			$("span.artist").text(artImage[23].artName + " // ");
 			$("span.title").text(artImage[23].artTitle + " // ");
 			$("span.date").text(artImage[23].date);
 		};
 	} else {
 		$(".wrapper").css('background-image', 'url(' + artImage[23].sceneUrl +')');
 		$("span.artist").text(artImage[23].artName + " // ");
 		$("span.title").text(artImage[23].artTitle + " // ");
 		$("span.date").text(artImage[23].date);
 	};
};

//add smoke, go over 30,


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
		'artName': 'Francis Guy',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/97.13_colorcorrected_SL1.jpg',
		'artTitle': 'Winter Scene in Brooklyn',
		'date': 'ca. 1819-1820'
	},
	{
		'picState': 'clear0-1',
		'artName': 'George Wesley Bellows',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/51.96_PS1.jpg',
		'artTitle': 'A Morning Snow -- Hudson River',
		'date': '1910'
	},
	{
		'picState': 'rain0-2',
		'artName': 'George Bradford Brainerd',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/1996.164.2-2238_glass_IMLS_SL2.jpg',
		'artTitle': 'A Breakdown, Brooklyn',
		'date': 'ca. 1872-1887'
	},
	{
		'picState': 'snow0-3',
		'artName': 'Breading G. Way',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/X894.114.jpg',
		'artTitle': 'Blizzard of March 1888, Brooklyn',
		'date': '1888'
	},
		{
		'picState': 'cloudy5-4',
		'artName': 'Renata von Hanffstengel',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/CUR.1990.119.26.jpg',
		'artTitle': 'Down to Nowhere',
		'date': '1978'
	},
	{
		'picState': 'clear5-5',
		'artName': 'William Trost Richards',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/32.141_transp1093.jpg',
		'artTitle': 'Early Summer',
		'date': '1888'
	},
	{
		'picState': 'rain5-6',
		'artName': 'Grace Arnold Albee',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/CUR.76.198.92.jpg',
		'artTitle': 'Turbulence',
		'date': '1965'
	},
	{
		'picState': 'snow5-7',
		'artName': 'Frederick Childe Hassam',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/62.68_SL1.jpg',
		'artTitle': 'Late afternoon, New York, Winter',
		'date': '1900'
	},
		{
		'picState': 'cloudy10-8',
		'artName': 'William Trost Richards',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/53.224_SL1.jpg',
		'artTitle': 'Old Orchard at Newport',
		'date': '1875'
	},
	{
		'picState': 'clear10-9',
		'artName': 'Eugene Louis Boudin',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/15.314_SL1.jpg',
		'artTitle': 'The Beach at Trouville',
		'date': 'ca. 1887-1896'
	},
	{
		'picState': 'rain10-10',
		'artName': 'Albert Bierstadt',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/76.79_SL1.jpg',
		'artTitle': 'A Storm in the Rocky Mountains',
		'date': '1863'
	},
		{
		'picState': 'cloudy15-11',
		'artName': 'Thomas Moran',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/32.845_PS2.jpg',
		'artTitle': 'Sunset at Sea',
		'date': '1906'
	},
	{
		'picState': 'clear15-12',
		'artName': 'Thomas Cole',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/67.205.2_SL1.jpg',
		'artTitle': 'A Pic-Nic Party',
		'date': '1846'
	},
	{
		'picState': 'rain15-13',
		'artName': 'Francois Verheyden',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/06.322_cropped_bw.jpg',
		'artTitle': 'School Girls Caught in the Rain',
		'date': '1869'
	},
		{
		'picState': 'cloudy20-14',
		'artName': 'Albert Bierstadt',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/2004.49.jpg',
		'artTitle': 'Blue and White Cloud',
		'date': 'n.d.'
	},
	{
		'picState': 'clear20-15',
		'artName': 'William Glackens',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/67.24.6_colorcorrected_SL1.jpg',
		'artTitle': 'Bathing at Bellport',
		'date': '1912'
	},
	{
		'picState': 'rain20-16',
		'artName': 'Everett Shinn',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/43.227_PS6.jpg',
		'artTitle': 'Fifth Avenue',
		'date': '1910'
	},
		{
		'picState': 'cloudy25-17',
		'artName': 'George Inness',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/41.775_SL3.jpg',
		'artTitle': 'Sunrise',
		'date': '1887'
	},
	{
		'picState': 'clear25-18',
		'artName': 'some guy',
		'sceneUrl': 'http://placekitten.com/800/800',
		'artTitle': 'untitled',
		'date': '1999'
	},
	{
		'picState': 'rain25-19',
		'artName': 'H.S. Lewis',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/1996.164.5-3_bw_SL1.jpg',
		'artTitle': 'Surf Avenue, Coney Island',
		'date': '1904'
	},
		{
		'picState': 'cloudy30-21',
		'artName': 'Claude Monet',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/68.48.1_colorcorrected_SL1.jpg',
		'artTitle': 'Houses of Parliament, Sunlight Effect',
		'date': '1903'
	},
	{
		'picState': 'clear30-22',
		'artName': 'William Merrit Chase',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/19.96_SL1.jpg',
		'artTitle': 'Shinnecock Hills',
		'date': 'ca. 1895'
	},
	{
		'picState': 'rain30-23',
		'artName': 'Pat Steir',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/1990.109_PS2.jpg',
		'artTitle': 'Everlasting Waterfall',
		'date': '1989'
	},
	{
		'picState': 'over30-24',
		'artName': 'Jules de Balincourt',
		'sceneUrl': 'http://cdn2.brooklynmuseum.org/images/opencollection/objects/size2/2007.34_PS6.jpg',
		'artTitle': 'Not Yet Titled',
		'date': '2007'
	}
];

// artWeatherApp.getInfoFromArray = artImage[0];
