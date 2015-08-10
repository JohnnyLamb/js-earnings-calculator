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

    // clear button
    var tipPercent = $('input[name="meal-tiprate"]').val();
    $('form').trigger("reset");

    var myMeal = new Prices(mealPrice,taxRate,tipPercent);

        // this is for counting how many meals
        meals.push(total);
        var count = meals.length;

        totalTip += parseFloat(myMeal.tipAmount().toFixed(2));

        averageTip = myMeal.tipAmount() / count;

        // APPEND TO TOTAL CHARGES

    $('#total').html(" " + myMeal.total() + " should be the total.");

    $('#tip').html(" " + myMeal.tipAmount.toFixed(2) + " should be how much you tip.");

    $('#sub').html(" " + myMeal.subTotal() + " should be subtotal.");
// to append to TOTAL EARNINGS

    $('#tips').html(" " + totalTip + " should be all tips.");

    $('#meals').html(" " + count + " should be number of meals.");

    $('#average').html(" " + averageTip.toFixed(2) + " should be average tip.");
  });
// to reset the screen
  $('input[type="button"]').on('click', function(event){

    $('span').not('.small').html('');
    meals = [];
  });
});
