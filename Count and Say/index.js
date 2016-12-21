var countAndSay = function(n) {


    var fuc = function(string){
        var result = '';

        var length = string.length;


        var current = string[0], num = 1;
        for(var i = 1; i < length; i++){
            if(string[i] === current){
                num++;
            }else{
                result += num + current;
                current = string[i];
                num = 1;
            }
        }

        result += num + current;
        return result;
    }

    result = '1';
    while(--n){
        result = fuc(result);
    }


    return result;


};

console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));
console.log(countAndSay(6));
console.log(countAndSay(7));
console.log(countAndSay(8));
console.log(countAndSay(9));
console.log(countAndSay(10));
