class pizza{
  //type constructor below
constructor(s, mt, vt){
  this.size = s;
  this.meatToppings = mt;
  this.veggieToppings = vt;
  var size = ["S","M","L","XL"];
  var meatToppings = [];
  var veggieToppings = [];
}


  //type instance functions below
  sizeCost(){
    if(this.size[0]){
      price = 7.99;
      return price;
    }
    else if(this.size[1]){
      price = 9.99;
      return price;
    }
    else if(this.size[2]){
      price = 12.99;
      return price;
    }
    else{
      price = 15.99;
      return price;
    }
  }
toppingCost(top){
  if(top == meat){
    meat * 0.99;
    return meat;
  }
  if(top == veggie){
    veggie * 0.50;
    return veggie;
  }
}


  //type class functions below


}
