const _cache_ = [1n, 1n];
export const fibonacci = (num) => {
    const bigint = BigInt(num);
    if(bigint <= 2n) return 1n;
    const key = (num - 1n).toString();
    if(_cache_[key]) return _cache_[key];
    for(let i = 2n; i < num;){
        _cache_[i.toString()] = _cache_[(i - 1n).toString()] + _cache_[(i - 2n).toString()];
        i += 1n;
    }
    return _cache_[key];
}