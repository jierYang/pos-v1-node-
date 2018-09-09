var FreeTypeOneFree = "BUY_TWO_GET_ONE_FREE";

function calculateItemPrice(count, price, FreeType) {
    if (FreeType === FreeTypeOneFree) {
        return count>2? (count-1)*price :count*price;
        // return (count - count / 3) * price;
    }
    else {
        return count * price;
    }
}

function countItemSelected(inputs) {
    // var map =  inputs.reduce((m, x) => m.set(x, (m.get(x) || 0) + 1), new Map());

    let map = {};

    for (let i = 0; i < inputs.length; i++) {

        let itemMes = inputs[i].split('-');

        let barcode = itemMes[0];

        let count = parseInt(itemMes[1] === undefined ? 1 : itemMes[1]);

        map[barcode] = map[barcode] ? map[barcode] + count : count;
    }

    return map;
}

module.exports = {
    calculateItemPrice: calculateItemPrice,
    countItemSelected: countItemSelected
};