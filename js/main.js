// add scripts

$(document).on('ready', function() {

    var totalTip = 0;
    var averageTip = 0;
    var meals = [];

  $('input[type="submit"]').on('click', function(event){
    event.preventDefault();

    var mealPrice = $('input[name="meal-price"]').val();
    console.log(mealPrice);

    var taxRate = $('input[name="meal-taxrate"]').val();
    console.log(taxRate);

    var tipPercent = $('input[name="meal-tiprate"]').val();
    console.log(tipPercent);
    $('form').trigger("reset");



    var answers = helperMath(mealPrice,taxRate,tipPercent);

    var total = answers[2];

    var tip = answers[1];

    var subtotal = answers[0];

//  grab lines 34 - 39 and put them in a utility function, also when clicking reset button we need to reset the total earnings values

        meals.push(total);
        var count = meals.length;

        totalTip += tip ;

        averageTip = tip / count;

        // APPEND TO TOTAL CHARGES

    $('#total').html(" " + total + " should be the total.");

    $('#tip').html(" " + tip + " should be how much you tip.");

    $('#sub').html(" " + subtotal + " should be subtotal.");
// to append to TOTAL EARNINGS


    $('#tips').html(" " + totalTip + " should be all tips.");

    $('#meals').html(" " + count + " should be number of meals.");

    $('#average').html(" " + averageTip + " should be average tip.");


  });


  $('input[type="button"]').on('click', function(event){


    console.log("time to reset");
    console.log($('span').not('.small'));
    $('span').not('.small').html('');
    meals = [];

  });

});
