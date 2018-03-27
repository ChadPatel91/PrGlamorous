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
    var results = respond._embedded.events
    $("#eventP").empty();

    for (var i=0; i<results.length; i++){
    var eventName=$("<h3>").text(results[i].name);
    console.log(eventName);

    var eventLink =$("<a class='btn btn-sm btn-outline-dark'> target='_blank'").attr("href", results[i].url).attr("class", "event-info").text("Click for more details.");

    console.log(eventLink);

    $("#eventP").append(eventName, eventLink)
    }  
  });
  }
  $("#eventCity").on("click", function(event) {
    event.preventDefault();
    var inputEvent= $("#eventInput").val().trim();
    ticketEvents(inputEvent);
  });
})  