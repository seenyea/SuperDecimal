export const gcd = (num1, num2) => {
    if((typeof num1 !== 'number') || (typeof num2 !== 'number')) 
    return false;
    
    let a = BigInt(num1);
    let b = BigInt(num2);

    const isNegtive = false;

    if(a < 0n){
        a = -a;
        isNegtive = true;
    }

    if(b < 0n){
        b = -b;
        isNegtive = true;
    }


    while(b) {
        var t = b;
        b = a % b;
        a = t;
    }
    return a;
} 