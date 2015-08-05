var helperMath = function(mealPrice,taxRate,tipPercent){


    var subTotal = (mealPrice * taxRate) + mealPrice;

    var tipAmount = (subTotal * tipPercent);

    var total = tipAmount + subTotal;

    return subTotal, tipAmount, total;

};

