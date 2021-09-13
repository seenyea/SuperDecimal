var seed = 2n ** 100 - 1n;

function middleSquareMethod(){
    var result = (seed ** 2n).toString().slice(1, 3); // extracting the middle value.

    seed = parseInt(result);

    return parseInt(result);

}