$( document ).ready(function() {
  console.log( "ready!" );

  // funtion ticketEvents
  // $.ajax({
  //     type:"GET",
  //     url:"https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=" + cityName + "&apikey=2TjSFOvTX2jWbM7WWpYcfZjpPKkXQ4Ry",
  //     async:true,
  //     dataType: "json",
  //     success: function(json) {
  //                 console.log(json);
  //                 var eventName=$("<h1>").text(respond.events[0]);
  //                 // var eventPic =;
  //                 // var eventLoc =;
  //                 // var eventDate =;
              
  //                 $("#eventp").empty();
  //                 $("#eventp").append(eventNAme)
  //              },
  //     error: function(xhr, status, err) {
  //                 // This time, we do not end up here!
  //              }
  //   });

  //   $("#eventCity").on("click", function(event) {
  //     event.preventDefault();
  //     var inputCity= $("#eventInput").val().trim();
  //     ticketEvents(inputCity);
  //   });








  function ticketEvents(cityName){
    // var query ="https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=" + cityName + "&apikey=2TjSFOvTX2jWbM7WWpYcfZjpPKkXQ4Ry";
  $.ajax({
    type: "GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=" + cityName + "&apikey=aC36zPV9sZXh3RS8cwPU2FHUsa9yEEyY",  
    async:true,
  }).then(function(respond){
    console.log(respond);
    var eventName=$("<h1>").text(respond._embedded.events[0].name);
    // var eventPic =;
    // var eventLoc =;
    // var eventDate =;

    $("#eventp").empty();
    $("#eventp").append(eventName)
    
  });
  }
  $("#eventCity").on("click", function(event) {
    event.preventDefault();
    var inputEvent= $("#eventInput").val().trim();
    ticketEvents(inputEvent);
  });
})  