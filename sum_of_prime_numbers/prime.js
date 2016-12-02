const Number = 2000000;

const isPrime = number => {
    if(number === 2) {
        return true;
    }
    for(let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
        if( number % i === 0) return false;
    }
    return true;
};

let result = 0;
for(let i = 2; i < Number; i++) {
    if(isPrime(i)) {
        result += i;
    }
}

console.log(result);
