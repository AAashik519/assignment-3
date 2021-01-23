
// //problem 1

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}

var result = kilometerToMeter(9);
if (result > 0) {
    console.log(result);
}
else {
    console.log("please input positive value");
}



// //problem 2 

function budgetCalculator (clock, phone,laptop){
    var totallBudget= clock*50 +phone*100 + laptop*500;
    return totallBudget ;

}
result =budgetCalculator( 2,1,5);
console.log(result);



//problem 3
function hotelCost(days){
    if(days<=10)
    {
        var Cost =days*100;
        return Cost;

    }
    else if( days >10 && days <=20){
        var condi_days= days-10;
        var condi_cost=condi_days*80;
        Cost= condi_cost+ (10*100);
        return Cost;
    }
    else{
        var Cost =days*50;
        return Cost;
    }
}

var totalCost = hotelCost(15);
console.log(totalCost);



// problem 4
 
var max = [];
 function megaFriend( friendName){
for (var i = 0; i < friend.length; i++) {

    var element = friend[i].length;
    if (element > max) {
        max = element;
        return max;
    }
}
 }

var friend = [ 'rakib', 'sabbir', 'siam', 'Al-Amin Ashik', 'nazir','moyeen'];
 
 var largeNumber = megaFriend(friend );
 console.log(largeNumber);

 