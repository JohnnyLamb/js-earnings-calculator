// add scripts

$(document).on('ready', function() {


  $('input[type="submit"]').on('click', function(event){
    event.preventDefault();

    var $mealPrice = $('input[name="meal-price"]').val();
    console.log($mealPrice);
    var $taxRate = $('input[name="meal-taxrate"]').val();
    console.log($taxRate);
    var $tipPercent = $('input[name="meal-tiprate"]').val();
    console.log($tipPercent);
    $('form').trigger("reset");


    helperMath($mealPrice,$taxRate,$tipPercent);

    $('#totalcharges > p:last-child').append(" " + total + " should be how much you tip.");

    $('#totalcharges > p:nth-child(2)').append(" " + tipAmount + " should be how much you tip.");

    $('#totalcharges > p:first-child').append(" " + subTotal + " should be how much you tip.");


  });


//   $('input[type="button"]').on('click', function(event){
//     event.preventDefault();

//     console.log("time to reset");

//     $('form').trigger("reset");

//   });

});
