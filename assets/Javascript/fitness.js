$(document).ready(function(){
  console.log("hello")
  $(".calculateBMI").on("click", function(e) {
      e.preventDefault();
      console.log('hi');
      var weight = $("[name='weight']").val();
      var height = $("[name='height']").val();
      if (weight > 0 && height > 0) {
          var finalBmi = (weight / (height * height)) * 703;
          $("#dopeBMI").val(finalBmi);
          
          if (finalBmi < 18.5) {
              $("#meaning").val("You are underweight.");
          }
          if (finalBmi > 18.5 && finalBmi < 24.9) {
              $("#meaning").val("You are normal.");
          }
          if (finalBmi > 24.9 && finalBmi < 29.99) {
              $("#meaning").val("You are overweight.");
          }
      } else {
          $("#meaning").val("You are obese.");
          }   
  });
});

function clearValues() {
  weight = "";
  height = "";
  finalBmi = "";
  console.log('empty');
}

$(".clearBMI").on("click",clearValues);
