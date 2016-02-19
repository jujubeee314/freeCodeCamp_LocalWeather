$(document).ready(function() {

  var lon = lon || -74.1046149;
  var lat = lat || 40.708054;

  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {
       console.log("inside navigator")
       lat = position.coords.latitude;
       console.log(lat);
       lon = position.coords.longitude;
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

    var cel = Math.round(json.main.temp - 273.15);
    var fah = Math.round(cel * 9/5 + 32);
    $(".temp").html(cel + "&deg;");
    $(".convert").on("click", function () {
      if($(".convert").html() == "C") {
        $(".temp").html(fah + "&deg;");
        $(".convert").html("F");
      }
      else if ($(".convert").html() == "F") {
        $(".temp").html(cel + "&deg;");
        $(".convert").html("C");
      }
    });

    var desc = json.weather[0].main;
    console.log(desc);
    switch (desc) {
      case "Clear":
        $(".weatherbg").css("background-image","url('https://snapshotsofwanaka.files.wordpress.com/2013/06/20130606-161727.jpg')");
        break;
      case "Snow":
        $(".weatherbg").css("background-image","url('https://experiencepreferred.files.wordpress.com/2010/02/p2102152.jpg')");
        break;
      case "Rain":
        $(".weatherbg").css("background-image","url('http://onpasture.com/wp-content/uploads/2015/02/rain-04.jpg')");
        break;
      case "Thunderstorm":
        $(".weatherbg").css("background-image","url('http://www.clouds365.com/blog/wp-content/uploads/2013/06/4-01-13-lightning-wallcloud-paducah-tx.jpg')");
        break;
      case "Clouds":
        $(".weatherbg").css("background-image","url('http://www.photos-public-domain.com/wp-content/uploads/2012/04/gray-overcast-sky.jpg')");
        break;
      default:


    }
    $(".desc").html(desc);

  });

});
