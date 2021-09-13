const sqrt = (num) => {
    let right = num;
    let left = 0;
    let half = (right + left) / 2;
    let delta = half * half - num;
    while(Math.abs(delta) > 0.0001){
        if(delta > 0){
            right = half;
        }else if(delta < 0){
            left = half;
        }else{
            break;
        }
        half = (right + left) / 2;
        delta = half * half - num;
    }

    return half;
}