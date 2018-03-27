// $("#nutriments").text("Nutriments");
var barcode = 0;

$("#barcodeGo").click(function() {
  barcode = $("#barcodeNum").val();
  displayProductInfo(barcode);
  // console.log(barcode);
});


// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayProductInfo(barcode) {

  var queryURL = "https://world.openfoodfacts.org/api/v0/product/" + barcode + ".json";
  //689544081661

  // Creates AJAX call for the specific barcode button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        // console.log(response.product.product_name);
        // console.log(response.status_verbose);
        // console.log(response.product.ingredients[0].text);
        // console.log(response.product.ingredients.length);
        // console.log(response.product.nutriments);
        

        var answer = response.status_verbose;
      
        var productFinderPlaceholderDiv = $('#productFinderPlaceholder');
        var button = $('<button>');
        button.append(answer);
        productFinderPlaceholderDiv.append(button);
        if (answer==="product found"){
          $(button).addClass("btn btn-success");
        }
        else {
          $(button).addClass("btn btn-danger");
        }
        

        var productName = response.product.product_name;
        var ingredients = response.product.ingredients;
        // $("#nutriments").text("Nutriments");    
        
        for (i=0;i<response.product.ingredients.length;i++){
          // console.log(response.product.ingredients[i].text);
          var liDiv = $('#ingredients');
          var buttonDiv = $('<button>').addClass("list-group-item list-group-item-action")
          
          liDiv.append(buttonDiv.text(response.product.ingredients[i].text));
          i++;
        }

        
        $("#productName").text(response.product.product_name);
        $("#productCountry").text(response.product.countries);
        $("#productBrands").text(response.product.brands);
        $("#productSize").text(response.product.serving_size);
        $("#productGrade").text(response.product.nutrition_grades_tags[0]);
        
        
        
               

        // $.each( response.product.ingredients, function( key, value ) {
        //   var ingreDiv = $('#nutriments');
        //   var ingreButtonDiv = $('<button>').addClass("list-group-item list-group-item-action") 
        //   ingreDiv.append(ingreButtonDiv.text( "Name: " + key + ", Value: " + value ));
        //   var chad=response.product.nutriments
        //   console.log(chad.carbohydrates_serving);
        // }); 
        console.log(response.product.brands_tags);

        

    // console.log(response.Poster);
    // console.log(response.Ratings[0].Value);
    // console.log(response.Released);
    // console.log(response.Plot);
    // var movieImage = $('<img>').attr("src",response.Poster);
    // var movieRating = $("<div>").text(response.Ratings[0].Value);
    // var movieReleased = $("<div>").text(response.Released);
    // var moviePlot = $("<div>").text(response.Plot);
    // divMovie.append(movieImage);
    // divMovie.append(movieRating);
    // divMovie.append(movieReleased);
    // divMovie.append(moviePlot);
    // movieView.append(divMovie); 


  });

}
