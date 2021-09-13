const _cache_ = [1n, 1n];
export const factorial = (num) => {
    const bigInt = BigInt(num);
    const key = bigInt.toString();
    if(_cache_[key]) return _cache_[key];
    for(let i = 2n; i <= num;){
        _cache_[i.toString()] = _cache_[(i - 1n).toString()] * i;
        i = i + 1n;
    }
    return _cache_[num];
}