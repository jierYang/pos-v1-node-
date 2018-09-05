function countItemSelected(inputs) {
    return inputs.reduce((m, x) => m.set(x, (m.get(x) || 0) + 1), new Map());
}

function printSelected(itemSelected) {

}

function printInventory(inputs) {
    console.log("***<没钱赚商店>购物清单***\n");

    var itemSelected = countItemSelected(inputs);

    printSelected(itemSelected);

    console.log("----------------------\n");

    console.log("----------------------\n");

    console.log("**********************");
};

module.exports = {
    printInventory : printInventory,
    countItemSelected : countItemSelected,
    printSelected :printSelected
};
