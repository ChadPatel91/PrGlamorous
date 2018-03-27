$( document ).ready(function() {
  console.log( "ready!" );

function weatherForecast(city) {

  // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
  var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city +"&APPID=3d5820718da1fb62dd388492e5309b80";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    console.log(response);
//response.list[0].main.temp_min
    var tempMax = $("<h1>").text("A High of " + parseFloat(1.8*(response.list[6].main.temp_max-273)+32).toFixed(1)).addClass("tempInfo");
    var tempMin = $("<h1>").text("A Low of " + parseFloat(1.8*(response.list[8].main.temp_min-273)+32).toFixed(1)).addClass("tempInfo");
    var humidity= $("<h1>").text("The Humidity will be at " + response.list[6].main.humidity + "%").addClass("tempInfo");
    var skys= $("<h1>").text("With " + response.list[6].weather[0].description+"'s all day!").addClass("tempInfo");

    $("#weatherP").empty();
    $("#weatherP").append(tempMax, tempMin, humidity, skys);
  });
 
};

$("#selectCity").on("click", function(event) {
  event.preventDefault();
  var inputCity= $("#cityInput").val().trim();
  weatherForecast(inputCity);
}); 

  //
});
