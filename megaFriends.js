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

var friends = ['shumon', 'babuiiiiiiiiiiiiiii', 'kamor', 'omarrrrrr', 'babu']
var friendname= megaFriend(friends);
console.log(friendname)