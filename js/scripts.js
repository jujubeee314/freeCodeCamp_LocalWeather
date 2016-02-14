$(document).ready(function() {

  var lon;
  var lat;

  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {
       lat = Math.round(position.coords.latitude);
       console.log(lat);
       lon = Math.round(position.coords.longitude);
       console.log(lon);
     });
   }

  var weatherAPPID = "a06d5911b248d0db018ccaa442c21977";

  var weatherCall = "http://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + lon + "&appid=" + weatherAPPID;

  console.log(weatherCall);

  $.getJSON(weatherCall, function(json) {
    $(".weatherData").html(JSON.stringify(json));


    var city = json.name;
    var country = json.sys.country;
    $(".location").html(city + ", " + country);

    var temp = json.main.temp - 273.15;
    $(".temp").html(temp);

    var desc = json.weather.main;
    $(".desc").html(desc);

  });

});
