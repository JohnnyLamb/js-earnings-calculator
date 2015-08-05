var helperMath = function(mealPrice, taxRate, tipPercent) {


  mealPrice = parseFloat(mealPrice);

  taxRate = parseFloat(taxRate);

  tipPercent = parseFloat(tipPercent);


  console.log(tipPercent);

  var subTotal = ((mealPrice * taxRate) + mealPrice);


  var tipAmount = (subTotal * tipPercent).toFixed(2);
  tipAmount = parseFloat(tipAmount);


  var total = tipAmount + subTotal;

  var answers = [subTotal, tipAmount, total];

  return answers;

};
