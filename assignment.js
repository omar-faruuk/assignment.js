  
  
  // convert km to meter.

  function kilometerToMeter(km){
     var meter = km * 1000;
     return meter;
  }

  
  
 // This is a budget-Calculator.

 function budgetCalculator(watch, mobile, laptop){
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var totalCost = watchPrice + mobilePrice + laptopPrice;
    return totalCost;
 }

  


  // Sum of hotel cost.
 
 function hotelCost(day){
    var cost = 0;
    
   if(day <=10){
        cost = day * 100;
    }
  else if(day <=20){
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
  else{
        var firstPart = 10*100;
        var secondPart = 10*80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
       cost = firstPart + secondPart + thirdPart;
    }
    return cost;
  }

 


  // find largest string from an array.

  function megaFriend(friends){
    var max = " ";
 for (var i = 0; i < friends.length; i++){
      var element = friends[i];
   if(element.length > max.length){
      max = friends[i]; 
    }
     }
    return max;
    }

 