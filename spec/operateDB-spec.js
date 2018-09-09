const operateDB = require("../src/operateDB");

describe('operateDB test',function () {
    it('selectItem should return ITEM000001 Message when given ITEM000000',function () {
        var expectText = {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        };

        var result = operateDB.selectItem("ITEM000000");

        expect(expectText).toEqual(result);
    });

    it('selectItemFreeType should return BUY_TWO_GET_ONE_FREE when given ITEM000000',function () {

        var result = operateDB.selectItemFreeType('ITEM000000');

        expect(result).toEqual('BUY_TWO_GET_ONE_FREE');
    });
});