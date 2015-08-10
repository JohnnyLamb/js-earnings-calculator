var Prices = require('../js/utility.js');


beforeEach(function(){
  var meal = new Prices("20","0.1","0.2");
});

describe('#subTotal', function() {
  it('calculates the subtotal', function() {

    expect(meal.subTotal()).toEqual(110);
  });
});
