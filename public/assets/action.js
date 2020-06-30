// Modified from Caroline Barriere's original file
// jQuery that will "listen" to the html WorksSurvey.html
$(document).ready(function(){

  $('form').on('submit', function(){
      
      // var item = $('form input');
      // console.log(item.serializeArray());

      $.ajax({
        type: 'POST',
        url: '/WorksSurvey',
        data: $(this).serializeArray(),
        success: function(data){
          // do something with the data via front-end framework
          // Make the submit button blue, disabled and saying Thank you
          $("#bb").css("background-color", "rgb(0, 102, 255)");
          $("#bb").prop("disabled", "true");
          $("#bb").text("Thank you!");
        }
      });
      return false;
  });
});
