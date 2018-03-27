
  var config = {
    apiKey: "AIzaSyC3EVfqtJH1eIqrS2BX0WqEl8VuwC1OiWM",
    authDomain: "life-works-3.firebaseapp.com",
    databaseURL: "https://life-works-3.firebaseio.com",
    projectId: "life-works-3",
    storageBucket: "life-works-3.appspot.com",
    messagingSenderId: "901819600268"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  $("formSubmit").on("click", function(event){
    event.preventDefault();
    
    var firstName = $("#first-name").val().trim();
    var lastName = $("#last-name").val().trim();
    var yourEmail = $("#your-email").val().trim();
    // var yourMessage = $("#your-messeage").val().trim();

    var contactInfo = {
      first: firstName,
      last: lastName,
      email: yourEmail,
      // message: yourMessage,
    }
    database.ref().push(contactInfo);
    console.log(contactInfo.first);
    console.log(contactInfo.last);
    console.log(contactInfo.email);
    console.log(contactInfo.message);
    
    alert("Thank You! We will be in contact with you soon! #LifeWorks");

    $("#first-name").val("")
    $("#last-name").val("")
    $("#your-email").val("")
    $("#your-message").val("")

    database.ref().on("child_added", function(childSnapshot, prevChildKey){
      console.log(childSnapshot.val());
      var firstName = childSnapshot.val().first; 
      var lastName = childSnapshot.val().last; 
      var yourEmail = childSnapshot.val().email; 
      var yourMessage = childSnapshot.val().message;
      
      console.log(firstName);
      console.log(lastName);
      console.log(yourEmail);
      console.log(yourEmail);
      
    })


  })