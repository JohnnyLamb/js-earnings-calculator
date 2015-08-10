
var Prices = function(mealPrice,taxRate,tipPercent){
  this.mealPrice = parseFloat(mealPrice);
  this.taxRate = parseFloat(taxRate);
  this.tipPercent = parseFloat(tipPercent);
};

Prices.prototype.subTotal = function(){
  return ((this.mealPrice * this.taxRate) + this.mealPrice);
};

Prices.prototype.tipAmount = function(){

  return (this.subTotal() * this.tipPercent);

};

Prices.prototype.total = function(){
  this.tipAmount = parseFloat(this.tipAmount());
  return this.tipAmount + this.subTotal();
};


module.exports = Prices
