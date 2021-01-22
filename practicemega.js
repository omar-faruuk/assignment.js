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

var count = hotelCost(25);
console.log(count)

