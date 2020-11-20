import { Shop, Item } from '../gilded-rose';

let sulfuras = 'Sulfuras, Hand of Ragnaros'

describe(sulfuras, function () {

    it('does not reduce sellIn value', function () {
        const gildedRose = new Shop([new Item(sulfuras, 1, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(1);
    });
    it("does not change quality value", function () {
        const gildedRose = new Shop([new Item(sulfuras, 1, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(80);
    });
});