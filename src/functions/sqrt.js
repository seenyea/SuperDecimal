export const sqrt = (num) => {
    let right = BigIt(num);
    let left = 0n;
    let half = (right + left) / 2n;
    let n = 100;
    while(n--){
        if(delta > 0n){
            right = half;
        }else if(delta < 0n){
            left = half;
        }else{
            return half;
        }
        half = (right + left) / 2;
        delta = half * half - num;
    }

    return half;
}