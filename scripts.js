$(document).ready(function() {

  // Run function on form submit
  $("form").submit(loanLogic);

  // Set default bg color of loan result card
  $("#resultCard").css("background-color", "#6c757d");

  // Define loanLogic function
  function loanLogic(event) {

    event.preventDefault();

    // Set salary variable to input
    let salary = $("#salary").val();

    // Set credit variable to input
    let credit = $("#credit").val();

    // Set months variable to input
    let months = $("#months").val();

    // If salary is equal or above $40,000
    if (salary >= 40000) {

      // If credit score is equal or above 600
      if (credit >= 600) {
        $("#resultCard").css("background-color", "#28a745");
        $("#loanResult").html("<i class='fas fa-smile mb-3'></i><br> Loan approved!");
      }

      // If credit score is below 600
      else {

        // If months is over 12 months
        if (months > 12) {
          $("#resultCard").css("background-color", "#28a745");
          $("#loanResult").html("<i class='fas fa-smile mb-3'></i><br> Loan approved!");
        }

        // If months is equal or below 12 months
        else {
          $("#resultCard").css("background-color", "#dc3545");
          $("#loanResult").html("<i class='fas fa-frown mb-3'></i><br> Sorry, loan denied");
        }

      }
    }
    // If salary is below $40,000
    else {

      // If credit score is equal or above 600
      if (credit >= 600) {

        // If months is over 12 months
        if (months > 12) {
          $("#resultCard").css("background-color", "#28a745");
          $("#loanResult").html("<i class='fas fa-smile mb-3'></i><br> Loan approved!");
        }

        // If months is equal or below 12 months
        else {
          $("#resultCard").css("background-color", "#dc3545");
          $("#loanResult").html("<i class='fas fa-frown mb-3'></i><br> Sorry, loan denied");
        }

      } else {
        // If credit score is below 600
        $("#resultCard").css("background-color", "#dc3545");
        $("#loanResult").html("<i class='fas fa-frown mb-3'></i><br> Sorry, loan denied");
      }

    }


  }

});