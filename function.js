function evenify(num){
    var result;
    if(num % 2 == 0){
        //  return num;
        result = num;
    }
    else{
        // return num*2;
        result = num*2;
    }
    // return 5000;
    return result;
}
var result = evenify(9);
var square = result* result;
console.log('square', square);

function evenify_all(nums){
    for(var i = 0; i < nums.length; i++){
        var num = nums[i];
         if(num % 2 == 0){
        console.log(num, 'is an even number');
    }
    else{
        console.log(num*2, 'is an odd number');
    }        
    }
}

evenify_all(5);
// console.log(result);

nums = [8, 12, 89, 45, 8];
// evenify_all(nums);



friends_age = [18, 23, 16, 17, 28, 25];
// evenify_all(friends_age);

family_member = [51, 22, 33, 99, 88];
// evenify_all(family_member);