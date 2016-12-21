var canJump = function(nums) {

    var max_move = 0;
    for(var i = 0; i < nums.length; i++){
        if(i > max_move) return false;
        max_move = Math.max(max_move, i + nums[i]);
    }

    return true;

};


console.log(canJump([1, 0, 4]));
