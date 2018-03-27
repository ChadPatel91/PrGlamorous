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
    var nameCity= $("<h1>").text("Life Works in " + response.city.name + "!!!").addClass("nameCity");
    var tempMax = $("<h2>").text("A High of " + parseFloat(1.8*(response.list[13].main.temp_max-273)+32).toFixed(1)).addClass("tempInfo");
    var tempMin = $("<h2>").text("A Low of " + parseFloat(1.8*(response.list[0].main.temp_min-273)+32).toFixed(1)).addClass("tempInfo");
    var humidity= $("<h2>").text("The Humidity will be at " + response.list[6].main.humidity + "%").addClass("tempInfo");
    var skys= $("<h2>").text("With " + response.list[6].weather[0].description+"'s all day!").addClass("tempInfo");
 
    $("#weatherP").empty();
    $("#weatherP").append(nameCity, tempMax, tempMin, humidity, skys);
  });
 
 };
 
 $("#selectCity").on("click", function(event) {
  event.preventDefault();
  var inputCity= $("#cityInput").val().trim();
  weatherForecast(inputCity);
 });
 
  //
 });