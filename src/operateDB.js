const datbase = require("./datbase");

function selectItem(itemName) {
    let result = "";

    let items = datbase.loadAllItems();

    for(let item in items){

        if(items[item].barcode === itemName){
           result = items[item];
        }
    }

    return result;
}

function selectItemFreeType(barcodeObject) {

    var result = "";

    var free = datbase.loadPromotions();

    for(var barcode in free[0].barcodes){

        if(free[0].barcodes[barcode] === barcodeObject){

            result = free[0].type;
        }
    }

    return result;
}

module.exports = {
    selectItem: selectItem,
    selectItemFreeType : selectItemFreeType
};