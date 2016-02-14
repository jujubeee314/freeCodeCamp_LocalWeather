$(document).ready(function() {

  var lon = "";
  var lad = "";
  var weatherAPPID = "a06d5911b248d0db018ccaa442c21977";

  $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=07305,us&appid=a06d5911b248d0db018ccaa442c21977", function(json) {
    $(".weatherData").html(JSON.stringify(json));
  });

});
